var quiz = [{
    question: "On average, how many whiskers do cats have?",
    choices: ["8","12","18","24"],
    answer: 3
    },
    {
    question: "People have about 650 skeletal muscles. How many do cats have?",
    choices: ["500", "550", "600", "650"],
    answer: 0
    },
    {
    question: "What is a group of cats called?",
    choices: ["Clowder", "Clutch", "Chain", "Covey"],
    answer: 0
    },
    {
    question: "How many teeth do adult cats have?",
    choices: ["18", "23", "27", "30"],
    answer: 3
    },
    {
    question: "What are cat lovers officially called?",
    choices: ["Clinophile", "Ailurophile", "Arctophile", "Cynophile"],
    answer: 1
    },
    {
    question: "Cats perspire through their ___.",
    choices: ["Whiskers", "Tail", "Hair", "Paws"],
    answer: 3
    },
    {
    question: "What do you call a male cat?",
    choices: ["A tom", "A sally", "A jerry", "A fred"],
    answer: 0
    },
    {
    question: "What is the normal eye color of a Siamese cat?",
    choices: ["Red", "Orange", "Blue", "Black"],
    answer: 2
    },
    {
    question: "Which breed of cat has long hair?",
    choices: ["Siamese", "Persian", "Sphynx", "No cats have long hair"],
    answer: 1
    },
    {
    question: "How much time does a domestic cat spend sleeping?",
    choices: ["23 hours a day", "About 15 hours a day", "8 hours a day", "Cats never sleep"],
    answer: 1
    }
];

function displayQuiz(){
    const output = [];
    for (i=0; i < quiz.length; i++){
        output.push("<h3>" + quiz[i].question + "</h3>");
        for (j=0; j < 4; j++){
            output.push("<label class=\"container\">" + quiz[i].choices[j] + "<input type=\"radio\" name=\"radio" + i + "\"> <span class=\"checkmark\"></span></label>" + "<br>");
        }   
    }   
    quizContainer.innerHTML = output.join("");
}

function showResults(){
    let numCorrect = 0;
    resultsContainer.innerHTML += "<h1>You got " + numCorrect + "/10 correct</h1>";
}


const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

displayQuiz();

submitButton.addEventListener("click", showResults);