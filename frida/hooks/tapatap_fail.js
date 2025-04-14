Java.perform(function () {
  const Message = Java.use("android.os.Message");

  const AnonymousClass5 = Java.use("com.Bgmi.Loader.activity.LoginActivity$5");
  AnonymousClass5["handleMessage"].implementation = function (msg) {
    console.log(`AnonymousClass5.handleMessage is called: msg=${msg}`);
    const newMsg = Message.$new(); // Use a different variable name to avoid shadowing
    newMsg.what = 0; // Set the 'what' property directly

    console.log("Modified Message:", newMsg.what);
    console.log(newMsg.what);

    this["handleMessage"](newMsg); // Ca
  };

  const MainActivity = Java.use("com.Bgmi.Loader.activity.MainActivity");

  MainActivity["exdate"].implementation = function () {
    // console.log(`MainActivity.exdate is called`);
    let result = this["exdate"]();
    console.log(`MainActivity.exdate result=${result}`);
    const Calendar = Java.use("java.util.Calendar");
    const Long = Java.use("java.lang.Long");
    const calendar = Calendar.getInstance();
    calendar.set(2025, 2, 1, 0, 0, 0);
    const manualDateInMillis = Long.$new(calendar.getTimeInMillis());
    // console.log(manualDateInMillis.toString());

    return manualDateInMillis.toString();
  };
  MainActivity["doCountTimerAccout"].implementation = function () {
    console.log(`MainActivity.doCountTimerAccout is called`);
    // const view = Java.use("android.view.View").$new();
  };

  const VPNDetector = Java.use("com.Bgmi.Loader.activity.VPNDetector");
  VPNDetector["$init"].implementation = function () {
    console.log(`VPNDetector.$init is called`);
    this["$init"]();
  };
  VPNDetector["isDeviceRooted"].implementation = function () {
    console.log(`VPNDetector.isDeviceRooted is called`);
    let result = this["isDeviceRooted"]();
    console.log(`VPNDetector.isDeviceRooted result=${result}`);
    return false;
  };
  VPNDetector["isVPNActive"].implementation = function (context) {
    console.log(`VPNDetector.isVPNActive is called: context=${context}`);
    let result = this["isVPNActive"](context);
    console.log(`VPNDetector.isVPNActive result=${result}`);
    return false;
  };
});
