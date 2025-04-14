Java.perform(function () {
  let LoginActivity = Java.use("com.jiagu.login.LoginActivity");

  LoginActivity["lambda$Login$3$com-jiagu-login-LoginActivity"].implementation =
    function (str, handler) {
      console.log(
        `LoginActivity.m280lambda$Login$3$comjiaguloginLoginActivity is called: str=${str}, handler=${handler}`
      );
      this["lambda$Login$3$com-jiagu-login-LoginActivity"](str, handler);
    };

  LoginActivity.gameType.implementation = function () {
    console.log("[*] gameType() called, injecting custom value!");
    //Return your custom string
    const result = this.gameType();
    console.log("[*] gameType() result: " + result);
    return result;
    return "BGMI"; // Replace with whatever string you want
    // return "PUBG"; // Replace with whatever string you want
  };

  // Hook JatinGamer
  LoginActivity.JatinGamer.implementation = function (context, str) {
    const customResult = "Login successful";
    const result = this.JatinGamer(context, str);
    console.log(`LoginActivity.JatinGamer is called: result`, result);
    return result;
    return customResult;
  };

  let FileDownloader = Java.use(
    "com.jiagu.gameselector.GameSelector$FileDownloader"
  );
  let GameSelector = Java.use("com.jiagu.gameselector.GameSelector");
  GameSelector["version"].implementation = function () {
    // console.log(`GameSelector.version is called`);
    let result = this["version"]();
    // console.log(`GameSelector.version result=${result}`);
    return result;
  };
  FileDownloader["downloadFile"].implementation = function (str, str2) {
    console.log(
      `FileDownloader.downloadFile is called: str=${str}, str2=${str2}`
    );
    let result = this["downloadFile"](
      "https://github.com/r2632616/download/raw/refs/heads/main/libtx.so",
      str2
    );
    console.log(`FileDownloader.downloadFile result=${result}`);

    return result; // Return true to indicate success
  };

  let MainActivity = Java.use("com.jiagu.MainActivity");

  MainActivity.gettime.implementation = function () {
    // console.log("[*] MainActivity.gettime called!");

    const DateClass = Java.use("java.util.Date");
    const Calendar = Java.use("java.util.Calendar");
    const cal = Calendar.getInstance();
    cal.set(2025, 7, 1, 0, 0, 0); // June = 5 (0-based months)
    const date = cal.getTime();
    const millis = date.getTime();
    const seconds = Math.floor(millis / 1000); // Convert to seconds

    // console.log("[*] Forcing gettime to return: " + seconds);
    return seconds; // Primitive int
  };

  let Native = Java.use("com.jiagu.Native");

  Native["Close"].implementation = function () {
    console.log(`Native.Close is called`);
    this["Close"]();
  };

  Native["EXP"].implementation = function () {
    console.log(`Native.EXP is called`);
    // let result = this["EXP"]();
    console.log(`Native.EXP result=${result}`);
    // const DateClass = Java.use("java.util.Date");
    // const Calendar = Java.use("java.util.Calendar");
    // const cal = Calendar.getInstance();
    // cal.set(2025, 7, 1, 0, 0, 0); // June = 5 (0-based months)
    // const date = cal.getTime();
    // const millis = date.getTime();
    // const seconds = Math.floor(millis / 1000); // Convert to seconds

    // // console.log("[*] Forcing gettime to return: " + seconds);
    // return seconds; // Primitive int
    return result;
  };

  Native["Licence"].implementation = function () {
    console.log(`Native.Licence is called`);
    let result = this["Licence"]();
    console.log(`Native.Licence result=${result}`);
    return result;
  };

  Native["SettingValue"].implementation = function (i, z) {
    console.log(`Native.SettingValue is called: i=${i}, z=${z}`);
    this["SettingValue"](i, z);
  };

  Native["drawOn"].implementation = function (eSPView, canvas) {
    console.log(
      `Native.drawOn is called: eSPView=${eSPView}, canvas=${canvas}`
    );
    let result = this["drawOn"](eSPView, canvas);
    console.log(`Native.drawOn result=${result}`);
    return result;
  };

  Native["getReady"].implementation = function () {
    console.log(`Native.getReady is called`);
    let result = this["getReady"]();
    console.log(`Native.getReady result=${result}`);
    return result;
  };

  MainActivity["key"].implementation = function () {
    console.log(`MainActivity.key is called`);
    let result = this["key"]();
    console.log(`MainActivity.key result=${result}`);
    return result;
    return "TX6Ublp1:6AnFbcP1"; // Replace with whatever string you want
  };
  MainActivity["lambda$InitView$5$com-jiagu-MainActivity"].implementation =
    function (view) {
      console.log(
        `MainActivity.m252lambda$InitView$5$comjiaguMainActivity is called: view=${view}`
      );
      this["lambda$InitView$5$com-jiagu-MainActivity"](view);
    };

  Interceptor.attach(
    Module.findExportByName(
      "libjiagu.so",
      "Java_com_jiagu_login_LoginActivity_gameType"
    ),
    {
      onEnter: function (args) {
        // INITIALIZE JNIEnv PROPERLY
        this.env = Java.vm.getEnv();
      },
      onLeave: function (retval) {
        const forged = this.env.newStringUtf("BGMI");
        retval.replace(forged);
        console.log("[!] INJECTED FAKE GAME TYPE: BGMI");
      },
    }
  );
  Interceptor.attach(
    Module.findExportByName("libjiagu.so", "Java_com_jiagu_MainActivity_key"),
    {
      onEnter: function (args) {
        // INITIALIZE JNIEnv PROPERLY
        this.env = Java.vm.getEnv();
      },
      onLeave: function (retval) {
        const forged = this.env.newStringUtf("TX6Ublp1:6AnFbcP1");
        retval.replace(forged);
        console.log("[!] INJECTED TX6Ublp1:6AnFbcP1");
      },
    }
  );

  ////////////////
});

