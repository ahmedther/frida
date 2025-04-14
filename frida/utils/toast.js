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
