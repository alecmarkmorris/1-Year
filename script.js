const questions = [
    {
        question: "Where did we meet each other?",
        answers: [
            {text: "Rave", correct: false},
            {text: "Arizona State Fair", correct: false},
            {text: "Buffalo Wild Wings", correct: true},
            {text: "Ross", correct: false},
        ]
    },
    {
        question: "Where was out first date?",
        answers: [
            {text: "McDonald's", correct: false},
            {text: "Nandos", correct: false},
            {text: "Bowling", correct: false},
            {text: "Mellow Mushroom", correct: true},
        ]
    },
    {
        question: "Who said the L word First?",
        answers: [
            {text: "Alec", correct: true},
            {text: "Alli", correct: false},
        ]
    },
    {
        question: "Where kissed the other one first?",
        answers: [
            {text: "Alli", correct: true},
            {text: "Alec", correct: false},
        ]
    },
    {
        question: "What was the first gift given in our relationship?",
        answers: [
            {text: "Donuts", correct: false},
            {text: "Flowers", correct: false},
            {text: "Crispy M&M's", correct: true},
            {text: "Cookies", correct: false},
        ]
    },
    {
        question: "When did we officially start dating?",
        answers: [
            {text: "12/31/22", correct: true},
            {text: "01/01/23", correct: false},
            {text: "12/30/22", correct: false},
            {text: "11/29/22", correct: false},
        ]
    },
    {
        question: "Who was the first person to text?",
        answers: [
            {text: "Alli", correct: true},
            {text: "Alec", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
}
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;   
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();

    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}   

function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextQuestion();
    }else{
        startQuiz();
    }
});

startQuiz();