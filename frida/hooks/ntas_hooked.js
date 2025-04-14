Java.perform(function () {
  let AnonymousClass100000006 = Java.use(
    "com.Jungli.Cheats.LoginActivity$100000006"
  );
  AnonymousClass100000006["run"].implementation = function () {
    console.log(`Login Bypassed -- BY AhmedTheRipper`);
    showToast(`Login Bypassed -- BY AhmedTheRipper`);
    let loginHandler = this.val$loginHandler.value;
    loginHandler.sendEmptyMessage(0);
    return;
  };

  let HomeActivity = Java.use(
    "com.Jungli.Cheats.fragmentActivity.HomeActivity"
  );

  HomeActivity["EXP"].implementation = function () {
    console.log(`HomeActivity.EXP is called`);
    showToast("Expriy Bypassed -- BY AhmedTheRipper");
    let result = this["EXP"]();
    console.log(`HomeActivity.EXP result=${result}`);
    return;
  };

  HomeActivity["countDownStart"].implementation = function () {
    console.log(`HomeActivity.countDownStart is called`);
    showToast("CountDown Bypassed -- BY AhmedTheRipper");
    // this["countDownStart"]();
  };

  // let MainActivity = Java.use("com.Jungli.Cheats.MainActivity");
  // let ViewPagerAdapter = Java.use(
  //   "com.Jungli.Cheats.MainActivity$ViewPagerAdapter"
  // );

  // MainActivity["setupViewPager"].implementation = function (viewPager) {
  //   const fragmentManager = this.getSupportFragmentManager();

  //   if (!this.adapter.value) {
  //     this.adapter.value = ViewPagerAdapter.$new(this, fragmentManager);
  //   }

  //   // this.home.value = Java.use(
  //   //   "com.Jungli.Cheats.fragmentActivity.HomeActivity"
  //   // ).$new();

  //   // this.adapter.value.addFragment(this.home.value);

  //   this.tool.value = Java.use(
  //     "com.Jungli.Cheats.fragmentActivity.ToolActivity"
  //   ).$new();

  //   this.user.value = Java.use(
  //     "com.Jungli.Cheats.fragmentActivity.UserActivity"
  //   ).$new();

  //   this.donwload.value = Java.use(
  //     "com.Jungli.Cheats.fragmentActivity.DonwloadActivity"
  //   ).$new();

  //   this.adapter.value.addFragment(this.tool.value);
  //   this.adapter.value.addFragment(this.user.value);
  //   this.adapter.value.addFragment(this.donwload.value);

  //   viewPager.setAdapter(this.adapter.value);
  // };
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
