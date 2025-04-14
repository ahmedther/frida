const libName = "libjiagu.so";

// Wait for libjiagu.so to load
Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
  onEnter(args) {
    this.path = Memory.readUtf8String(args[0]);
    if (this.path && this.path.includes(libName)) {
      console.log(`[+] ${libName} is loading from ${this.path}`);
    }
  },
  onLeave(retval) {
    if (this.path && this.path.includes(libName)) {
      console.log(`[+] ${libName} loaded with handle ${retval}`);

      // Give a small delay to ensure the library is fully loaded
      const module = Process.findModuleByName(libName);
      if (module) {
        console.log(`[+] ${libName} found at base address: ${module.base}`);

        module.enumerateExports().forEach((exp) => {
          // Filter out C++ internal symbols using regex
          const isJniFunction =
            /^Java_/.test(exp.name) || exp.name === "JNI_OnLoad";
          const isCppInternal =
            /(vtable|typeinfo|VTT|construction|basic_)/i.test(exp.name);

          if (isJniFunction && !isCppInternal) {
            const offset = exp.address.sub(module.base);
            console.log(
              `[+] Hooking JNI function: ${exp.name.padEnd(
                45
              )} @ 0x${offset.toString(16)}`
            );

            Interceptor.attach(exp.address, {
              onEnter(args) {
                console.log(`[JNI] ENTER ${exp.name}`);
                // Log arguments (modify for specific types)
                for (let i = 0; i < 3; i++) {
                  // First 3 args
                  console.log(
                    `  arg[${i}]: ${args[i]} ${
                      args[i] ? ptr(args[i]).readCString() : ""
                    }`
                  );
                }
              },
              onLeave(retval) {
                console.log(`[JNI] EXIT ${exp.name} → ${retval}`);
              },
            });
          }
          // else {
          //   console.log(`[-] Skipping C++ internal: ${exp.name}`);
          // }
        });
      }
    }
  },
});
