/*************************/
/*******DOM LINKING*******/
/*************************/

let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let allAnswers = answer1 + answer2 + answer3 + answer4;
let question = document.getElementById("question");
let quizPic = document.getElementById("quizPic");
let nextQuestion = document.getElementById("nextQuestion");

let submittedAnswers = [];



/*******************************/
/*********MAIN FUNCTIONS********/
/*******************************/

function quizQuestions () {
    for(let i=0; i<questions.length <i++) {

    }
} 



/*************************/
/*********QUESTIONS*******/
/*************************/

let questions = [
    
    {
        question: "What is the spiciest pepper in the world?",
        image: "",
        answers: [
            "Jalapeño", "Ghost Pepper", "Carolina Reaper", "Habanero"
        ],
        rightAnswer: 1 
    },
    {
        question: "What animal kills the most humans each year?",
        image: "",
        answers: ["Hippopotamus", "Sharks", "Snakes","Mosquitos"],
        rightAnswer: 3
    },
    {
        question: "When was the European Union formed?",
        image: "",
        answers: ["January 1990", "September 1992", "November 1993", "July 1991"],
        rightAnswer: 2
    },
    {
        question: "What album has the highest album sales?",
        image: "",
        answers: ["Thriller- Michael Jackson", "The White Album- The Beatles", "The Eagles- Greatest Hits", "Led Zeppelin IV- Led Zeppelin"],
        rightAnswer: 2
    },
    {
        question: "What is the longest river in the world?",
        image: "",
        answers: ["The Nile", "The Amazon", "The Mississippi", "The Yangtze"],
        rightAnswer: 0
    },
    {
        question: "How old is the oldest living tree?",
        image: "",
        answers: ["9,550 year old Spruce", "4,500 year old Mountain Ash", "8,359 year old Yellow Meranti", "5,950 year old Redwood"],
        rightAnswer: 0
    },
    {
        question: "What year was the first microwave sold?",
        image: "",
        answers: ["December 1996", "July, 1992", "January, 1994", "October, 1995"],
        rightAnswer: 3
    },
    {
        question: "What is Covid-19?",
        image: "",
        answers: ["An endangered species of beetle", "Lamborghini's 2020 model", "The fiber optic cable connecting Europe to the US", "The permanent alteration of the world as we knew it"],
        rightAnswer: 3
    },
    {
        question: "How many toes does a cow have?",
        image: "",
        answers: ["One", "Two", "Three", "Four"],
        "rightAnswer": 1
    },
    {
        question: "Is HTML considered a programming language?",
        image: "",
        answers: ["Yes", "No", "Maybe", "I don't know..."],
        rightAnswer: 0
    }
]




// let questions = {
    
//     firstQ: {
//         question: "What is the spiciest pepper in the world?",
//         image: "",
//         answers: [
//             "Jalapeño", "Ghost Pepper", "Carolina Reaper", "Habanero"
//         ],
//         rightAnswer: 1 
//     },
//     secondQ: {
//         question: "What animal kills the most humans each year?",
//         image: "",
//         answers: ["Hippopotamus", "Sharks", "Snakes","Mosquitos"],
//         rightAnswer: 3
//     },
//     thirdQ: {
//         question: "When was the European Union formed?",
//         image: "",
//         answers: ["January 1990", "September 1992", "November 1993", "July 1991"],
//         rightAnswer: 2
//     },
//     fourthQ:  {
//         question: "What album has the highest album sales?",
//         image: "",
//         answers: ["Thriller- Michael Jackson", "The White Album- The Beatles", "The Eagles- Greatest Hits", "Led Zeppelin IV- Led Zeppelin"],
//         rightAnswer: 2
//     },
//     fifthQ: {
//         question: "What is the longest river in the world?",
//         image: "",
//         answers: ["The Nile", "The Amazon", "The Mississippi", "The Yangtze"],
//         rightAnswer: 0
//     },
//     sixthQ: {
//         question: "How old is the oldest living tree?",
//         image: "",
//         answers: ["9,550 year old Spruce", "4,500 year old Mountain Ash", "8,359 year old Yellow Meranti", "5,950 year old Redwood"],
//         rightAnswer: 0
//     },
//     seventhQ: {
//         question: "What year was the first microwave sold?",
//         image: "",
//         answers: ["December 1996", "July, 1992", "January, 1994", "October, 1995"],
//         rightAnswer: 3
//     },
//     eighthQ: {
//         question: "What is Covid-19?",
//         image: "",
//         answers: ["An endangered species of beetle", "Lamborghini's 2020 model", "The fiber optic cable connecting Europe to the US", "The permanent alteration of the world as we knew it"],
//         rightAnswer: 3
//     },
//     ninthQ: {
//         question: "How many toes does a cow have?",
//         image: "",
//         answers: ["One", "Two", "Three", "Four"],
//         "rightAnswer": 1
//     },
//     tenthQ: {
//         question: "Is HTML considered a programming language?",
//         image: "",
//         answers: ["Yes", "No", "Maybe", "I don't know..."],
//         rightAnswer: 0
//     }

// }    



// let arrQuestions = ["What is the spiciest pepper in the world?", "WHat animal kills the most humans each year?", "When was the European Union formed?", "Which album has the record sales?", "What is the longest river in the world?", "How old is the oldest living tree?", "What year was the first microwave sold?", "What is the largest mammal in the world", "How many toes does a cow have?"];
// let correctAnswers = ["The Carolina Reaper", "The Mosquito", "November 1993", "Beatles - The White Album", "The Nile River", "9550 years old", "October, 1995", "125,000", "2 toes"];



// QUESTIONS: opacidad del background, answers deben ser de tipo radio?, answer:active
