const question1 = "How many yards are in a foot?";
let answers1 = [
    { Answer:"1/3", rightAnswer: true },
    { Answer:"3/4", rightAnswer: false },
    { Answer:"4/3", rightAnswer: false },
    { Answer:"42", rightAnswer: false }
];

for (let i = answers1.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = answers1[i]
    answers1[i] = answers1[j]
    answers1[j] = temp
}

//console.log(question1)


const question2 = "How far is it roughly to the moon?";
let answers2 = [
    { Answer:"200,000 miles", rightAnswer: true },
    { Answer:"2,000 miles", rightAnswer: false },
    { Answer:"80 meters", rightAnswer: false },
    { Answer:"1/3 yard", rightAnswer: false }
];

for (let i = answers2.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = answers2[i]
    answers2[i] = answers2[j]
    answers2[j] = temp
}

//console.log(question2)


const question3 = "Where is corn grown?";
let answers3 = [
    { Answer:"Iowa", rightAnswer: true },
    { Answer:"Antarctica", rightAnswer: false },
    { Answer:"The Moon", rightAnswer: false },
    { Answer:"On More Corn", rightAnswer: false }
];

for (let i = answers3.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = answers3[i]
    answers3[i] = answers3[j]
    answers3[j] = temp
}

//console.log(question3)


const question4 = "North Dakota is mostly in which standard timezone?";
let answers4 = [
    { Answer:"Central Standard Time", rightAnswer: true },
    { Answer:"Align-Content Center Standard Time", rightAnswer: false },
    { Answer:"Mountain Standard Time", rightAnswer: false },
    { Answer:"1/3 yard", rightAnswer: false }
];

for (let i = answers4.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = answers4[i]
    answers4[i] = answers4[j]
    answers4[j] = temp
}

//console.log(question4)


const question5 = "What is the square root 87?";
let answers5 = [
    { Answer:"9.3273", rightAnswer: true },
    { Answer:"8.9783", rightAnswer: false },
    { Answer:"8.2354", rightAnswer: false },
    { Answer:"wrong answer", rightAnswer: false }
];

for (let i = answers5.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = answers5[i]
    answers5[i] = answers5[j]
    answers5[j] = temp
}



//console.log(question5)