// Java.perform(function () {
//   let libjiagu = Module.findBaseAddress("libjiagu.so");
//   if (libjiagu) {
//     console.log("Enumerating libjiagu.so exports...");
//     Module.enumerateExports("libjiagu.so", {
//       onMatch: function (exp) {
//         if (exp.name.includes("key")) {
//           console.log(`Found: ${exp.name} at ${exp.address}`);
//         }
//       },
//       onComplete: function () {
//         console.log("Done enumerating");
//       },
//     });
//   }
// });

// // Hook native Java_com_jiagu_MainActivity_key
// let libName = "libjiagu.so"; // Update if different
// let lib = Module.findBaseAddress(libName);
// if (lib) {
//   console.log(`Found ${libName} at ${lib}`);
//   let keyAddr = Module.findExportByName(
//     libName,
//     "Java_com_jiagu_MainActivity_key"
//   );
//   if (keyAddr) {
//     console.log(`Hooking native key() at ${keyAddr}`);
//     Interceptor.attach(keyAddr, {
//       onEnter: function (args) {
//         console.log("Native key() called");
//       },
//       onLeave: function (retval) {
//         console.log(`Native key() original return: ${retval}`);
//         let jstring = Java.vm.getEnv().newStringUtf("TX6Ublp1:6AnFbcP1");
//         retval.replace(jstring);
//         console.log("Forced native key() to TX6Ublp2:6AnFbcPm");
//       },
//     });
//   } else {
//     console.log(`Java_com_jiagu_MainActivity_key not found in ${libName}`);
//     // Enumerate to find it
//     console.log(`Enumerating ${libName} exports...`);
//     Module.enumerateExports(libName, {
//       onMatch: function (exp) {
//         if (exp.name.includes("key") || exp.name.includes("Key")) {
//           console.log(`Found: ${exp.name} at ${exp.address}`);
//         }
//       },
//       onComplete: function () {
//         console.log("Done enumerating");
//       },
//     });
//   }
// } else {
//   console.log(`${libName} not loaded`);
//   // Try other libraries
//   Module.enumerateModules({
//     onMatch: function (mod) {
//       console.log(`Checking ${mod.name}`);
//       let addr = Module.findExportByName(
//         mod.name,
//         "Java_com_jiagu_MainActivity_key"
//       );
//       if (addr) {
//         console.log(
//           `Found Java_com_jiagu_MainActivity_key in ${mod.name} at ${addr}`
//         );
//       }
//     },
//     onComplete: function () {
//       console.log("Done checking modules");
//     },
//   });
// }
