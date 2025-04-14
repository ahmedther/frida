Java.perform(function () {
  let rwAtWL28k9aPeBgVPcmLkr5kdXSbpv31 = Java.use(
    "com.official.cfairly.rwAtWL28k9aPeBgVPcmLkr5kdXSbpv31"
  );

  rwAtWL28k9aPeBgVPcmLkr5kdXSbpv31["handleMessage"].implementation = function (
    message
  ) {
    console.log(
      `rwAtWL28k9aPeBgVPcmLkr5kdXSbpv31.handleMessage is called: message=${message}`
    );
    const MessageClass = Java.use("android.os.Message");
    message = MessageClass.$new();
    message.what.value = 0;
    this["handleMessage"](message);
  };
});
