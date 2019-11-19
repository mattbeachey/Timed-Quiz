



let timer = 75
let rightAnswer = true
let endGame = false;
console.log(endGame)

function startGame() {

    const answerBoxEl = document.getElementById("answerbox");

    const colEl = document.createElement("div");
    colEl.setAttribute("class", "col d-flex align-items-center justify-content-center");
    answerBoxEl.append(colEl);

    document.getElementById("start-button").classList.add("disappear")

    question1.forEach(function (question, i) {  //This foreach function is generating an answer based off of the array "Question1", creating a button for each array item
        console.log(question)                   //in the above, are we creating "question?" It hasn't existed before, in now means a single part of the array

        const answerEl = document.createElement("button");
        answerEl.innerHTML = question.Answer; // this asigns each question to each button
        answerEl.setAttribute("class", "answerbutton");
        colEl.append(answerEl); //determine button's final destination on the page here
        answerEl.addEventListener("click", function () {
            if (question.rightAnswer === false) {
                console.log("Wrong Answer")
                rightAnswer = false;
            }
            colEl.parentNode.removeChild(colEl); //deletes the container of the buttons when any button is clicked
            secondQuestion() //The function question2() is called, bringing in the next round of questions to take the place of this round after they are removed.
        })
    });

    function secondQuestion() {                //this gets triggered by the user clicking a button in the previous round of questions

        const colEl = document.createElement("div");   //first, a new container element is created to house the new answer buttons
        colEl.setAttribute("class", "col d-flex align-items-center justify-content-center");
        answerBoxEl.append(colEl);
        console.log(colEl)
        console.log(question2)

        question2.forEach(function (question, i) {
            console.log(question)

            const answerEl = document.createElement("button");
            answerEl.innerHTML = question.Answer;
            answerEl.setAttribute("class", "answerbutton");
            colEl.append(answerEl);
            answerEl.addEventListener("click", function () {
                if (question.rightAnswer === false) {
                    console.log("Wrong Answer")
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
        console.log(colEl)
        console.log(question2)

        question3.forEach(function (question, i) {
            console.log(question)

            const answerEl = document.createElement("button");
            answerEl.innerHTML = question.Answer;
            answerEl.setAttribute("class", "answerbutton");
            colEl.append(answerEl);
            answerEl.addEventListener("click", function () {
                if (question.rightAnswer === false) {
                    console.log("Wrong Answer")
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
        console.log(colEl)
        console.log(question2)

        question4.forEach(function (question, i) {
            console.log(question)

            const answerEl = document.createElement("button");
            answerEl.innerHTML = question.Answer;
            answerEl.setAttribute("class", "answerbutton");
            colEl.append(answerEl);
            answerEl.addEventListener("click", function () {
                if (question.rightAnswer === false) {
                    console.log("Wrong Answer")
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
        console.log(colEl)
        console.log(question2)

        question5.forEach(function (question, i) {
            console.log(question)

            const answerEl = document.createElement("button");
            answerEl.innerHTML = question.Answer;
            answerEl.setAttribute("class", "answerbutton");
            colEl.append(answerEl);
            answerEl.addEventListener("click", function () {
                if (question.rightAnswer === false) {
                    console.log("Wrong Answer")
                    rightAnswer = false;
                }
                colEl.parentNode.removeChild(colEl);
                let endGame = true;
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





