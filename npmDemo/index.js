// const http = require('http')

// const _ = require('lodash')

// const str = _.capitalize('hello world');

// const users = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 },
//   { name: 'Jim', age: 27 }
// ];

// const filterd = _.filter(users,user=> user.age>26)

// console.log(str);
// console.log(filterd);


// const server = http.createServer((req,res)=>{
//   res.statusCode = 200; // OK 
//   res.setHeader('Content-Type','text/palin')

//   res.end('Hello World! How are you Ok , Pay attension')
// });

// //npm 

// const port = 3000

// server.listen(port,()=>{
//   console.log(`Server is running at ${port} to terminate server pres ctr+C `);
  
// }) 4m, 16 ,

// vanila nodeJS 100
// express 30 line
// java , SpringBoot
// NodeJS express, 
// 

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  
  // Read the file  uber, walmart, netflix , goolgle ,amazon ,afs, jpmc, capital bank, 
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Error loading file');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data); 
    }
  });
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})