Java.perform(function () {
  // Universal Android SSL Unpinning

  // OkHttp3
  try {
    var CertificatePinner = Java.use("okhttp3.CertificatePinner");
    CertificatePinner.check.implementation = function (hostname, certificates) {
      console.log("[+] OkHttp3 SSL Pinning Bypassed for: " + hostname);
      return;
    };
  } catch (err) {
    console.log("[-] OkHttp3 not found");
  }

  // TrustManager
  var X509TrustManager = Java.use("javax.net.ssl.X509TrustManager");
  var SSLContext = Java.use("javax.net.ssl.SSLContext");

  // Custom TrustManager
  var TrustManager = Java.registerClass({
    name: "universal.TrustManager",
    implements: [X509TrustManager],
    methods: {
      checkClientTrusted: function (chain, authType) {},
      checkServerTrusted: function (chain, authType) {},
      getAcceptedIssuers: function () {
        return [];
      },
    },
  });

  // Prepare new TrustManager
  var TrustManagers = [TrustManager.$new()];

  // Override SSLContext
  var SSLContext_init = SSLContext.init.overload(
    "[Ljavax.net.ssl.KeyManager;",
    "[Ljavax.net.ssl.TrustManager;",
    "java.security.SecureRandom"
  );

  SSLContext_init.implementation = function (
    keyManager,
    trustManager,
    secureRandom
  ) {
    console.log("[+] Bypassing SSLContext");
    SSLContext_init.call(this, keyManager, TrustManagers, secureRandom);
  };

  // Android WebViewClient
  try {
    var WebViewClient = Java.use("android.webkit.WebViewClient");
    WebViewClient.onReceivedSslError.implementation = function (
      webView,
      sslErrorHandler,
      sslError
    ) {
      console.log("[+] WebViewClient SSL Verification Bypassed");
      sslErrorHandler.proceed();
    };
  } catch (err) {
    console.log("[-] WebViewClient not found");
  }

  // Xamarin
  try {
    var ServicePointManager = Java.use(
      "mono.security.ServerCertificateValidationCallback"
    );
    ServicePointManager.callback.implementation = function () {
      console.log("[+] Xamarin SSL Verification Bypassed");
      return true;
    };
  } catch (err) {
    console.log("[-] Xamarin not found");
  }

  // Apache HTTP
  try {
    var BasicHttpParams = Java.use("org.apache.http.params.BasicHttpParams");
    BasicHttpParams.setParameter.implementation = function (name, value) {
      console.log("[+] Apache HTTP Params Bypassed");
      return this;
    };
  } catch (err) {
    console.log("[-] Apache HTTP not found");
  }

  // Native SSL Bypass
  try {
    Module.enumerateExports("libssl.so", {
      onMatch: function (e) {
        if (e.name === "SSL_set_verify") {
          Interceptor.replace(
            e.address,
            new NativeCallback(
              function () {
                console.log("[+] Native SSL Verification Bypassed");
                return 0;
              },
              "void",
              []
            )
          );
        }
      },
      onComplete: function () {},
    });
  } catch (err) {
    console.log("[-] Native SSL hooking failed");
  }
});
