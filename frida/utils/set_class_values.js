const Obj2Class = Java.use("com.sparkskillz.pb");
const castedObj2 = Java.cast(obj2, Obj2Class);
const fieldA = Obj2Class.class.getDeclaredField("a");
fieldA.setAccessible(true);
const originalValue = fieldA.getBoolean(castedObj2);
console.log(`Original value of _a: ${originalValue}`);
fieldA.setBoolean(castedObj2, true); // Set `_a` to true
console.log("Successfully set _a to true.");

// Verify the new value
const newValue = fieldA.getBoolean(castedObj2);
console.log(`New value of _a: ${newValue}`);

//Get all fields
// const ObjClass = Java.use("a.b");
// const castedObj = Java.cast(obj, ObjClass);
// console.log("Inspecting fields and values of the object:");
// const fields = ObjClass.class.getDeclaredFields();

// fields.forEach((field) => {
//   try {
//     field.setAccessible(true);
//     const fieldName = field.getName();
//     const fieldValue = field.get(castedObj);
//     console.log(`Field: ${fieldName}, Value: ${fieldValue}`);
//   } catch (err) {
//     console.log(
//       `Error accessing field: ${field.getName()}, Error: ${err}`
//     );
//   }
// });
