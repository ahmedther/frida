Java.perform(function () {
  var libname = "/data/local/tmp/libMARS.so";

  // Try native loading first
  try {
    Module.load(libname);
  } catch (e) {
    console.log("[*] Native load failed, trying Java load");

    // Fallback to Java loading
    var System = Java.use("java.lang.System");
    System.load(libname);
  }

  // Verify library is loaded
  Process.enumerateModules().forEach(function (module) {
    if (module.path.includes("libMARS.so")) {
      console.log("[+] Found loaded library at: " + module.path);
      console.log("[+] Base address: " + module.base);
    }
  });
  function findNetworkFunctions() {
    const networkPatterns = ["connect", "send", "ssl", "https", "socket"];

    const results = [];
    Process.enumerateModules().forEach((module) => {
      if (module.path.includes("libMARS.so")) {
        console.log("[+] Analyzing module: " + module.path);

        // Enumerate exports
        module.enumerateExports().forEach((exp) => {
          networkPatterns.forEach((pattern) => {
            if (exp.name.toLowerCase().includes(pattern)) {
              results.push({
                address: exp.address,
                name: exp.name,
                type: exp.type,
              });
            }
          });
        });

        // Enumerate symbols
        module.enumerateSymbols().forEach((sym) => {
          networkPatterns.forEach((pattern) => {
            if (sym.name.toLowerCase().includes(pattern)) {
              results.push({
                address: sym.address,
                name: sym.name,
                type: sym.type,
              });
            }
          });
        });
      }
    });
    return results;
  }

  // Patch a function to prevent network calls
  function patchNetworkFunction(address) {
    try {
      Interceptor.replace(
        address,
        new NativeCallback(
          function () {
            console.log("[+] Blocked network call at: " + address);
            return 0; // Return success without actually making the call
          },
          "int",
          []
        )
      );
      return true;
    } catch (e) {
      console.log("[-] Failed to patch address: " + address + " - " + e);
      return false;
    }
  }

  // Main analysis and patching logic
  const networkFuncs = findNetworkFunctions();
  console.log(
    "[+] Found " + networkFuncs.length + " network-related functions"
  );

  networkFuncs.forEach((func) => {
    console.log("[*] Found network function:");
    console.log("    Name: " + func.name);
    console.log("    Address: " + func.address);
    console.log("    Type: " + func.type);

    if (patchNetworkFunction(func.address)) {
      console.log("[+] Successfully patched: " + func.name);
    }
  });

  // Monitor for dynamic network calls
  Interceptor.attach(Module.findExportByName(null, "connect"), {
    onEnter: function (args) {
      console.log("[!] Detected connect() call");
      // Return -1 to prevent connection
      this.returnValue = -1;
    },
  });
});
