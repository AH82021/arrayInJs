const {sum,person} = require('./util.js')

const multiply = require('./math.js')

const fs = require('fs')

// windos mac, linux 

const os = require('os')





// file system

console.log('Hello NodeJs');


// const data = sum(12,34);

// console.log(person);

// console.log(data);

// console.log(multiply(3,5));


// Module

// fs.readFile("date.txt",'utf-8',(err,data)=>{
//   if(err){
//     console.error("Error reading file ",err)
//   }

//   console.log('File content: ', data);
  
// })


//simple.txt 


// fs.writeFile('output.txt','Hello how are , I miss you',(err)=>{
//   if(err){
//     console.log('Error whiel writing to the file');
    
//   }
//   console.log('File written sucessfuly ');
  
// })



// fs.appendFile('output.txt','\\nI am what about you, I miss qabli plaue',(err)=>{
//   if(err){
//     console.log('Error whiel writing to the file');
    
//   }
//   console.log('File written sucessfuly ');
  
// })


console.log('Platform',os.platform());

console.log('Free Memory', os.freemem());


const freeMemoryInBytes = os.freemem();

const freeMemoryInGB = freeMemoryInBytes / (1024 * 1024)

console.log(freeMemoryInGB.toFixed(2)+" GB");





