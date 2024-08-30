let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");




const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const draw = () => {
    //console.log("Game was Draw");
    msg.innerText = "Game was Draw! Play Again";
    msg.style.backgroundColor = "#081b31";

};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
       // console.log("you win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
       // console.log("you lose");
        msg.innerText = `You lost! Your ${userChoice}  is defeated by ${compChoice}`;
        msg.style.backgroundColor = "red";


    }
};


const playGame = (userChoice) => {
   // console.log("user choice=", userChoice);
    const compChoice = genCompChoice();
   // console.log("computer choice=", compChoice);
    if (userChoice === compChoice) {
        draw();

    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }
        else {
            userWin = compChoice === "scissors" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);


    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});