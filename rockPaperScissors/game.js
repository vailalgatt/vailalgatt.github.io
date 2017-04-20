var playerChoice;
var computerChoice;
var forWinner;
var forLoser;
var result;


function gameManager() {
    calChoices()
    compareChoices()
}


function play(choice) {
    playerChoice = choice
    gameManager()
}

function calChoices() {
    var cal = Math.random();
    if (cal < 0.34) {
        computerChoice = "rock";
    } else if (cal <= 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
}

function compareChoices() {
    console.log("player " + "playerChoice" + "computer " + "computerChoice")
    if (playerChoice === computerChoice) {
        result = "tie"
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        winner = computerChoice
        result = "Winner"
    }
    else {
        result = "loser"
    }

    if (playerChoice === "paper" && computerChoice === "rock") {
        result = "Winner"
    }
    else {
        result = "loser"
    }

    if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            result = "Winner"
        }
        else {
            result = "loser"
        }
    }
    displayResult()
}


function displayResult() {
    document.getElementById("display-result").innerText = result;
}





















