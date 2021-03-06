"use strict";
let count =0;

let quiz = [
    {
        question: "Сколько будет 2 + 2?",
        answer: 4,
    },
    {
        question: "Солнце встает на востоке?",
        answer: true,
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

alert(`Поздравляем, Вы набрaли ${askingQuestion(quiz, count)} баллов`);

function askingQuestion(arr, score){
    arr.forEach((elem) => {

        if(elem.answer == true || elem.answer == false){
            const userAnswer = confirm(`${elem.question}`);
            userAnswer == elem.answer ? score+=10 : score +=0;
        } else {
            const userAnswer = prompt(`${elem.question}`);
            userAnswer == elem.answer ? score+=10 : score +=0;
        }
    });

    return score;
}

