const num1 =  Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionE1 = document.getElementById("question");
questionE1.innerText = `What is ${num1} multiply by ${num2}?`

const formE1 = document.getElementById("form")
const inputE1 = document.getElementById("input")

/*let score=0;*/
const scoreE1 = document.getElementById("score")
let score =  JSON.parse (localStorage.getItem("score"));
if(!score){
    score=0;
}


scoreE1.innerText = `score: ${score}`

const correctAns = num1 * num2;
formE1.addEventListener("submit",()=>{
const userAns = +inputE1.value;
if(userAns === correctAns){
    score++;
    UpdateLocalStorage()
    /*console.log(score);*/
}
else{
    score--;
    UpdateLocalStorage()
   /* console.log(score);*/
}
/*console.log(userAns,typeof userAns);*/
})

function UpdateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}