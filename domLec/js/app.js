console.log("DOM");

// Document Object Model

console.log(document);

let ele = document.getElementById('main')
console.log(ele);

ele.textContent ="Hello, Dom"


// 

let eleByClass = document.getElementsByClassName('classA')

console.log(eleByClass);

 for(let i =0; i<eleByClass.length;i++){
   if( i % 2 == 1){
    eleByClass[i].textContent ="Faraz"
   }
 }


 let h1Col = document.getElementsByTagName('h1')

 console.log(h1Col.length)


let qs = document.querySelector('#main')

let qsA = document.querySelectorAll("li")
console.log(qsA);
