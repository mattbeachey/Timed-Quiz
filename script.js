



let timer = 75
let rightAnswer = true
let rightAnsweri = true

function answerWrong() {
    rightAnswer = false;
    rightAnsweri = false;
}

function startGame() {

    document.getElementById("start-button").classList.add("disappear")

    question1.forEach(function (question, i) {  //This foreach function is generating an answer based off of the array "Question1", creating a button for each array item
        console.log(question)                   //in the above, are we creating "question?" It hasn't existed before, in now means a single part of the array
        const answerEl = document.createElement("button");
        answerEl.innerHTML = question.Answer; // this asigns each question to each button
        answerEl.setAttribute("class", "button");
        document.body.append(answerEl); //determine button's final destination on the page here
        answerEl.addEventListener("click", function () {
            if (question.rightAnswer === true) {
                console.log("Correct Answer")
            }
            if (question.rightAnswer === false) {
                console.log("Wrong Answer")
                rightAnswer = false;
            }
        })
    });

    function myLoop() {
        setTimeout(function () {
            timer--
            if (timer > -1) {
                myLoop();
            }
        }, 1000)
        if (rightAnswer === false && timer >= 15) {
            timer = timer - 15
            rightAnswer = true;
        }
        if (timer < 16 && rightAnswer === false) {
            timer = 0
        }

        let timerString = timer.toString();
        document.getElementById("timer").innerText = timerString
    }
    myLoop();
}





