let questions1 = [
    { Answer:"right answer", wrongAnswer: false },
    { Answer:"wrong answer", wrongAnswer: true },
    { Answer:"wrong answer", wrongAnswer: true },
    { Answer:"wrong answer", wrongAnswer: true }
];

for (let i = questions1.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = questions1[i]
    questions1[i] = questions1[j]
    questions1[j] = temp
}

console.log(questions1)


let questions2 = [
    { Answer:"right answer", wrongAnswer: false },
    { Answer:"wrong answer", wrongAnswer: true },
    { Answer:"wrong answer", wrongAnswer: true },
    { Answer:"wrong answer", wrongAnswer: true }
];

for (let i = questions2.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = questions2[i]
    questions2[i] = questions2[j]
    questions2[j] = temp
}

console.log(questions2)


let questions3 = [
    { Answer:"right answer", wrongAnswer: false },
    { Answer:"wrong answer", wrongAnswer: true },
    { Answer:"wrong answer", wrongAnswer: true },
    { Answer:"wrong answer", wrongAnswer: true }
];

for (let i = questions3.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = questions3[i]
    questions3[i] = questions3[j]
    questions3[j] = temp
}

console.log(questions3)


let questions4 = [
    { Answer:"right answer", wrongAnswer: false },
    { Answer:"wrong answer", wrongAnswer: true },
    { Answer:"wrong answer", wrongAnswer: true },
    { Answer:"wrong answer", wrongAnswer: true }
];

for (let i = questions4.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = questions4[i]
    questions4[i] = questions4[j]
    questions4[j] = temp
}

console.log(questions4)


let questions5 = [
    { Answer:"right answer", wrongAnswer: false },
    { Answer:"wrong answer", wrongAnswer: true },
    { Answer:"wrong answer", wrongAnswer: true },
    { Answer:"wrong answer", wrongAnswer: true }
];

for (let i = questions5.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = questions5[i]
    questions5[i] = questions5[j]
    questions5[j] = temp
}

console.log(questions5)