Java.perform(function () {
  var Button = Java.use("android.widget.Button");
  Button.performClick.overload().implementation = function () {
    console.log("Button object:", this);
    console.log("Button class:", this.getClass());
    console.log("Button methods:", this.getClass().getDeclaredMethods());
    return this.performClick.overload().call(this);
  };
});

Java.perform(function () {
  // Hook Button class
  var Button = Java.use("android.widget.Button");

  // Hook onClick listener
  var ViewOnClickListener = Java.use("android.view.View$OnClickListener");

  Button.performClick.overload().implementation = function () {
    console.log("[+] Button clicked!");
    console.log("Button ID: " + this.getId());
    console.log("Button Text: " + this.getText());

    // Get the OnClickListener
    var listener = this.getListenerInfo().mOnClickListener.value;
    if (listener) {
      console.log("OnClickListener class: " + listener.$className);
      console.log("OnClickListener methods:");
      Java.cast(listener, Java.use(listener.$className))
        .$getMethodNames()
        .forEach(function (method) {
          console.log("\t" + method);
        });
    }

    // Call original implementation
    return this.performClick.overload().call(this);
  };

  // Hook all onClick implementations
  ViewOnClickListener.onClick.implementation = function (view) {
    console.log("[+] onClick called from class: " + this.$className);
    console.log("View ID: " + view.getId());

    // Call original implementation
    this.onClick.call(this, view);
  };
});
