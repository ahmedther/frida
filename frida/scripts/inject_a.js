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
  try {
    var Runtime = Java.use("java.lang.Runtime");
    var VMStack = Java.use("dalvik.system.VMStack");
    var libname = "/data/local/tmp/libtx.so";

    // Get the system classloader
    var ClassLoader = Java.use("java.lang.ClassLoader");
    var loadedLibraries = Java.cast(
      ClassLoader.getSystemClassLoader(),
      ClassLoader
    );

    // Try to unload first if exists
    try {
      Java.classFactory.loader.unloadLibrary(libname);
    } catch (e) {
      console.log("[*] Library was not previously loaded");
    }

    // Force cleanup of any existing instances
    Java.perform(function () {
      Java.gc();
    });

    // Hook System.load early
    var System = Java.use("java.lang.System");
    System.load.implementation = function (library) {
      console.log("[+] Loading library: " + library);
      try {
        this.load(library);
        console.log("[+] Successfully loaded: " + library);
      } catch (ex) {
        console.log("[-] Failed to load library: " + ex);
        throw ex;
      }
    };

    // Load the library
    System.load(libname);
    console.log("[+] Library loaded successfully: " + libname);
  } catch (ex) {
    console.log("[-] Exception occurred: " + ex);
  }
});
