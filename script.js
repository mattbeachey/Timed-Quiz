



let timer = 100
let wrongAnswer = false
let wrongAnsweri = false

function answerWrong() {
    wrongAnswer = true;
    wrongAnsweri = true;
}

function startGame() {

    document.getElementById("start-button").classList.add("disappear")

    question1.forEach(function (question, i) {  //This foreach function is generating an answer based off of the array "Question1", creating a button for each array item
        console.log(question)                   //in the above, are we creating "question?" It hasn't existed before, in now means a single part of the array
        const answerEl = document.createElement("button");
        answerEl.innerHTML = question.Answer; // this asigns each question to each button
        answerEl.setAttribute("class", "button");
        document.body.append(answerEl); //determine button's final destination on the page here
        answerEl.addEventListener("click", function(){
            if (question.rightAnswer === true) {
                console.log("Correct Answer")
            }
            if (question.rightAnswer === false) {
                console.log("Wrong Answer")
            }
        })
    });

    let i = 0;
    function myLoop() {
        setTimeout(function () {
            timer--
            i++;
            if (wrongAnsweri === true) {
                i = i + 15
                wrongAnsweri = false;
            }
            if (i < 101) {
                myLoop();
                // console.log(i);
            }
        }, 1000)
        if (wrongAnswer === true) {
            timer = timer - 15
            wrongAnswer = false;
        }
        // console.log(timer);
        let timerString = timer.toString();
        document.getElementById("timer").innerText = timerString
    }
    myLoop();
}





