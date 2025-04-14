Java.perform(function () {
  var libname = "/data/local/tmp/libtx.so";

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
    if (module.path.includes("libtx.so")) {
      console.log("[+] Found loaded library at: " + module.path);
      console.log("[+] Base address: " + module.base);
    }
  });
});
