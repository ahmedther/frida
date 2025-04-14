Java.perform(function () {
  try {
    console.log("[*] Starting memory patch...");

    // Get the module
    const lib = Process.findModuleByName("libUE4.so");
    console.log("[*] Module base address:", lib.base);
    console.log("[*] Original offset:", "0x9d22d080");
    console.log("[*] Module size:", lib.size);

    // Try calculating in steps

    if (!lib) {
      throw new Error("Module libUE4.so not found!");
    }

    // Convert offset from string to number (removing '0x' prefix)
    const offset = parseInt("0x9d22d080", 16);
    console.log("[*] Parsed offset:", "0x" + offset.toString(16));

    // Calculate target address
    const address = lib.base.add(offset);

    // Log the details for debugging
    console.log(`[*] Module base: ${lib.base}`);
    console.log(`[*] Target offset: 0x${offset.toString(16)}`);
    console.log(`[*] Target address: ${address}`);

    // Check if address is within module bounds
    if (
      address.compare(lib.base) < 0 ||
      address.compare(lib.base.add(lib.size)) >= 0
    ) {
      throw new Error(
        `Address 0x${address.toString(
          16
        )} is outside module bounds (base: 0x${lib.base.toString(
          16
        )}, size: 0x${lib.size.toString(16)})`
      );
    }

    // Change memory protection to allow writing
    Memory.protect(address, 4, "rwx");

    // Write the patch bytes
    Memory.writeByteArray(address, [0x01, 0x01, 0x01, 0x00]);

    console.log("[+] Memory patched successfully!");

    // Verify the patch (optional)
    const verification = Memory.readByteArray(address, 4);
    console.log(
      "[*] Verification bytes:",
      Array.from(verification)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join(" ")
    );
  } catch (error) {
    console.error("[!] Error:", error.message);
  }
});
// Java.perform(function () {
//   try {
//     console.log("[*] Starting memory patch...");

//     function findMod() {
//       return new Promise((resolve) => {
//         const intervalId = setInterval(() => {obser
//           const lib = Process.findModuleByName("libUE4");
//           if (lib) {
//             console.log("[+] Found library at:", lib.base);
//             clearInterval(intervalId);
//             resolve(lib);
//           } else {
//             console.error(
//               "[!] Library libUE4 not found. Retrying in 15 seconds..."
//             );
//           }
//         }, 100); // Retry every 15 seconds
//       });
//     }

//     findMod()
//       .then((lib) => {
//         const addresses = [
//           0xedfe4, 0x400528, 0xee0e0, 0xe2eb0, 0x423a70, 0xee17c, 0xeb648,
//           0xee180, 0xe7734,
//         ];

//         addresses.forEach((offset) => {
//           const address = lib.base.add(offset);
//           console.log(
//             `OLD Value at ${address}:`,
//             Memory.readByteArray(address, 8)
//           );

//           Memory.protect(address, 8, "rwx");
//           Memory.writeByteArray(
//             address,
//             [0x00, 0x00, 0x80, 0xd2, 0xc0, 0x03, 0x5f, 0xd6]
//           );

//           console.log(
//             `New Value at ${address}:`,
//             Memory.readByteArray(address, 8)
//           );
//         });

//         console.log("[*] New values:");
//         console.log("[+] Memory patched successfully");
//       })
//       .catch((error) => {
//         console.error("[!] Error in promise:", error);
//       });
//   } catch (error) {
//     console.error("[!] Error:", error.message);
//   }
// });
