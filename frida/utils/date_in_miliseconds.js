const Calendar = Java.use("java.util.Calendar");
const Long = Java.use("java.lang.Long");

const calendar = Calendar.getInstance();

calendar.set(2025, 2, 1, 0, 0, 0);

const manualDateInMillis = Long.$new(calendar.getTimeInMillis());
console.log(manualDateInMillis.toString());

return manualDateInMillis.toString();
