"use strict";
let count =0;

let quiz = [
    {
        question: "Сколько будет 2 + 2?",
        answer: 4,
    },
    {
        question: "Солнце встает на востоке?",
        answer: "yes",
    },
    {
        question: "Сколько будет 5/0",
        answer: "NaN",
    },
    {
        question: "Какого цвета небо?",
        answer: "Голубое",
    },
    {
        question: "'Как правильный ответ на «Главный вопрос жизни, вселенной и всего такого»",
        answer: 42,
    }
];

console.log(askingQuestion(quiz, count));

function askingQuestion(arr, score){
    arr.forEach((elem) => {
        let userAnswer = prompt(`${elem.question}`);

        if(userAnswer == elem.answer){
            score +=10;
        } else {
            score +=0;
        }
    });

    return score;
}
