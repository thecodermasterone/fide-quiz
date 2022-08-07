const correctAnswers = ["B","C","B","B","A","D","B","C","C","A"];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')

form.addEventListener("submit", e => {
  e.preventDefault();
  
  let scores = 0;
  const userAnswer = [form.q1.value, form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];
  
  // check result
  userAnswer.forEach((answer,index) => {
    if (answer === correctAnswers[index]){
      scores += 10;
      
    }
  });
  // show result
  scrollTo(0,0);
  
  result.classList.remove("d-none");
  
  
  let output = 0;
  const timer = setInterval (()=>{
  result.querySelector("span").textContent = `${output}%`;
  if (output === scores){
    clearInterval(timer);
  } else{
    output++;
  }
  },30);
} );
  
    