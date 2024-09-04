// console.log("DOM");

// // Document Object Model

// console.log(document);

// let ele = document.getElementById('main')
// console.log(ele);

// ele.textContent ="Hello, Dom"


// // 

// let eleByClass = document.getElementsByClassName('classA')

// console.log(eleByClass);

//  for(let i =0; i<eleByClass.length;i++){
//    if( i % 2 == 1){
//     eleByClass[i].textContent ="Faraz"
//    }
//  }


//  let h1Col = document.getElementsByTagName('h1')

//  console.log(h1Col.length)


// let qs = document.querySelector('#main')

// let qsA = document.querySelectorAll("li")
// console.log(qsA);

// // 

// let demoEle = document.getElementById("demo");

// console.log(demoEle.innerText);
// console.log(demoEle.innerHTML);



// demoEle.innerHTML ="New Text <a>Hello <a/>"

//  let link = document.getElementById("myLink")

// link.textContent ="Amazon"
// link.setAttribute('href',"https://amazon.com")
// link.removeAttribute('href')

// let paragraph = document.getElementById("myPara")

// //
// paragraph.classList.add ='new_class'
// paragraph.classList.remove('highlight')

// console.log(paragraph.classList);

// // creating element
// let newElement = document.createElement('h3')
// newElement.textContent ="Eat healthy , Live longer"

// document.body.appendChild(newElement)

// newElement.remove()
//Events handling

 const ele = document.getElementById("main")
 const eleByClass = document.getElementsByClassName("classA")

 console.log(eleByClass);
 

 ele.textContent ="Welcome to learning DOM"
 ele.style.backgroundColor ="green"
 ele.style.fontSize ="4rem"
console.log(ele);

let newElement = document.createElement('h3')
newElement.textContent = "Faraz is learning JS"

document.body.appendChild(newElement)

newElement.remove()


const btn = document.getElementById("btn")

btn.addEventListener('click',()=>{
   document.body.style.backgroundColor ="gold"
})


const inputEle = document.getElementById('myInput')

inputEle.addEventListener('input',()=>{
  console.log(inputEle.value);
  
})


