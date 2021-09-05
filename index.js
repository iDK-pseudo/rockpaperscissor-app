var userScore = 0 , computerScore = 0;

function computerPlay () {
    let options = ["Rock","Paper","Scissor"]
    return options[Math.floor(Math.random() * 3)];
}

function letsPlay(user,computer = computerPlay()){
    let userChoice = user.toLowerCase().trim(),computerChoice = computer.toLowerCase();
    const h4 = document.querySelector("#computerChoice");
    h4.textContent = "Computer Chose : " + computerChoice;
    if(userChoice === "rock"){
        if(computerChoice === "paper")
            return "Computer";
         else if(computerChoice === "scissor")
            return "User";
         else
            return "Draw";
    }else if(userChoice === "paper"){
        if(computerChoice === "rock")
            return "User";
         else if(computerChoice === "scissor")
            return "Computer";
         else
            return "Draw";
    }else if(userChoice === "scissor"){
        if(computerChoice === "rock")
            return "Computer";
         else if(computerChoice === "paper")
            return "User";
         else
            return "Draw";
    }
}

function onClick (oEvent) {
    let result = letsPlay(oEvent.textContent);
    if(result === "User"){
        const td = document.querySelector("#userScore");
        td.textContent = ++userScore;
    }else if(result === "Computer"){
        const td = document.querySelector("#computerScore");
        td.textContent = ++computerScore;
    }

    if(userScore === 5){
        alert("User Wins !");
    }else if(computerScore ===5){
        alert("Computer Wins");
    }

}