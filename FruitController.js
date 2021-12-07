const fruits = require("./data.js");

function index() {
  for (const fruit of fruits) {
    console.log(fruit);
  }
}

function store(name){
    fruits.push(name);
    index();
}

function update(postion, name){
    fruits[postion] = name
    index();
}

function destroy(position){
    fruits.splice(position,1)
   index()
}




module.exports = {index,store,update,destroy};

