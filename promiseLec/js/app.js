
// Asyncrounous progrograming 

// Task 1 
// Task 2

// Cleanig the house 
// Wash the dishes (Washing machine) (loading the dishes, add detergent) 30 min => clean dishes, failed, witing Object Promise (pending, success , rejection)
// Promise aere objects that respresent the eventatual outcome of an asynchrounous operaton 

console.log("Hello");

// function printName(name){
//   console.log(name);
  
// }

const printName =( name,lastName)=> 
  {console.log(name)
  console.log("Second line")}
  
printName("Faraz")

// call an api 

// print a message 

const execFunciton =(res,rej) =>{

  if(true){
    res("The promised filfiled ")
  } else {
   rej("The promise is rejected")
  }
}
const myPromise = new Promise(execFunciton)

const hanldeSucess = (res)=>{
  console.log(res);
  
}

const hanldeRejec = rej=>{
  console.log(rej);
  
}

myPromise
.then(hanldeSucess)
.then(hanldeRejec)


fetch(" http://localhost:8080/api/v1/car/all")
.then(res => res.json())
.then(cars => {
  console.log(cars)
  displayCars(cars)
}

)
.catch(err => console.error("Error happend while  fetching cars data"+err)
)


console.log('Hello after calling api');


function displayCars(cars){
  const carsDiv = document.getElementById('cars-display')

  cars.forEach(car => {
   
    
    const carContinter = document.createElement('div');
    carContinter.className = 'car-containter'

   const carDetails =  `
   <p><strong>ID:</strong> ${car.id}</p>
   <p><strong>Make:</strong> ${car.make}</p>
  <p><strong>Model:</strong> ${car.model}</p>
  <p><strong>Owner Name:</strong> ${car.owner.firstName}</p>
  <p><strong>Price:</strong> ${car.price}</p>
  <p><strong>Year:</strong> ${car.year}</p>
   `
    
   carContinter.innerHTML = carDetails;
   carsDiv.appendChild(carContinter)
  });

}
