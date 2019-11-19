



let timer = 75
let rightAnswer = true
let endGame = false;

function startGame() {

    const answerBoxEl = document.getElementById("answerbox");
    const questionBoxEl = document.getElementById("questionbox")

    //below creates the div where the answers will live
    const colEl = document.createElement("div");
    colEl.setAttribute("class", "col d-flex align-items-center justify-content-center");
    answerBoxEl.append(colEl);

    //below creates the div where the question will live
    const colElQ = document.createElement("div");
    colElQ.setAttribute("class", "col d-flex align-items-center justify-content-center");
    questionBoxEl.append(colElQ);

    //below pulls a question from game-data.js
    const questionEl = document.createElement("p");
    questionEl.innerHTML = question1;
    colElQ.append(questionEl)
    console.log(questionEl)

    document.getElementById("start-button").classList.add("disappear")

    answers1.forEach(function (question, i) {
        //This foreach function is generating an answer based off of the array "Question1", creating a button for each array item
        //in the above, are we creating "question?" It hasn't existed before, in now means a single part of the array

        const answerEl = document.createElement("button");
        answerEl.innerHTML = question.Answer; // this asigns each question to each button
        answerEl.setAttribute("class", "answerbutton");
        colEl.append(answerEl); //determine button's final destination on the page here
        answerEl.addEventListener("click", function () {
            if (question.rightAnswer === false) {
                rightAnswer = false;
            }
            colEl.parentNode.removeChild(colEl);
            colElQ.parentNode.removeChild(colElQ)
            secondQuestion()
            //deletes the container of the buttons when any button is clicked
            //The function question2() is called, bringing in the next round of questions to take the place of this round after they are removed.
        })
    });

    function secondQuestion() {
        //this gets triggered by the user clicking a button in the previous round of questions

        const colEl = document.createElement("div");
        //first, a new container element is created to house the new answer buttons
        colEl.setAttribute("class", "col d-flex align-items-center justify-content-center");
        answerBoxEl.append(colEl);

        const colElQ = document.createElement("div");
        colElQ.setAttribute("class", "col d-flex align-items-center justify-content-center");
        questionBoxEl.append(colElQ);

        const questionEl = document.createElement("p");
        questionEl.innerHTML = question2;
        colElQ.append(questionEl)
        console.log(questionEl)

        answers2.forEach(function (question, i) {

            const answerEl = document.createElement("button");
            answerEl.innerHTML = question.Answer;
            answerEl.setAttribute("class", "answerbutton");
            colEl.append(answerEl);
            answerEl.addEventListener("click", function () {
                if (question.rightAnswer === false) {
                    rightAnswer = false;
                }
                colEl.parentNode.removeChild(colEl);
                thirdQuestion() //calls next question
            })
        });

    }

    function thirdQuestion() {

        const colEl = document.createElement("div");
        colEl.setAttribute("class", "col d-flex align-items-center justify-content-center");
        answerBoxEl.append(colEl);

        answers3.forEach(function (question, i) {

            const answerEl = document.createElement("button");
            answerEl.innerHTML = question.Answer;
            answerEl.setAttribute("class", "answerbutton");
            colEl.append(answerEl);
            answerEl.addEventListener("click", function () {
                if (question.rightAnswer === false) {
                    rightAnswer = false;
                }
                colEl.parentNode.removeChild(colEl);
                fourthQuestion()
            })
        });

    }

    function fourthQuestion() {

        const colEl = document.createElement("div");
        colEl.setAttribute("class", "col d-flex align-items-center justify-content-center");
        answerBoxEl.append(colEl);

        answers4.forEach(function (question, i) {

            const answerEl = document.createElement("button");
            answerEl.innerHTML = question.Answer;
            answerEl.setAttribute("class", "answerbutton");
            colEl.append(answerEl);
            answerEl.addEventListener("click", function () {
                if (question.rightAnswer === false) {
                    rightAnswer = false;
                }
                colEl.parentNode.removeChild(colEl);
                fifthQuestion()
            })
        });

    }

    function fifthQuestion() {

        const colEl = document.createElement("div");
        colEl.setAttribute("class", "col d-flex align-items-center justify-content-center");
        answerBoxEl.append(colEl);

        answers5.forEach(function (question, i) {

            const answerEl = document.createElement("button");
            answerEl.innerHTML = question.Answer;
            answerEl.setAttribute("class", "answerbutton");
            colEl.append(answerEl);
            answerEl.addEventListener("click", function () {
                if (question.rightAnswer === false) {
                    rightAnswer = false;
                }
                colEl.parentNode.removeChild(colEl);
                endGame = true;
                console.log(endGame)
            })
        });

    }



    console.log(endGame)
    function timerLoop() {
        if (endGame === false) {
            setTimeout(function () {
                if (endGame === false) {
                    timer--
                }
                if (timer > -1) {
                    timerLoop();
                }
            }, 1000)
            if (rightAnswer === false && timer >= 15 && endGame === false) {
                timer = timer - 15
                rightAnswer = true;
            }
            if (timer < 16 && rightAnswer === false && endGame === false) {
                timer = 0
            }

            let timerString = timer.toString();
            document.getElementById("timer").innerText = timerString
        } else {

        }
    }
    timerLoop();
}



//Left to do:

// -add question generation to each question
// -add in actual answers to each array
// -once time stops (at endGame) save string in timer (or value?) to local Storage
// -push from local storage to high scores (will have to check on how to store multiple)
// -at endGame, create prompt to get user to enter initials, store with their scores
// -display all scores
// -style entire thing

