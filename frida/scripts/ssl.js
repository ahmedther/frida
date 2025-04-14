Java.perform(function () {
  var array_list = Java.use("java.util.ArrayList");
  var ApiClient = Java.use("okhttp3.OkHttpClient");

  ApiClient.certificatePinner.overload().implementation = function () {
    return null;
  };

  var CertificateFactory = Java.use("java.security.cert.CertificateFactory");
  var FileInputStream = Java.use("java.io.FileInputStream");
  var BufferedInputStream = Java.use("java.io.BufferedInputStream");
  var X509Certificate = Java.use("java.security.cert.X509Certificate");
  var KeyStore = Java.use("java.security.KeyStore");
  var TrustManagerFactory = Java.use("javax.net.ssl.TrustManagerFactory");
  var SSLContext = Java.use("javax.net.ssl.SSLContext");
});
