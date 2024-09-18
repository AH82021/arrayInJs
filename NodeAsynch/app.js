
// what is nodeJS Free open sourcem cross-platfrom javaScritp runtime engine 
// 
const fs = require('fs') // core module 
const singASong= require('./main.js');// custom module 

const path = require('path')
//  Provides file system-related functionality.

singASong()
console.log("Hello");

console.log(__dirname);
console.log(__filename);


const fullPath = path.join(__dirname,"folder","nijrab",'data.txt')

const ext = path.extname('file.txt')

const pdfExt = path.extname("read.pdf")
console.log(pdfExt);


console.log(ext);


console.log(fullPath);

// Non-Blocking 


// Blocking 


// const data = fs.readFileSync('file.txt','utf8');

// console.log(data);

// console.log('This runs after the file has been read');

// Callback is funciton passed as argument to anther function.callback funciton executed after an asynchrous operations is completed

// fs.readFile('file.txt','utf8',(error ,fileContent)=>{
//   if(error) throw error;
//   console.log(fileContent);
  
// })

console.log('This runs before the file has been read');

// callBack helll

fs.readFile('file1.txt','utf8',(err,data1)=>{
 if(err) throw err;
 fs.readFile('file2.txt','utf8',(err,data2)=>{
  if(err) throw err;
  fs.readFile('file3.txt','utf8',(err,data3)=>{
    if(err) throw err;
    console.log(data1, data2,data3);
    
  })
 })
})

/*
A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation. A promise can be in one of three states:

- **Pending**: The initial state, neither fulfilled nor rejected.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.
*/
// Promise 