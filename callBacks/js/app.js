console.log('Sanity check');

// Function in javaScript 
// define a funcion
function sayHello(){
  console.log('Hello, Faraz Massod ');
  
}

// calling a function

sayHello()


function greet(name){
  console.log("Hello, "+name);
}


greet("Khalid")

// Funtion are first-clss citizens , 



// function processUnserInput(callback){

//   const name = prompt("Please enter your name")
//   callback(name)
// }

 //processUnserInput(greet)


// Java a multThread language 


// JavaScript Single-thread 


// file 
// read the file  1    8: 10   1min
// "please wait the system proccing reading the file" 1-sec
// anylise it  2       8:11    1min
// write the result in a nother file  3   8:12
// and send to user  4  8:14



// Synchronous  (one statment is executed after the pervios statment finshed)
// Asynchronous ()

// call the car api => 1 million cars data 5 min
//work with cars data

function first(){
  setTimeout(function(){
    console.log('Func number 1');
    
  },5000)
}

function second(){
  console.log("Func number 2");
  
}


first()

second()



// setTimout(func, time)


// Event 

const press = document.getElementById('btn')


function changeBackground(){
  document.body.style.backgroundColor ="blue"
}


press.addEventListener('click',changeBackground)

// htpp mthods : GET, POST,PUT, DELETE, 
// function convetItToJsObject(data){
//  return data.json();
// }


fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(data =>  data.json())
.then(data => console.log(data))
.catch(err => console.error("Erro fetching data",err))


// Promise 
// ES Module
// NodeJs 
// React