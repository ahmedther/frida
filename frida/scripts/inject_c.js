Java.perform(function () {
  var libname = "/data/local/tmp/libtx.so"; // Path to your .so file
  var System = Java.use("java.lang.System");
  System.load(libname);
  console.log("Library loaded: " + libname);
});
