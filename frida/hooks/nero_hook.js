Java.perform(function () {
  const AnonymousClass100000006 = Java.use(
    "com.nero.io.app.material.LoginActivity$100000006"
  );
  const MessageClass = Java.use("android.os.Message");
  AnonymousClass100000006["handleMessage"].implementation = function (message) {
    console.log(
      `AnonymousClass100000006.handleMessage is called: message=${message}`
    );
    message = MessageClass.$new();
    message.what.value = 0;
    showToast("Login Bypassed -- BY AhmedTheRipper");
    this["handleMessage"](message);
  };
});

//-------------------------------------------------------------------------------------------------------------------------------------------------------
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
