



let timer = 100
let wronganswer = false
let wrongansweri = false

function answerWrong() {
    wronganswer = true;
    wrongansweri = true;
}

function startGame() {

    document.getElementById("start-button").classList.add("disappear")

    let i = 0;

    function myLoop() {
        setTimeout(function () { 
            timer--
            i++;
            if (wrongansweri === true) {
                i++
                i++
                i++
                i++
                i++
                i++
                i++
                i++
                i++
                i++
                i++
                i++
                i++
                i++
                i++
                wrongansweri = false;
            }
            if (i < 101) {
                myLoop();
                console.log(i);
            }
        }, 1000)
        if (wronganswer === true) {
            timer = timer - 15
            wronganswer = false;
        }
        console.log(timer);
        let timerString = timer.toString();
        document.getElementById("timer").innerText = timerString
    }
    myLoop();
}





