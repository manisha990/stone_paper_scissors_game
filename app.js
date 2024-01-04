let userScore =0;
let systemScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const systemScorePara = document.querySelector("#system-score");


choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log("clicked...", userChoice);
        playGame(userChoice);
    });
});

const genSystemChoice = () =>{
    const options = ["stone", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, systemChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${systemChoice}`;
        msg.style.backgroundColor = "green";
    }else{
    
        systemScore++;
        systemScorePara.innerText = systemScore;
        msg.innerText = `You lose! System's ${systemChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};

const playGame = (userChoice) => {
    console.log("users choice = ", userChoice);

    //Generate system choice
    const systemChoice = genSystemChoice();

    if(userChoice === systemChoice){
        drawGame();

    } else{
        let userWin = true;
        if(userChoice === "stone"){
            userWin = systemChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = systemChoice === "scissors" ? false : true;
        } else{
            userWin = systemChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, systemChoice);
    }

}