let question1 = [
    { Answer:"right answer", rightAnswer: true },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false }
];

for (let i = question1.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = question1[i]
    question1[i] = question1[j]
    question1[j] = temp
}

//console.log(question1)


let question2 = [
    { Answer:"right answer", rightAnswer: true },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false }
];

for (let i = question2.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = question2[i]
    question2[i] = question2[j]
    question2[j] = temp
}

//console.log(question2)


let question3 = [
    { Answer:"right answer", rightAnswer: true },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false }
];

for (let i = question3.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = question3[i]
    question3[i] = question3[j]
    question3[j] = temp
}

//console.log(question3)


let question4 = [
    { Answer:"right answer", rightAnswer: true },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false }
];

for (let i = question4.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = question4[i]
    question4[i] = question4[j]
    question4[j] = temp
}

//console.log(question4)


let question5 = [
    { Answer:"right answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false }
];

for (let i = question5.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = question5[i]
    question5[i] = question5[j]
    question5[j] = temp
}

//console.log(question5)