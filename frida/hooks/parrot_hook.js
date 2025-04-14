Java.perform(function () {
  let ViewOnClickListenerC14921 = Java.use(
    "pubgm.loader.activity.LoginActivity$1"
  );
  ViewOnClickListenerC14921["onClick"].implementation = function (view) {
    console.log(`ViewOnClickListenerC14921.onClick is called: view=${view}`);
    const Intent = Java.use("android.content.Intent");
    const ActivityThread = Java.use("android.app.ActivityThread");

    // Get the application context
    const appContext =
      ActivityThread.currentApplication().getApplicationContext();

    const intent = Intent.$new();
    intent.setClassName(
      "pubgm.loader", // Package name
      "pubgm.loader.activity.MainActivity" // Fully qualified class name
    );

    // Add flags to start a new activity
    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK.value);

    // Start the activity
    appContext.startActivity(intent);

    console.log("[+] Activity started: pubgm.loader.activity.MainActivity");
    showToast("Login Bypassed -- BY AhmedTheRipper");
  };

  let MainActivity = Java.use("pubgm.loader.activity.MainActivity");

  MainActivity["initMenu2"].implementation = function () {
    console.log(`MainActivity.initMenu2 is called`);
    // this["initMenu2"]();
  };
});

function showToast(message) {
  Java.scheduleOnMainThread(function () {
    try {
      // Get the current Android application context
      var ActivityThread = Java.use("android.app.ActivityThread");
      var currentApplication = ActivityThread.currentApplication();
      var context = currentApplication.getApplicationContext();

      // Display a toast message
      var Toast = Java.use("android.widget.Toast");
      Toast.makeText(
        context,
        Java.use("java.lang.String").$new(message),
        Toast.LENGTH_LONG.value
      ).show();
    } catch (err) {
      console.log("Error: " + err);
    }
  });
}
