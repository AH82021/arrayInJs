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


// Array Methods 
// String[] farazCars = {}; // fixed , primitve and Object

// List<String> farazCars = new ArrayList<>();// dynamic/Object

// farazCar.add("Toyota")
//Stack<> , last in Frist out
// pop()



let farazCars = [];

console.log(farazCars.length);

// Push
let newSize = farazCars.push("Toyota","Honda","Benz");

farazCars.push("Tata")

console.log(newSize);


// unShift() // adds one or more elements to the begining of an array and return the new length of the array

farazCars.unshift("Tesla")

console.table(farazCars);


// pop() remove the last element from end of array and return the removed element

let removedCar =farazCars.pop()

let emptyArr = [];

let removeEle = emptyArr.pop();

console.log(removeEle);//undefiend


console.log(removedCar);
console.table(farazCars);



// shift()  remove the last element from begninning of array and return the removed element

farazCars.shift();

console.table(farazCars);

let num=[1,2,3,4,5];

function reverseArray(arr){
  let reversedArray=[];

  while(arr.length>0){
    let removeElements=arr.pop();
    reversedArray.push(removeElements);
  }

  return reversedArray;
}

console.log(reverseArray(num));


// getCars() [car1,car2,car3]
// Iteration 

let data =[12,3,4,5,6,7]


// for loop 

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);

}

// ForEach (HOF)

 data.forEach( ele => {
  console.log(ele * 2);
  
});


// map()  (HOF)

let res = data.map(ele =>{
  return ele * 2;
})


let filterdata = data.filter(ele => {
  return ele> 4 && ele <12
});

console.log(filterdata);










