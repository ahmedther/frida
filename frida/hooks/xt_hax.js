Java.perform(function () {
  const Message = Java.use("android.os.Message");
  let QWcAUyMZrUYbzAgKz1uaJ9H1VBnCMHeC = Java.use(
    "com.xthax.pubg.QWcAUyMZrUYbzAgKz1uaJ9H1VBnCMHeC"
  );
  QWcAUyMZrUYbzAgKz1uaJ9H1VBnCMHeC["handleMessage"].implementation = function (
    message
  ) {
    console.log(
      `QWcAUyMZrUYbzAgKz1uaJ9H1VBnCMHeC.handleMessage is called: message=${message}`
    );
    message = Message.$new();
    message.what.value = 1;
    this["handleMessage"](message);
  };
  let MAct = Java.use("com.xthax.pubg.MAct");

  MAct["setupvp"].implementation = function (viewPager) {
    console.log(`MAct.setupvp is called: viewPager=${viewPager}`);
    this["setupvp"](viewPager);
  };

  let MainAct2 = Java.use("com.xthax.pubg.fragact.MainAct2");
  MainAct2["getRes"].implementation = function (i) {
    console.log(`MainAct2.getRes is called: i=${i}`);
    // let result = this["getRes"](4);
    // console.log(`MainAct2.getRes result=${result}`);
    const Calendar = Java.use("java.util.Calendar");
    const Long = Java.use("java.lang.Long");

    const calendar = Calendar.getInstance();

    calendar.set(2025, 2, 1, 0, 0, 0);

    const manualDateInMillis = Long.$new(calendar.getTimeInMillis());
    console.log(manualDateInMillis.toString());

    return manualDateInMillis.toString();
  };
  let EMT7BgLCZFczVKgiX5fLP9b7YhPMmw68 = Java.use(
    "androidx.fragment.app.EMT7BgLCZFczVKgiX5fLP9b7YhPMmw68"
  );
  EMT7BgLCZFczVKgiX5fLP9b7YhPMmw68[
    "TJh7NJCF9cu2P4gpzf4cc8w51E9ej7Yj"
  ].implementation = function () {
    console.log(
      `EMT7BgLCZFczVKgiX5fLP9b7YhPMmw68.TJh7NJCF9cu2P4gpzf4cc8w51E9ej7Yj is called`
    );
    let result = this["TJh7NJCF9cu2P4gpzf4cc8w51E9ej7Yj"]();
    console.log(
      `EMT7BgLCZFczVKgiX5fLP9b7YhPMmw68.TJh7NJCF9cu2P4gpzf4cc8w51E9ej7Yj result=${result}`
    );
    return result;
  };
  let Mgu5r6qV9QDaQHgEhU4RGwJDSQXu5gRc = Java.use(
    "feveGYTJNZRGdYzbyHT3Hk2SXrYS1Ak1.Mgu5r6qV9QDaQHgEhU4RGwJDSQXu5gRc"
  );
  Mgu5r6qV9QDaQHgEhU4RGwJDSQXu5gRc["run"].implementation = function () {
    console.log(`Mgu5r6qV9QDaQHgEhU4RGwJDSQXu5gRc.run is called`);
    this["run"]();
  };
});
