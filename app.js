const { index, store, update, destroy } = require("./FruitController.js");

index();
console.log("\n");
store("pisang");
console.log("\n");
update(0, "kelapa");
console.log("\n");
destroy(0);
