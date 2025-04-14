Java.perform(function () {
  const RunnableC0184i7 = Java.use("com.sparkskillz.i7");
  const q = Java.use("com.sparkskillz.pubg.q");
  const d = Java.use("a.d");
  const Intent = Java.use("android.content.Intent");
  const a_c = Java.use("a.c");
  const c = Java.use("a.c");
  const a = Java.use("com.sparkskillz.pubg.a");
  const s = Java.use("com.sparkskillz.pubg.s");
  const r = Java.use("com.sparkskillz.pubg.r");
  const C0405sa = Java.use("com.sparkskillz.sa");
  const C0076d9 = Java.use("com.sparkskillz.d9");

  const StringClass = Java.use("java.lang.String");

  RunnableC0184i7["$init"].implementation = function (obj, obj2, obj3, i) {
    console.log(
      `RunnableC0184i7.$init is called: obj=${obj}, obj2=${obj2}, obj3=${obj3}, i=${i}`
    );

    if (i == 1) {
      const ObjClass = Java.use("a.b");
      const castedObj = Java.cast(obj, ObjClass);

      const Obj2Class = Java.use("com.sparkskillz.pb");
      const castedObj2 = Java.cast(obj2, Obj2Class);
      const fieldA = Obj2Class.class.getDeclaredField("a");
      fieldA.setAccessible(true);
      fieldA.setBoolean(castedObj2, true);
      const newValue = fieldA.getBoolean(castedObj2);
      console.log(`New value of _a: ${newValue}`);

      const Obj3Class = Java.use("com.sparkskillz.Ng");
      const castedObj3 = Java.cast(obj3, Obj3Class);

      this["$init"](castedObj, castedObj2, castedObj3, 1);
    } else if (i == 2) {
      //   const castedObj = Java.cast(obj, d);

      //   console.log("Obj Val : ", castedObj.J);

      //   const Obj3Class = Java.cast(obj3, C0405sa);

      //   Obj3Class.b();
      return this["$init"](obj, obj2, obj3, i);
    } else {
      this["$init"](obj, obj2, obj3, i);
    }
  };
  RunnableC0184i7["run"].implementation = function () {
    console.log(`RunnableC0184i7.run is called`);
    this["run"]();
  };
  r["$init"].implementation = function (dVar, c0405sa, i) {
    console.log(`r.$init is called: dVar=${dVar}, c0405sa=${c0405sa}, i=${i}`);
    this["$init"](dVar, c0405sa, i);
  };
  r["run"].implementation = function () {
    console.log(`r.run is called`);

    // console.log(
    //   "----------------------------------------------------------------------------------------------------------------------------------------------------------------"
    // );

    // console.log("f674a : ", this.a.value);
    // if (this.a.value === 0) {
    //   try {
    //     // Ensure correct casting and access to fields
    //     const dVar = Java.cast(this.b.value, d);
    //     const c0405sa = Java.cast(this.c.value, C0405sa);
    //     const i = d.J.value;
    //     dVar.getClass();

    //     const aVar = a._c.value;
    //     const dataOutputStream = aVar._b.value;
    //     dataOutputStream.write(4);
    //     aVar._b.value.flush();

    //     const c0076d9 = C0076d9.a(aVar._a.value);
    //     console.log("c0076d9 : ", c0076d9);
    //     console.log("c0076d9_a_Value : ", c0076d9._a.value);
    //     console.log("c0076d9_b_Value : ", c0076d9._b.value);
    //     console.log("c0076d9_c_Value : ", c0076d9._c.value);

    //     const packageInfo = dVar
    //       .getPackageManager()
    //       .getPackageInfo("com.pubg.imobile", 0);

    //     console.log("PackageInfo: ", packageInfo);

    //     const longVersionCode = packageInfo.getLongVersionCode();
    //     console.log("longVersionCode: ", longVersionCode);
    //     const c0076d9_new = aVar.c(longVersionCode.toString());
    //     console.log("c0076d9_new : ", c0076d9_new);

    //     // // Stop and start service
    //     // dVar.stopService(Intent.$new(dVar, a_c.class));
    //     dVar.startService(Intent.$new(dVar, a_c.class));

    //     // // Get Mi class and call K method
    //     // let Mi = Java.use("com.sparkskillz.Mi");
    //     // const K = Mi.K(-225941049458862);
    //     // console.log("K = ", K);

    //     // // Call c method on a_c
    //     // const c0076d9 = aVar.c(K);

    //     // dVar.runOnUiThread(RunnableC0184i7.$new(dVar, c0405sa, 2));
    //     return;
    //   } catch (e) {
    //     console.log("[-] Error: ", e);
    //   }
    // } else {
    //   this["run"]();
    // }
    this["run"]();
  };
  q["onClick"].implementation = function (view) {
    console.log(`q.onClick is called: view=${view}`);
    this["onClick"](view);
  };

  C0076d9["a"].implementation = function (dataInputStream) {
    console.log(`C0076d9.a is called: dataInputStream=${dataInputStream}`);
    let result = this["a"](dataInputStream);
    console.log(`C0076d9.a result=${result}`);
    result._a.value = true;
    result._b.value = StringClass.$new("Found: BGM India 3.6.0");
    result._c.value = StringClass.$new("com.pubg.imobile");
    console.log(`C0076d9.a result_a_Value=${result._a.value}`);
    console.log(`C0076d9.a result_b_Value=${result._b.value}`);
    console.log(`C0076d9.a result_c_Value=${result._c.value}`);
    return result;
  };

  s["$init"].implementation = function (dVar, j) {
    console.log(`s.$init is called: dVar=${dVar}, j=${j}`);

    this["$init"](dVar, 17408081610);
  };
  s["onFinish"].implementation = function () {
    console.log(`s.onFinish is called`);
    this["onFinish"]();
  };

  C0405sa["a"].implementation = function (context) {
    console.log(`C0405sa.a is called: context=${context}`);
    let result = this["a"](context);
    console.log(`C0405sa.a result=${result}`);
    return result;
  };

  C0405sa["b"].implementation = function () {
    console.log(`C0405sa.b is called`);
    this["b"]();
  };

  C0405sa["c"].implementation = function (str) {
    console.log(`C0405sa.c is called: str=${str}`);
    this["c"](str);
  };

  C0405sa["d"].implementation = function () {
    console.log(`C0405sa.d is called`);
    this["d"]();
  };

  C0076d9["$init"].implementation = function (interfaceC0017ag) {
    console.log(
      `C0076d9.$init is called: interfaceC0017ag=${interfaceC0017ag}`
    );
    this["$init"](interfaceC0017ag);
  };

  C0076d9["b"].implementation = function (dataInputStream) {
    console.log(`C0076d9.b is called: dataInputStream=${dataInputStream}`);
    // console.log(dataInputStream.readBoolean());

    // let result = this["b"](dataInputStream);
    // console.log(`C0076d9.b result=${result}`);
    let Ag = Java.use("com.sparkskillz.Ag");

    const c0076d9 = C0076d9.$new(Ag);
    c0076d9._a.value = true;
    return c0076d9;
  };

  C0076d9["c"].implementation = function () {
    console.log(`C0076d9.c is called`);
    this["c"]();
  };

  C0076d9["d"].implementation = function (bundle) {
    console.log(`C0076d9.d is called: bundle=${bundle}`);
    this["d"](bundle);
  };

  C0076d9["e"].implementation = function (bundle) {
    console.log(`C0076d9.e is called: bundle=${bundle}`);
    this["e"](bundle);
  };
  let RunnableC0418t1 = Java.use("com.sparkskillz.t1");
  RunnableC0418t1["$init"].implementation = function (obj, i, obj2) {
    console.log(
      `RunnableC0418t1.$init is called: obj=${obj}, i=${i}, obj2=${obj2}`
    );
    this["$init"](obj, i, obj2);
  };
  RunnableC0418t1["run"].implementation = function () {
    console.log(`RunnableC0418t1.run is called`);
    this["run"]();
  };
  let Ki = Java.use("com.sparkskillz.Ki");
  Ki["run"].implementation = function () {
    console.log(`Ki.run is called`);
    this["run"]();
  };

  c["$init"].implementation = function () {
    console.log(`c.$init is called`);
    this["$init"]();
  };
  c["a"].implementation = function () {
    console.log(`c.a is called`);
    this["a"]();
  };
  c["b"].implementation = function () {
    console.log(`c.b is called`);
    this["b"]();
  };
  c["c"].implementation = function (f, f2) {
    console.log(`c.c is called: f=${f}, f2=${f2}`);
    let result = this["c"](f, f2);
    console.log(`c.c result=${result}`);
    return result;
  };
  c["d"].implementation = function () {
    console.log(`c.d is called`);
    let result = this["d"]();
    console.log(`c.d result=${result}`);
    return result;
  };
  c["e"].implementation = function () {
    console.log(`c.e is called`);
    this["e"]();
  };
  c["f"].implementation = function () {
    console.log(`c.f is called`);
    this["f"]();
  };
  c["g"].implementation = function () {
    console.log(`c.g is called`);
    this["g"]();
  };
  c["onBind"].implementation = function (intent) {
    console.log(`c.onBind is called: intent=${intent}`);
    let result = this["onBind"](intent);
    console.log(`c.onBind result=${result}`);
    return result;
  };
  c["onCreate"].implementation = function () {
    console.log(`c.onCreate is called`);
    this["onCreate"]();
  };

  c["onDestroy"].implementation = function () {
    console.log(`c.onDestroy is called`);
    // this["onDestroy"]();
  };
  let n = Java.use("com.sparkskillz.pubg.n");
  n["run"].implementation = function () {
    console.log(`n.run is called`);
    this["run"]();
  };
});
