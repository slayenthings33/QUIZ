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
let flexContainer = document.getElementById("flexContainer");
let nextButton = document.getElementById("nextQuestion");
let startButton = document.getElementById("startButton");
let retakeQuizBtn = document.getElementById("retakeQuizBtn");
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
    "./img/beer.jpeg"
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
            "4,851 year old Bristlecon Pine", "4,500 year old Mountain Ash", "8,359 year old Yellow Meranti", "5,950 year old Redwood"
        ],
        rightAnswer: 0
    }, {
        question: "What year was the first microwave sold?",
        image: "./img/microwave.jpg",
        answers: [
            "1987", "1992", "1967", "1974"
        ],
        rightAnswer: 2
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
        question: "Which Country drinks the most beer per capita?",
        image: "./img/beer.jpeg",
        answers: [
            "Germany", "Czech Republic", "Ireland", "USA"
        ],
        rightAnswer: 1
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
    retakeQuizBtn.style.display = "none";
    nextButton.style.display = "flex";
    console.log("runQuiz")
    change(); 
}

function change() {
    console.log("function change");
    console.log(`question counter: ${questionCounter}`);    
    if (questionCounter < numOfQuestions) {
        questionContainer.innerHTML = questionPage(questionCounter);
        let answer1 = document.getElementById("answer1");
        let answer2 = document.getElementById("answer2");
        let answer3 = document.getElementById("answer3");
        let answer4 = document.getElementById("answer4");
        // console.log("change answer1");
        // console.log(answer1);
        answer1.onclick = () => {
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
            userChoice = 0;
            // console.log(event.target);
            console.log("correct answer: "+questions[questionCounter].rightAnswer);
            console.log("userChoice: "+userChoice);
            console.log("questionCounter: "+questionCounter);
        };
        // console.log("change answer2");
        // console.log(answer2);
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
            // console.log(event.target);
            console.log("correct answer :"+questions[questionCounter].rightAnswer);
            console.log("userChoice:" +userChoice);
            console.log("questionCounter: "+questionCounter);
        };
        // console.log("change answer3");
        // console.log(answer3);
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
            console.log("correct answer: "+questions[questionCounter].rightAnswer);
            console.log("user choice:" +userChoice);
            console.log("questionCounter: "+questionCounter);
        };
        // console.log("change answer4");
        // console.log(answer4);
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
            // console.log(event.target);
            console.log("questionCounter: "+questionCounter);
            console.log("correct answer: "+questions[questionCounter].rightAnswer);
            console.log("userChoice: "+userChoice);
        }
        console.log("selected: "+userChoice);
    }
    endQuiz();
};

function checkAnswer() {
    let correctAnswer = questions[questionCounter].rightAnswer;
    console.log("***************************");
    console.log(userChoice);
    console.log("Correct answer: "+correctAnswer);
    console.log(`Correct?: ${userChoice === correctAnswer}`);
    if (userChoice === correctAnswer) {
        score++;
        console.log("well done, current score: "+score);
    }
}

function setUserChoice(value) {
    userChoice = value;
    console.log("userChoice set");
}

function getUserChoice() {
    return userChoice;
}

function goToNextQuestion() {
    console.log('score: '+score)
    checkAnswer();
    if (questionCounter < numOfQuestions) {
        // console.log(questionPage);
        questionCounter++;
        change();
    } else {
        alert(`You finished with ${score} correct!`);
    }
    console.log("questionCounter: "+questionCounter);
} 

function questionPage(questionCounter) {
    return `
    <div id="questionContainer">
    <p id="question">${
        questions[questionCounter].question
    }</p>
    <img id="quizPic" src="${
        questions[questionCounter].image
    }" alt="Question Image">
    <div id="flexAnswers">
    <div>
    <p class="answer" id="answer1" value="0">${
        questions[questionCounter].answers[0]
    }</p>
    </div>
    <div>
    <p class="answer" id="answer2" value="1">${
        questions[questionCounter].answers[1]
    }</p>
    </div>
    <div>
    <p class="answer" id="answer3" value="2">${
        questions[questionCounter].answers[2]
    }</p>
    </div>
    <div>
    <p class="answer"id="answer4" value="3">${
        questions[questionCounter].answers[3]
    }</p>
    </div>
    </div>
    </div>          
    `;
}

function endQuiz() {
    if(questionCounter === 10) {
        retakeQuizBtn.style.display = "flex";
        startButton.style.display = "none";
        nextButton.style.display = "none";
        console.log("function endQuiz")
        let resultsPage = `
        <main id="questionContainer">
            <p id="question">You made it to the end of the Quiz!</p>
            <img id="endQuizPic" src="./img/allDone.gif" alt="Done and Done">
            <div id="resultSection">
                <p class="answer" id="results">You got ${score}/10 questions correct!</p>
                <button href="" id="retakeQuizBtn" onclick='retakeQuiz()'>Retake Quiz</button>
            </div>    
        </main>            
        `;
        questionContainer.innerHTML = resultsPage;
    }
}

function retakeQuiz() {
    if(retakeQuizBtn) {
        location.reload()
    }
}


/*************************/
/********ON-CLICK*********/
/*************************/

// Answer button animations