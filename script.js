



let timer = 100
let wronganswer = false

function answerWrong (){
    wronganswer = true;
}

function startTimer() {

    let i = 0;

    function myLoop() {
        setTimeout(function () {    //ask TAs about how this "method" workd exactly - does it declare an undefined function? found this algorithm at https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
            timer--
            i++;
            if (i < 101) {
                myLoop();
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

function myFunction() {
    var num = 15;
    var n = num.toString();
    document.getElementById("demo").innerHTML = n;
}



