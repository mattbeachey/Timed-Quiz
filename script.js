



let timer = 100
let wrongAnswer = false
let wrongAnsweri = false

function answerWrong() {
    wrongAnswer = true;
    wrongAnsweri = true;
}

function startGame() {

    document.getElementById("start-button").classList.add("disappear")

    questions1.forEach(function () {
        const buttonEl = document.createElement("button");
        buttonEl.innerHTML = "click bait";
        buttonEl.setAttribute("class", "btn btn-primary btn-lg");
        document.body.append(buttonEl);
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
            console.log(i);
        }
    }, 1000)
    if (wrongAnswer === true) {
        timer = timer - 15
        wrongAnswer = false;
    }
    console.log(timer);
    let timerString = timer.toString();
    document.getElementById("timer").innerText = timerString
}
myLoop();
}





