console.log("Sanity check");

// Array an colletion of values(elment), 
// Eech value called and elemtn
// each element has a position(index) zero based
// data type of element can be number,String, boolean, object, array or mix
//array in js are dynmaic (they shrink and grow as need)
// length ( number of element)

let name ="Alex" ;

let name2 ="Adam";

let name3 = "Lily";

// Declaation 


// 1  using  Array() Constructor 
let arr = new Array();
console.log(arr);

// 2

let arr2 = [];


// 3 

let myArr = Array.of(1,2,3,5);

console.table(myArr);





let names = ["Aelx","Adam","Lily"]

console.log(names);

console.log("Size of the array "+names.length);

console.table(names);



//Reading and Wrting 

const food = ['🍌',"🫒",'🍓','🍪','🥦','🥑','🍎']

let st = food[2]
console.log(st);

let av = food[5]

let cookie = food[3];

console.log(av,cookie);


console.table(food)


const oddNumber = [1,3,5,7,9,11,13]

// print each element as even number 

let evenElementOne = oddNumber[0] * 2;

//console.log(evenElementOne);

// ittrate(loop) over an array

for(let i=0;i<oddNumber.length;i++){
  console.log(oddNumber[i] + 1);
  
}

// given an array of number print only elments with odd vlaue

let numbers = [1,2,3,4,5,6,7,8,9,11]

console.log("Array of odds");


for(let i=0;i<numbers.length;i++){
 
  if(numbers[i] % 2 ==1){

    console.log(numbers[i]);
    
  }
  
}










