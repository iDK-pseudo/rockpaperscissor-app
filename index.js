function computerPlay () {
    var options = ["Rock","Paper","Scissor"]
    return options[Math.floor(Math.random() * 3)];
}


function letsPlay(user = computerPlay(),computer = computerPlay()){
    var userChoice = user.toLowerCase(),computerChoice = computer.toLowerCase();
    console.log("User : ",userChoice," Computer : ",computerChoice);
    if(userChoice === "rock"){
        if(computerChoice === "paper")
            return "Computer Wins";
         else if(computerChoice === "scissor")
            return "User Wins";
         else
            return "Draw";
    }else if(userChoice === "paper"){
        if(computerChoice === "rock")
            return "User Wins";
         else if(computerChoice === "scissor")
            return "Computer Wins";
         else
            return "Draw";
    }else if(userChoice === "scissor"){
        if(computerChoice === "rock")
            return "Computer Wins";
         else if(computerChoice === "paper")
            return "User Wins";
         else
            return "Draw";
    }
}

function game(){
    let scoreUser = 0, scoreComputer = 0;
    for(let i = 0 ; i < 5 ; i ++ ){
        let verdict = letsPlay();
         if(verdict=== "User Wins"){
             scoreUser++;
         }else if(verdict==="Computer Wins"){
             scoreComputer++;
         };
    }

    console.log("User Score ",scoreUser);
    console.log("Computer Score ",scoreComputer);
}

game();