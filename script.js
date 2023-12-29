const quetions = [
    {
        question: "Where did we meet each other?",
        answers: [
            {text: "Rave", correct: false},
            {text: "State Fair", correct: false},
            {text: "Buffalo", correct: true},
            {text: "Ross", correct: false},
        ]
    },
    {
        question: "Where was out first date?",
        answers: [
            {text: "Mcdonalds", correct: false},
            {text: "Nandos", correct: false},
            {text: "Bowling", correct: false},
            {text: "Mellow Mushroom", correct: true},
        ]
    },
    {
        question: "Who said the L word First",
        answers: [
            {text: "Alec", correct: false},
            {text: "Alli", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");