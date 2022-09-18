const quizform = document.querySelector(".quiz-form");
const subBtn = document.querySelector("#submit-btn");
const message = document.querySelector("#output")

const correctAnswers = [
    "90°",
    "right angled",
    "12, 16, 20",
    "Equilateral tiangle",
    "no"
]

function calculateScore (){
    const formResults = new FormData(quizform);
    let score = 0,
    i = 0;
    for (let value of formResults.values()){
        if ( value === correctAnswers[i]){
            score = score + 1;
        }
            i = i + 1;
    }
    message.innerText = "The score is " + score;
};

subBtn.addEventListener("click", calculateScore );