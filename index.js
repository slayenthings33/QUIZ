/*************************/
/*******DOM LINKING*******/
/*************************/

// let allAnswers = [answer1, answer2, answer3, answer4];
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let question = document.getElementById("question");
let quizPic = document.getElementById("quizPic");
let nextQuestion;
let questionContainer = document.getElementById("questionContainer");
let nextButton = document.getElementById("nextQuestion");
let startButton = document.getElementById("startButton");
let submittedAnswers = [];
let userChoice;
let score = 0;


/*************************/
/**********IMAGES*********/
/*************************/

let images = [
    "./img/peppers.jpeg",
    "./img/graveyard.jpeg",
    "./img/euUnion.jpg",
    "./img/concert.jpg",
    "./img/longRiver.jpeg",
    "./img/oldTree.jpg",
    "./img/microwave.jpeg",
    "./img/virus.png",
    "./img/cow.jpg",
    "./img/html.jpg"
];


/*************************/
/*********QUESTIONS*******/
/*************************/

let questions = [
    {
        question: "What is the spiciest pepper in the world?",
        image: "./img/peppers.jpeg",
        answers: [
            "Jalapeño", "Ghost Pepper", "Carolina Reaper", "Habanero"
        ],
        rightAnswer: 2
    },
    {
        question: "What animal kills the most humans each year?",
        image: "./img/graveyard.jpeg",
        answers: [
            "Hippopotamus", "Sharks", "Snakes", "Mosquitos"
        ],
        rightAnswer: 3
    },
    {
        question: "When was the European Union formed?",
        image: "./img/euUnion.jpg",
        answers: [
            "January 1990", "September 1992", "November 1993", "July 1991"
        ],
        rightAnswer: 2
    },
    {
        question: "What album has the highest album sales?",
        image: "./img/concert.jpg",
        answers: [
            "Thriller- Michael Jackson", "The White Album- The Beatles", "The Eagles- Greatest Hits", "Led Zeppelin IV- Led Zeppelin"
        ],
        rightAnswer: 2
    }, {
        question: "What is the longest river in the world?",
        image: "./img/longRiver.jpeg",
        answers: [
            "The Nile", "The Amazon", "The Mississippi", "The Yangtze"
        ],
        rightAnswer: 0
    }, {
        question: "How old is the oldest living tree?",
        image: "./img/oldTree.jpg",
        answers: [
            "4,851 year old Methusela tree", "4,500 year old Mountain Ash", "8,359 year old Yellow Meranti", "5,950 year old Redwood"
        ],
        rightAnswer: 0
    }, {
        question: "What year was the first microwave sold?",
        image: "./img/microwave.jpeg",
        answers: [
            "December 1996", "July, 1992", "January, 1994", "October, 1995"
        ],
        rightAnswer: 3
    }, {
        question: "What is Covid-19?",
        image: "./img/virus.png",
        answers: [
            "An endangered species of beetle", "Lamborghini's 2020 model", "A popular dance move", "A Virus"
        ],
        rightAnswer: 3
    }, {
        question: "How many toes does a cow have?",
        image: "./img/cow.jpg",
        answers: [
            "One", "Two", "Three", "Four"
        ],
        "rightAnswer": 1
    }, {
        question: "Is HTML considered a programming language?",
        image: "./img/html.jpg",
        answers: [
            "Yes", "No", "Maybe", "I don't know..."
        ],
        rightAnswer: 0
    }
];
let numOfQuestions = questions.length;
let questionCounter = 0;



/*******************************/
/*********EVENT LISTENERS*******/
/*******************************/

startButton.addEventListener("click", runQuiz);
nextButton.addEventListener("click", goToNextQuestion);

/*******************************/
/*********MAIN FUNCTIONS********/
/*******************************/

function runQuiz() {
    startButton.style.display = "none";
    nextButton.style.display = "flex";
    console.log(questionCounter);
    change(); 
}

function setUserChoice(value) {
    userChoice = value;
}

function getUserChoice() {
    return userChoice;
}

function goToNextQuestion() {
    if (questionCounter < numOfQuestions) {
        console.log(questionPage);
        change();
    } else {
        alert(`You finished with ${score} correct!`);
    }
} 

function questionPage(counter) {
    return `
    <div>
    <p id="question">${
        questions[counter].question
    }</p>
    <img id="quizPic" src="${
        questions[counter].image
    }" alt="Question Image">
    <div id="flexAnswers">
    <div>
    <p class="answer" id="answer1" value="0">${
        questions[counter].answers[0]
    }</p>
    </div>
    <div>
    <p class="answer" id="answer2" value="1">${
        questions[counter].answers[1]
    }</p>
    </div>
    <div>
    <p class="answer" id="answer3" value="2">${
        questions[counter].answers[2]
    }</p>
    </div>
    <div>
    <p class="answer"id="answer4" value="3">${
        questions[counter].answers[3]
    }</p>
    </div>
    </div>          
    `;
}

