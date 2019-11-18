



let timer = 100
let wronganswer = false
let wrongansweri = false

function answerWrong() {
    wronganswer = true;
    wrongansweri = true;
}

function startTimer() {

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
            timer--
            timer--
            timer--
            timer--
            timer--
            timer--
            timer--
            timer--
            timer--
            timer--
            timer--
            timer--
            timer--
            timer--
            timer--
            wronganswer = false;
        }
        console.log(timer);
        let timerString = timer.toString();
        document.getElementById("timer").innerText = timerString
    }
    myLoop();
}





