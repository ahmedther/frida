Java.perform(() => {
  const env = Java.vm.getEnv();
  const libName = "libjiagu.so";
  let libBase = null;

  // Hook RegisterNatives
  const RegisterNatives = env.handle
    .readPointer()
    .add(215 * Process.pointerSize)
    .readPointer();

  Interceptor.attach(RegisterNatives, {
    onEnter(args) {
      const jclass = args[1];
      const methods = args[2];
      const methodCount = args[3].toInt32();
      const className = env.getClassName(jclass);
      console.log(`[!] Registering natives for: ${className}`);

      for (let i = 0; i < methodCount; i++) {
        const entry = methods.add(i * Process.pointerSize * 3);
        const name = entry.readPointer().readCString() || "null";
        const sig =
          entry.add(Process.pointerSize).readPointer().readCString() || "null";
        const fnPtr = entry.add(Process.pointerSize * 2).readPointer();

        if (name === "JatinGamer") {
          console.log(`[!] Found JatinGamer @ ${fnPtr}`);

          // First get the base address of the library
          const module = Process.findModuleByName(libName);
          if (module) {
            libBase = module.base;
            console.log(`[+] ${libName} base address: ${libBase}`);
          } else {
            console.log(`[!] Could not find ${libName} in memory`);
          }

          // Calculate offset from library base
          if (libBase) {
            // Check if function is within this library
            Process.enumerateModules().forEach((mod) => {
              if (
                fnPtr.compare(mod.base) >= 0 &&
                fnPtr.compare(mod.base.add(mod.size)) < 0
              ) {
                const offset = fnPtr.sub(mod.base);
                console.log(`[!] JatinGamer is in ${mod.name}`);
                console.log(
                  `[!] Offset from ${mod.name} base: 0x${offset.toString(16)}`
                );
              }
            });
          }

          hookJatinGamer(fnPtr);
        }
      }
    },
  });
});

function hookJatinGamer(fnPtr) {
  Interceptor.attach(fnPtr, {
    onEnter(args) {
      console.log("[!] JatinGamer called!");
      // args[0] = JNIEnv*, args[1] = jobject, args[2] = Context, args[3] = String
      const inputStr = Java.vm
        .getEnv()
        .getStringUtfChars(args[3])
        .readCString();
      console.log(`Input: ${inputStr}`);
    },
    onLeave(retval) {
      const resultStr = Java.vm
        .getEnv()
        .getStringUtfChars(retval)
        .readCString();
      console.log(`Result: ${resultStr}`);
    },
  });
}