function change() {
    if (questionCounter < numOfQuestions) {
        console.log(questionCounter);
        questionContainer.innerHTML = questionPage(questionCounter);
        let answer1 = document.getElementById("answer1");
        let answer2 = document.getElementById("answer2");
        let answer3 = document.getElementById("answer3");
        let answer4 = document.getElementById("answer4");
        console.log("change answer1");
        console.log(answer1);
        answer1.onclick = () => {
            console.log("Iǘe been clicked");
            answer1.style.border = "1px black solid";
            answer1.style.fontWeight = "normal";
            answer1.style.backgroundColor = "#b185ff"
            answer1.style.color = "#303C6C"
            answer2.style.border = "1px black solid";
            answer2.style.fontWeight = "normal";
            answer2.style.backgroundColor = "#303C6C"
            answer2.style.color = "#B4DFE5"
            answer3.style.border = "1px black solid";
            answer3.style.fontWeight = "normal";
            answer3.style.backgroundColor = "#303C6C"
            answer3.style.color = "#B4DFE5"
            answer4.style.border = "1px black solid";
            answer4.style.fontWeight = "normal";
            answer4.style.backgroundColor = "#303C6C";
            answer4.style.color = "#B4DFE5";
            console.log(event.target);
            console.log(event.target.value);
            setUserChoice(0);
            console.log(getUserChoice());
        };
        console.log("change answer2");
        console.log(answer2);
        answer2.onclick = () => {
            answer1.style.border = "1px black solid";
            answer1.style.fontWeight = "normal";
            answer1.style.color = "#B4DFE5";
            answer1.style.backgroundColor = "#303C6C";
            answer2.style.border = "1px black solid"
            answer2.style.fontWeight = "normal"
            answer2.style.backgroundColor = "#ed647b";
            answer2.style.color = "#303C6C";
            answer3.style.border = "1px black solid";
            answer3.style.fontWeight = "normal";
            answer3.style.backgroundColor = "#303C6C";
            answer3.style.color = "#B4DFE5";
            answer4.style.border = "1px black solid";
            answer4.style.fontWeight = "normal";
            answer4.style.backgroundColor = "#303C6C";
            answer4.style.color = "#B4DFE5";
            userChoice = 1;
            console.log(userChoice);
        };
        console.log("change answer3");
        console.log(answer3);
        answer3.onclick = () => {
            answer1.style.border = "1px black solid";
            answer1.style.fontWeight = "normal";
            answer1.style.color = "#B4DFE5";
            answer1.style.backgroundColor = "#303C6C";
            answer2.style.border = "1px black solid";
            answer2.style.fontWeight = "normal";
            answer2.style.color = "#B4DFE5";
            answer2.style.backgroundColor = "#303C6C";
            answer3.style.border = "1px black solid"
            answer3.style.fontWeight = "normal"
            answer3.style.color = "#303C6C";
            answer3.style.backgroundColor = "#85ffd6";
            answer4.style.border = "1px black solid";
            answer4.style.fontWeight = "normal";
            answer4.style.backgroundColor = "#303C6C";
            answer4.style.color = "#B4DFE5";
            userChoice = 2;
            console.log(userChoice);
        };
        console.log("change answer4");
        console.log(answer4);
        answer4.onclick = () => {
            answer1.style.border = "1px black solid";
            answer1.style.fontWeight = "normal";
            answer1.style.color = "#B4DFE5";
            answer1.style.backgroundColor = "#303C6C";
            answer2.style.border = "1px black solid";
            answer2.style.fontWeight = "normal";
            answer2.style.color = "#B4DFE5";
            answer2.style.backgroundColor = "#303C6C";
            answer3.style.border = "1px black solid";
            answer3.style.fontWeight = "normal";
            answer3.style.color = "#B4DFE5";
            answer3.style.backgroundColor = "#303C6C";
            answer4.style.border = "1px black solid"
            answer4.style.fontWeight = "normal"
            answer4.style.color = "#303C6C";
            answer4.style.backgroundColor = "#ff85e3";
            userChoice = 3;
            console.log(userChoice);
        }
        console.log(userChoice);
        // let finalChoice = userChoice[userChoice.length - 1];
        let finalChoice = getUserChoice();
        let correctAnswer = questions[questionCounter].rightAnswer;
        console.log("Did we get the answer correct?")
        console.log(finalChoice);
        console.log(correctAnswer);
        console.log(finalChoice === correctAnswer);
        if (finalChoice === correctAnswer) {
            console.log("score");
            console.log(score);
            score++;
            console.log(score);
        }
        questionCounter++;
    }
};

function endQuiz() {

    let resultsPage = `
    <main id="flexContainer">
    <p id="question">You made it to the end of the Quiz!</p>
    <img id="quizPic" src="./img/allDone.gif" alt="Done and Done">
    <div id="resultSection">
    <p class="answer" id="results">Number correct: ${correct}</p>
    <button id="nextQuestion" onclick="runQuiz()">Retake Quiz</button>
    </main>            
    </div>    
    `;
    questionContainer.innerHTML = resultsPage;
}


// function checkAnswer() {
//     while (questionCounter < numOfQuestions) {

//     }
// };


/*************************/
/********ON-CLICK*********/
/*************************/

// Answer button animations