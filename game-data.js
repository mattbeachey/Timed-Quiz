const question1 = "Question 1";
let answers1 = [
    { Answer:"right answer", rightAnswer: true },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false }
];

for (let i = answers1.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = answers1[i]
    answers1[i] = answers1[j]
    answers1[j] = temp
}

//console.log(question1)


const question2 = "Question 2";
let answers2 = [
    { Answer:"right answer", rightAnswer: true },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false }
];

for (let i = answers2.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = answers2[i]
    answers2[i] = answers2[j]
    answers2[j] = temp
}

//console.log(question2)


const question3 = "Question 3";
let answers3 = [
    { Answer:"right answer", rightAnswer: true },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false }
];

for (let i = answers3.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = answers3[i]
    answers3[i] = answers3[j]
    answers3[j] = temp
}

//console.log(question3)


const question4 = "Question 4";
let answers4 = [
    { Answer:"right answer", rightAnswer: true },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false }
];

for (let i = answers4.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = answers4[i]
    answers4[i] = answers4[j]
    answers4[j] = temp
}

//console.log(question4)


const question5 = "Question 5";
let answers5 = [
    { Answer:"right answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false }
];

for (let i = answers5.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = answers5[i]
    answers5[i] = answers5[j]
    answers5[j] = temp
}



//console.log(question5)