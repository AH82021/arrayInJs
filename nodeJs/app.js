
const sayHi = require('./hello.js')

console.log("Hello Node js")


function print(name) {
  return name.toUpperCase();
}


const upName = print("john");
console.log(upName);

// Can I use dom here 

console.log(__dirname);

console.log(__filename);

sayHi("Jeena")

