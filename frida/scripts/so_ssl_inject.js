// First, let's map critical functions we need to monitor
const patterns = {
  httpSend: {
    // Common HTTP send patterns - adjust based on your .so
    arm64: [
      "F? 0F 1C F8 ?? ?? ?? ?? F? 03 00 AA", // Typical HTTP send
      "F? 03 00 91 ?? ?? ?? ?? F? ?? ?? F9", // Alternative pattern
    ],
  },
  sslWrite: {
    arm64: [
      "?? 1F ?? D6 F? 03 00 AA ?? ?? ?? 97", // SSL_write pattern
      "F? 43 01 D1 F? 03 00 AA", // Alternative SSL write
    ],
  },
};

Java.perform(function () {
  var libname = "/data/local/tmp/libMARS.so";
  console.log("[*] Analyzing " + libname);

  // Get .so information
  var soInfo = null;
  Process.enumerateModules().forEach(function (module) {
    if (module.path.includes("libMARS.so")) {
      soInfo = module;
      console.log("[+] Found .so at: " + module.path);
      console.log("[+] Base address: " + module.base);
      console.log("[+] Size: " + module.size);

      // Scan for patterns
      patterns.httpSend.arm64.forEach(function (pattern) {
        Memory.scan(soInfo.base, soInfo.size, pattern, {
          onMatch: function (address, size) {
            console.log("[+] Found potential HTTP send at:", address);

            // Attach to the found function
            Interceptor.attach(address, {
              onEnter: function (args) {
                try {
                  // Try to read HTTP request data
                  // Adjust offsets based on your .so's structure
                  let requestData = this.context.x0; // First argument usually contains request
                  if (requestData != 0) {
                    // Read strings safely
                    let readString = function (addr) {
                      try {
                        return addr.readUtf8String();
                      } catch (e) {
                        return "<error reading string>";
                      }
                    };

                    console.log("[+] HTTP Request intercepted:");
                    console.log("    Data:", readString(requestData));

                    // Optional: Modify request data
                    // Example: Add a header
                    /*
                                        let newData = requestData + "\r\nX-Modified: true";
                                        Memory.writeUtf8String(requestData, newData);
                                        */
                  }
                } catch (e) {
                  console.log("[-] Error reading request:", e);
                }
              },
              onLeave: function (retval) {
                console.log("[+] Request completed, return value:", retval);
              },
            });
          },
          onComplete: function () {
            console.log("[*] Pattern scan complete");
          },
        });
      });

      // Monitor SSL_write as backup
      var sslWrite = Module.findExportByName(null, "SSL_write");
      if (sslWrite) {
        Interceptor.attach(sslWrite, {
          onEnter: function (args) {
            var backtrace = Thread.backtrace(this.context, Backtracer.ACCURATE);
            var isFromSo = backtrace.some(
              (addr) =>
                addr.compare(soInfo.base) >= 0 &&
                addr.compare(soInfo.base.add(soInfo.size)) < 0
            );

            if (isFromSo) {
              try {
                var data = Memory.readByteArray(args[1], args[2].toInt32());
                console.log("[+] Captured SSL_write data:");
                console.log(
                  hexdump(data, {
                    length: Math.min(args[2].toInt32(), 256),
                  })
                );

                // Try to parse as HTTP request
                var dataStr = Memory.readUtf8String(args[1], args[2].toInt32());
                if (
                  dataStr.includes("HTTP/") ||
                  dataStr.includes("GET ") ||
                  dataStr.includes("POST ")
                ) {
                  console.log("[+] HTTP Request:");
                  console.log(dataStr);
                }
              } catch (e) {
                console.log("[-] Error reading SSL data:", e);
              }
            }
          },
        });
      }
    }
  });
});
