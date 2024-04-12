let userScore = 0;
let compScore = 0;
let userwin = true;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {

    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game is draw.");
    msg.innerText = "Match draw.";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice)=> {
    console.log("user choice =", userChoice);

   

    const compChoice = genCompChoice();
    console.log("computer choice is ",compChoice);

    if(userChoice == compChoice){
        drawGame();
    }

    else {
        
        if (userChoice =="rock") {
            userwin = compChoice == "paper" ? false: true;
        }
        else if(userChoice == "paper") {
            userwin = compChoice == "scissors"? false: true;
        }
        else {
            userwin = compChoice == "rock"?false: true;
        }

        showWinner(userwin, userChoice, compChoice);
    }
}

choices.forEach((choice)=> {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You won the game.");
        msg.innerText= `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose the game.");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

