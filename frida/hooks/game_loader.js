Java.perform(function () {
  let LoginActivity = Java.use("com.kgo.loader.activity.LoginActivity");
  let MainActivity = Java.use("com.kgo.loader.activity.MainActivity");
  const Intent = Java.use("android.content.Intent");

  LoginActivity["$init"].implementation = function () {
    console.log(`LoginActivity.$init is called`);
    this["$init"]();
  };

  LoginActivity["OverlayPermision"].implementation = function () {
    console.log(`LoginActivity.OverlayPermision is called`);
    this["OverlayPermision"]();
  };

  LoginActivity["checkForRootAccess"].implementation = function () {
    console.log(`LoginActivity.checkForRootAccess is called`);
    // let result = this["checkForRootAccess"]();
    return false;
  };

  LoginActivity["isDeviceRooted"].implementation = function () {
    console.log(`LoginActivity.isDeviceRooted is called`);
    return false;
  };

  LoginActivity["isReqable"].implementation = function () {
    console.log(`LoginActivity.isReqable is called`);
    // let result = this["isReqable"]();
    return false;
  };
  LoginActivity["detectHttpCanaryApps"].implementation = function () {
    console.log(`LoginActivity.detectHttpCanaryApps is called`);
    // let result = this["detectHttpCanaryApps"]();
    return false;
  };

  LoginActivity["isHttpCanary"].implementation = function () {
    console.log(`LoginActivity.isHttpCanary is called`);
    return false;
  };

  LoginActivity["detectReqableApps"].implementation = function () {
    console.log(`LoginActivity.detectReqableApps is called`);
    return false;
  };

  LoginActivity["detectTermuxApps"].implementation = function () {
    console.log(`LoginActivity.detectTermuxApps is called`);
    return false;
  };

  LoginActivity["isTermux"].implementation = function () {
    console.log(`LoginActivity.isTermux is called`);
    return false;
  };

  LoginActivity["isVpnActive"].implementation = function () {
    console.log(`LoginActivity.isVpnActive is called`);
    return false;
  };

  LoginActivity["isVpnDetected"].implementation = function () {
    console.log(`LoginActivity.isVpnDetected is called`);
    return false;
  };

  LoginActivity["checkSHA1"].implementation = function (context) {
    console.log(`LoginActivity.checkSHA1 is called: context=${context}`);
    return true;
  };

  LoginActivity["getKey"].implementation = function () {
    console.log(`LoginActivity.getKey is called`);
    let result = this["getKey"]();
    console.log(`LoginActivity.getKey result=${result}`);
    return result;
  };

  LoginActivity["handleResponse"].implementation = function (str) {
    console.log(`LoginActivity.handleResponse is called: str=${str}`);
    this["handleResponse"](str);
  };

  LoginActivity["isLogin"].implementation = function (context, str) {
    console.log(
      `LoginActivity.isLogin is called: context=${context}, str=${str}`
    );
    this["isLogin"](context, str);
  };
  LoginActivity["isURL"].implementation = function () {
    console.log(`LoginActivity.isURL is called`);
    let result = this["isURL"]();
    console.log(`LoginActivity.isURL result=${result}`);
    return result;
  };

  LoginActivity["isUpdate"].implementation = function () {
    console.log(`LoginActivity.isUpdate is called`);
    let result = this["isUpdate"]();
    console.log(`LoginActivity.isUpdate result=${result}`);
    return result;
  };

  LoginActivity["isVersion"].implementation = function () {
    console.log(`LoginActivity.isVersion is called`);
    let result = this["isVersion"]();
    console.log(`LoginActivity.isVersion result=${result}`);
    return result;
  };
  let MainActivity$StaticActivity$$ExternalSyntheticLambda5 = Java.use(
    "com.kgo.loader.activity.MainActivity$StaticActivity$$ExternalSyntheticLambda5"
  );
  let MainActivity$StaticActivity$$ExternalSyntheticLambda1 = Java.use(
    "com.kgo.loader.activity.MainActivity$StaticActivity$$ExternalSyntheticLambda1"
  );
  MainActivity$StaticActivity$$ExternalSyntheticLambda1[
    "onClick"
  ].implementation = function () {
    console.log(
      `MainActivity$StaticActivity$$ExternalSyntheticLambda1.onClick is called`
    );
    this["onClick"]();
  };
  MainActivity$StaticActivity$$ExternalSyntheticLambda5["run"].implementation =
    function () {
      console.log(
        `MainActivity$StaticActivity$$ExternalSyntheticLambda5.run is called`
      );
      //   this["run"]();
      return;
    };
  LoginActivity["lambda$isLogin$12"].implementation = function (
    alertDialog,
    database,
    context
  ) {
    console.log(
      `LoginActivity.lambda$isLogin$12 is called: alertDialog=${alertDialog}, database=${database}, context=${context}`
    );
    // this["lambda$isLogin$12"](alertDialog, database, context);
    const intent = Intent.$new(context, MainActivity.class);
    context.startActivity(intent);
  };

  LoginActivity["lambda$isLogin$13"].implementation = function (
    alertDialog,
    context,
    exc
  ) {
    console.log(
      `LoginActivity.lambda$isLogin$13 is called: alertDialog=${alertDialog}, context=${context}, exc=${exc}`
    );
    this["lambda$isLogin$13"](alertDialog, context, exc);
  };

  LoginActivity["lambda$onCreate$8"].implementation = function (
    checkBox,
    editText,
    view
  ) {
    console.log(
      `LoginActivity.lambda$onCreate$8 is called: checkBox=${checkBox}, editText=${editText}, view=${view}`
    );
    this["lambda$onCreate$8"](checkBox, editText, view);
  };

  LoginActivity["licence"].implementation = function () {
    console.log(`LoginActivity.licence is called`);
    let result = this["licence"]();
    console.log(`LoginActivity.licence result=${result}`);
    return result;
  };

  LoginActivity[
    "lambda$startDownloadTask$10$com-kgo-loader-activity-LoginActivity"
  ].implementation = function (alertDialog, workInfo) {
    console.log(
      `LoginActivity.m394x378bbcbb is called: alertDialog=${alertDialog}, workInfo=${workInfo}`
    );
    this["lambda$startDownloadTask$10$com-kgo-loader-activity-LoginActivity"](
      alertDialog,
      workInfo
    );
  };

  LoginActivity[
    "lambda$OverlayPermision$0$com-kgo-loader-activity-LoginActivity"
  ].implementation = function (dialogInterface, i) {
    console.log(
      `LoginActivity.m698lambda$OverlayPermision$0$comkgoloaderactivityLoginActivity is called: dialogInterface=${dialogInterface}, i=${i}`
    );
    this["lambda$OverlayPermision$0$com-kgo-loader-activity-LoginActivity"](
      dialogInterface,
      i
    );
  };

  LoginActivity[
    "lambda$handleResponse$11$com-kgo-loader-activity-LoginActivity"
  ].implementation = function (dialogInterface, i) {
    console.log(
      `LoginActivity.m699lambda$handleResponse$11$comkgoloaderactivityLoginActivity is called: dialogInterface=${dialogInterface}, i=${i}`
    );
    this["lambda$handleResponse$11$com-kgo-loader-activity-LoginActivity"](
      dialogInterface,
      i
    );
  };

  LoginActivity[
    "lambda$isLogin$14$com-kgo-loader-activity-LoginActivity"
  ].implementation = function (
    str,
    handler,
    alertDialog,
    context,
    executorService
  ) {
    console.log(
      `LoginActivity.m700lambda$isLogin$14$comkgoloaderactivityLoginActivity is called: str=${str}, handler=${handler}, alertDialog=${alertDialog}, context=${context}, executorService=${executorService}`
    );
    this["lambda$isLogin$14$com-kgo-loader-activity-LoginActivity"](
      str,
      handler,
      alertDialog,
      context,
      executorService
    );
  };

  LoginActivity[
    "lambda$onCreate$1$com-kgo-loader-activity-LoginActivity"
  ].implementation = function (dialogInterface, i) {
    console.log(
      `LoginActivity.m701lambda$onCreate$1$comkgoloaderactivityLoginActivity is called: dialogInterface=${dialogInterface}, i=${i}`
    );
    this["lambda$onCreate$1$com-kgo-loader-activity-LoginActivity"](
      dialogInterface,
      i
    );
  };

  LoginActivity[
    "lambda$onCreate$2$com-kgo-loader-activity-LoginActivity"
  ].implementation = function (dialogInterface, i) {
    console.log(
      `LoginActivity.m702lambda$onCreate$2$comkgoloaderactivityLoginActivity is called: dialogInterface=${dialogInterface}, i=${i}`
    );
    this["lambda$onCreate$2$com-kgo-loader-activity-LoginActivity"](
      dialogInterface,
      i
    );
  };

  LoginActivity[
    "lambda$onCreate$3$com-kgo-loader-activity-LoginActivity"
  ].implementation = function (dialogInterface, i) {
    console.log(
      `LoginActivity.m703lambda$onCreate$3$comkgoloaderactivityLoginActivity is called: dialogInterface=${dialogInterface}, i=${i}`
    );
    this["lambda$onCreate$3$com-kgo-loader-activity-LoginActivity"](
      dialogInterface,
      i
    );
  };

  LoginActivity[
    "lambda$onCreate$4$com-kgo-loader-activity-LoginActivity"
  ].implementation = function (dialogInterface, i) {
    console.log(
      `LoginActivity.m704lambda$onCreate$4$comkgoloaderactivityLoginActivity is called: dialogInterface=${dialogInterface}, i=${i}`
    );
    this["lambda$onCreate$4$com-kgo-loader-activity-LoginActivity"](
      dialogInterface,
      i
    );
  };

  LoginActivity[
    "lambda$onCreate$5$com-kgo-loader-activity-LoginActivity"
  ].implementation = function (dialogInterface, i) {
    console.log(
      `LoginActivity.m705lambda$onCreate$5$comkgoloaderactivityLoginActivity is called: dialogInterface=${dialogInterface}, i=${i}`
    );
    this["lambda$onCreate$5$com-kgo-loader-activity-LoginActivity"](
      dialogInterface,
      i
    );
  };

  LoginActivity[
    "lambda$onCreate$6$com-kgo-loader-activity-LoginActivity"
  ].implementation = function (editText, view) {
    console.log(
      `LoginActivity.m706lambda$onCreate$6$comkgoloaderactivityLoginActivity is called: editText=${editText}, view=${view}`
    );
    this["lambda$onCreate$6$com-kgo-loader-activity-LoginActivity"](
      editText,
      view
    );
  };

  LoginActivity[
    "lambda$onCreate$7$com-kgo-loader-activity-LoginActivity"
  ].implementation = function (editText, view) {
    console.log(
      `LoginActivity.m707lambda$onCreate$7$comkgoloaderactivityLoginActivity is called: editText=${editText}, view=${view}`
    );
    this["lambda$onCreate$7$com-kgo-loader-activity-LoginActivity"](
      editText,
      view
    );
  };

  LoginActivity[
    "lambda$onCreate$9$com-kgo-loader-activity-LoginActivity"
  ].implementation = function (view) {
    console.log(
      `LoginActivity.m708lambda$onCreate$9$comkgoloaderactivityLoginActivity is called: view=${view}`
    );
    this["lambda$onCreate$9$com-kgo-loader-activity-LoginActivity"](view);
  };

  LoginActivity["onCreate"].implementation = function (bundle) {
    console.log(`LoginActivity.onCreate is called: bundle=${bundle}`);
    this["onCreate"](bundle);
  };

  LoginActivity["startDownloadTask"].implementation = function () {
    console.log(`LoginActivity.startDownloadTask is called`);
    this["startDownloadTask"]();
  };

  LoginActivity["takeFilePermissions"].implementation = function () {
    console.log(`LoginActivity.takeFilePermissions is called`);
    this["takeFilePermissions"]();
  };

  LoginActivity["url"].implementation = function () {
    console.log(`LoginActivity.url is called`);
    let result = this["url"]();
    console.log(`LoginActivity.url result=${result}`);
    return result;
  };

  MainActivity["CountTimer"].implementation = function () {
    console.log(`MainActivity.CountTimer is called`);
    // this["CountTimer"]();
  };

  MainActivity["InstallApp"].implementation = function (str, appCompatButton) {
    console.log(
      `MainActivity.InstallApp is called: str=${str}, appCompatButton=${appCompatButton}`
    );
    this["InstallApp"](str, appCompatButton);
  };

  MainActivity["Verify"].implementation = function (str) {
    console.log(`MainActivity.Verify is called: str=${str}`);
    let result = this["Verify"](str);
    console.log(`MainActivity.Verify result=${result}`);
    return 1;
  };

  MainActivity["appPkg"].implementation = function () {
    console.log(`MainActivity.appPkg is called`);
    let result = this["appPkg"]();
    console.log(`MainActivity.appPkg result=${result}`);
    return result;
  };

  MainActivity["getObbPath"].implementation = function (str) {
    console.log(`MainActivity.getObbPath is called: str=${str}`);
    let result = this["getObbPath"](str);
    console.log(`MainActivity.getObbPath result=${result}`);
    return result;
  };

  MainActivity["getRealObbPath"].implementation = function (str) {
    console.log(`MainActivity.getRealObbPath is called: str=${str}`);
    let result = this["getRealObbPath"](str);
    console.log(`MainActivity.getRealObbPath result=${result}`);
    return result;
  };

  MainActivity["getVerify"].implementation = function () {
    console.log(`MainActivity.getVerify is called`);
    let result = this["getVerify"]();
    console.log(`MainActivity.getVerify result=${result}`);
    return result;
  };

  MainActivity["isPackageInstalled"].implementation = function (str) {
    console.log(`MainActivity.isPackageInstalled is called: str=${str}`);
    let result = this["isPackageInstalled"](str);
    console.log(`MainActivity.isPackageInstalled result=${result}`);
    return result;
  };

  MainActivity["lambda$onCreate$0"].implementation = function (
    compoundButton,
    z
  ) {
    console.log(
      `MainActivity.lambda$onCreate$0 is called: compoundButton=${compoundButton}, z=${z}`
    );
    this["lambda$onCreate$0"](compoundButton, z);
  };

  MainActivity[
    "lambda$onCreate$1$com-kgo-loader-activity-MainActivity"
  ].implementation = function (radioGroup, i) {
    console.log(
      `MainActivity.m709lambda$onCreate$1$comkgoloaderactivityMainActivity is called: radioGroup=${radioGroup}, i=${i}`
    );
    this["lambda$onCreate$1$com-kgo-loader-activity-MainActivity"](
      radioGroup,
      i
    );
  };

  MainActivity[
    "lambda$onCreate$2$com-kgo-loader-activity-MainActivity"
  ].implementation = function (toggleButton, view) {
    console.log(
      `MainActivity.m710lambda$onCreate$2$comkgoloaderactivityMainActivity is called: toggleButton=${toggleButton}, view=${view}`
    );
    this["lambda$onCreate$2$com-kgo-loader-activity-MainActivity"](
      toggleButton,
      view
    );
  };

  MainActivity[
    "lambda$onCreate$3$com-kgo-loader-activity-MainActivity"
  ].implementation = function (appCompatButton, view) {
    console.log(
      `MainActivity.m711lambda$onCreate$3$comkgoloaderactivityMainActivity is called: appCompatButton=${appCompatButton}, view=${view}`
    );
    this["lambda$onCreate$3$com-kgo-loader-activity-MainActivity"](
      appCompatButton,
      view
    );
  };

  MainActivity[
    "lambda$onCreate$4$com-kgo-loader-activity-MainActivity"
  ].implementation = function (appCompatButton, view) {
    console.log(
      `MainActivity.m712lambda$onCreate$4$comkgoloaderactivityMainActivity is called: appCompatButton=${appCompatButton}, view=${view}`
    );
    this["lambda$onCreate$4$com-kgo-loader-activity-MainActivity"](
      appCompatButton,
      view
    );
  };

  MainActivity[
    "lambda$onCreate$5$com-kgo-loader-activity-MainActivity"
  ].implementation = function (appCompatButton, view) {
    console.log(
      `MainActivity.m713lambda$onCreate$5$comkgoloaderactivityMainActivity is called: appCompatButton=${appCompatButton}, view=${view}`
    );
    this["lambda$onCreate$5$com-kgo-loader-activity-MainActivity"](
      appCompatButton,
      view
    );
  };

  MainActivity[
    "lambda$onCreate$6$com-kgo-loader-activity-MainActivity"
  ].implementation = function (view) {
    console.log(
      `MainActivity.m714lambda$onCreate$6$comkgoloaderactivityMainActivity is called: view=${view}`
    );
    this["lambda$onCreate$6$com-kgo-loader-activity-MainActivity"](view);
  };

  MainActivity[
    "lambda$onCreate$7$com-kgo-loader-activity-MainActivity"
  ].implementation = function (view) {
    console.log(
      `MainActivity.m715lambda$onCreate$7$comkgoloaderactivityMainActivity is called: view=${view}`
    );
    this["lambda$onCreate$7$com-kgo-loader-activity-MainActivity"](view);
  };

  MainActivity["onCreate"].implementation = function (bundle) {
    console.log(`MainActivity.onCreate is called: bundle=${bundle}`);
    this["onCreate"](bundle);
  };
});
