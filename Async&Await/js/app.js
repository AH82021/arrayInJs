const quizData = [
  {
    question: "Which method is used to select an element by its ID?",
    a: "getElementById()",
    b: "querySelector()",
    c: "getElementsByClassName()",
    d: "getElementsByTagName()",
    correct: "a",
  },
  {
    question: "Which method is used to create a new HTML element in the DOM?",
    a: "createElement()",
    b: "createNode()",
    c: "createHTML()",
    d: "newElement()",
    correct: "a",
  },
  {
    question: "How do you add a class to an HTML element using JavaScript?",
    a: "element.addClass('className')",
    b: "element.className = 'className'",
    c: "element.classList.add('className')",
    d: "element.addClassName('className')",
    correct: "c",
  },
  {
    question: "Which property is used to change the text inside an HTML element?",
    a: "innerHTML",
    b: "textValue",
    c: "textContent",
    d: "innerText",
    correct: "c",
  },
  {
    question: "Which event occurs when an element is clicked?",
    a: "onchange",
    b: "onmouseover",
    c: "onkeydown",
    d: "onclick",
    correct: "d",
  },
];


// cache 

const quiz = document.getElementById('quiz')
const question = document.getElementById("question")
const answerElements = document.querySelectorAll('.answer')
const a_answer = document.getElementById('a_text')
const b_answer = document.getElementById('b_text')
const c_answer = document.getElementById('c_text')
const d_answer = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score =0;
loadQuestions()

function loadQuestions(){
  deselectAnswers();
  const currentQuestion = quizData[currentQuiz]
  question.innerText = currentQuestion.question;
  a_answer.innerText = currentQuestion.a;
  b_answer.innerText = currentQuestion.b;
  c_answer.innerText = currentQuestion.c;
  d_answer.innerText = currentQuestion.d;
}

function deselectAnswers(){
  answerElements.forEach(ele=> ele.checked = false)
}

function getSelected(){
  let answer;

  answerElements.forEach(answerEl => {
    if(answerEl.checked){
      answer = answerEl.id;
    }
  })

  return answer;
}

submitBtn.addEventListener('click',()=>{
const answer = getSelected();

 if(answer){
  if(answer === quizData[currentQuiz].correct){
    score++;
  }
  currentQuiz++;

  if(currentQuiz<quizData.length){
    loadQuestions()
  } else {
    quiz.innerHTML = `
    <h2> You answered ${score}/${quizData.length} questions correctlty </h2>
 <button onclick="location.reload()">Reload</button>
 
    `
  }
 }

})




