



let timer = 75
let rightAnswer = true
let rightAnswerBonus = false
let score = 0
let endGame = false;
const leaderboardEl = document.getElementById("leaderboard");

function noScroll() {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', noScroll);

function startGame() {
    //All code below until function secondQuestion() is repeated in each question function. 
    //This code is not in its own function, as it just runs when start game runs, and does not need to be triggered in a discrete function.
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

    document.getElementById("start-button").classList.add("disappear")//start button disappears after being clicked
    document.getElementById("timer").classList.remove("disappear")//Live timer appears
    document.getElementById("currentScore").classList.remove("disappear")
    document.getElementById("introbox").classList.add("disappear")

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
            } else {
                rightAnswerBonus = true
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

        answers2.forEach(function (question, i) {

            const answerEl = document.createElement("button");
            answerEl.innerHTML = question.Answer;
            answerEl.setAttribute("class", "answerbutton");
            colEl.append(answerEl);
            answerEl.addEventListener("click", function () {
                if (question.rightAnswer === false) {
                    rightAnswer = false;
                } else {
                    rightAnswerBonus = true
                }
                colElQ.parentNode.removeChild(colElQ)
                colEl.parentNode.removeChild(colEl);
                thirdQuestion() //calls next question
            })
        });

    }

    function thirdQuestion() {

        const colEl = document.createElement("div");
        colEl.setAttribute("class", "col d-flex align-items-center justify-content-center");
        answerBoxEl.append(colEl);

        const colElQ = document.createElement("div");
        colElQ.setAttribute("class", "col d-flex align-items-center justify-content-center");
        questionBoxEl.append(colElQ);

        const questionEl = document.createElement("p");
        questionEl.innerHTML = question3;
        colElQ.append(questionEl)

        answers3.forEach(function (question, i) {

            const answerEl = document.createElement("button");
            answerEl.innerHTML = question.Answer;
            answerEl.setAttribute("class", "answerbutton");
            colEl.append(answerEl);
            answerEl.addEventListener("click", function () {
                if (question.rightAnswer === false) {
                    rightAnswer = false;
                } else {
                    rightAnswerBonus = true
                }
                colElQ.parentNode.removeChild(colElQ)
                colEl.parentNode.removeChild(colEl);
                fourthQuestion()
            })
        });

    }

    function fourthQuestion() {

        const colEl = document.createElement("div");
        colEl.setAttribute("class", "col d-flex align-items-center justify-content-center");
        answerBoxEl.append(colEl);

        const colElQ = document.createElement("div");
        colElQ.setAttribute("class", "col d-flex align-items-center justify-content-center");
        questionBoxEl.append(colElQ);

        const questionEl = document.createElement("p");
        questionEl.innerHTML = question4;
        colElQ.append(questionEl)

        answers4.forEach(function (question, i) {

            const answerEl = document.createElement("button");
            answerEl.innerHTML = question.Answer;
            answerEl.setAttribute("class", "answerbutton");
            colEl.append(answerEl);
            answerEl.addEventListener("click", function () {
                if (question.rightAnswer === false) {
                    rightAnswer = false;
                } else {
                    rightAnswerBonus = true
                }
                colElQ.parentNode.removeChild(colElQ)
                colEl.parentNode.removeChild(colEl);
                fifthQuestion()
            })
        });

    }

    function fifthQuestion() {

        const colEl = document.createElement("div");
        colEl.setAttribute("class", "col d-flex align-items-center justify-content-center");
        answerBoxEl.append(colEl);

        const colElQ = document.createElement("div");
        colElQ.setAttribute("class", "col d-flex align-items-center justify-content-center");
        questionBoxEl.append(colElQ);

        const questionEl = document.createElement("p");
        questionEl.innerHTML = question5;
        colElQ.append(questionEl)

        answers5.forEach(function (question, i) {

            const answerEl = document.createElement("button");
            answerEl.innerHTML = question.Answer;
            answerEl.setAttribute("class", "answerbutton");
            colEl.append(answerEl);
            answerEl.addEventListener("click", function () {
                if (question.rightAnswer === false) {
                    rightAnswer = false;
                } else {
                    rightAnswerBonus = true
                }
                setTimeout(function () {
                    endGame = true;
                }, 100) //had to add this delay to ensure that timer endgame operations performed in correct order
                colElQ.parentNode.removeChild(colElQ)
                colEl.parentNode.removeChild(colEl);

            })
        });

    }


    function timerLoop() {
        if (endGame === false && timer !== 0) { //as long as neither of these endgame conditions are triggered, the timer will run
            setTimeout(function () {
                timer--
                if (timer > -1) {
                    timerLoop();
                }
            }, 1000)
            if (rightAnswer === false && timer >= 15) {
                timer = timer - 15
                rightAnswer = true;
            }
            if (timer < 16 && rightAnswer === false) {
                timer = 0
            }
            if (rightAnswerBonus === true) {
                score = score + timer //score is added by adding time remaining when answer correct
                let scoreString = score.toString();
                document.getElementById("currentScore").innerText = "Current Score:" + scoreString //current score is updated to the page live
                rightAnswerBonus = false
            }

            let timerString = timer.toString();
            document.getElementById("timer").innerText = "Time Remaining:" + timerString
            //time remaining is updated live to the page

        } else { //everything below happens once the game has ended
            document.getElementById("playAgain").classList.remove("disappear")//"Play Again?" button appears
            let scoreString = score.toString();
            document.getElementById("currentScore").innerText = "Final Score:" + scoreString
            const finalTime = timer
            let name = prompt("Please enter your name")  //user is prompted to add their name
            let nameAndScore = { name: name, score: score } //a new array is created with two properties (name and score) for each item
            let currentData = localStorage.getItem("score") //if there is existing local data saved, it is saved into the array "currentData"
            let array = JSON.parse(currentData) //the text of the current data is converted into a JS object
            if (currentData == null) { //if there is no local data saved, the array is made to be a blank array
                array = []
            }
            array.push(nameAndScore) //the current name and score are added to the array that was populated by pulling from the local data
            array.sort(function (a, b) { //the array is sorted by score
                return b.score - a.score;
            });
            let stringarray = JSON.stringify(array) //the array is converted into a string
            localStorage.setItem("score", stringarray) //the appended array is pushed back into local storage
            array.forEach(function (data) { //each item of the array is send to the DOM to create a high scores list on the page
                let nameAndScoreEl = document.createElement("p")
                nameAndScoreEl.innerText = " " + data.name + " " + data.score
                leaderboardEl.append(nameAndScoreEl)
            })
            document.body.classList.add("bodygradient")
            document.getElementById("timer").classList.add("disappear")
            document.getElementById("topScores").classList.remove("disappear")

        }
    }
    timerLoop();
}



//Left to do:
// -style entire thing
// -add in actual answers to each array



//Rules:

//Answer the following questions as quickly as you can. You have 75 seconds to answer them all. If you get a wrong answer,
//15 seconds will be subtracted from the clock. If you get a correct answer, you will be awarded one point for every second 
//you have remaining on the clock at the instant you correctly answered the question. So the more quickly you correctly answer
//a question, the more points you get.

//After you have answered all five questions, or the time runs out, the game ends. Your total score is added to the leader board
//along with your initials. 
