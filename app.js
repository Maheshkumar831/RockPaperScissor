const computerChoiceDisplay=document.getElementById("cc");
const userChoiceDisplay=document.getElementById("uc");
const resultDisplay=document.getElementById("res");
const possibleChoices=document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML=userChoice;
    generateComputerChoices();
    getResult();

}));
function generateComputerChoices(){
    const randomNumber=Math.floor(Math.random()*3)+1;
    if(randomNumber===1){
        computerChoice="Rock";
    }
    if(randomNumber===2){
        computerChoice="Paper";
    }
    if(randomNumber===3){
        computerChoice="Scissor";
    }
    computerChoiceDisplay.innerHTML=computerChoice;

}
function getResult(){
    if(computerChoice===userChoice){
        result="It's a draw!"
    }
    if(computerChoice==="Rock" && userChoice==="Scissor"){
        result="You Lost!";
    }
    if(computerChoice==="Rock" && userChoice==="Paper"){
        result="You Win!";
    }
    if(computerChoice==="Paper" && userChoice==="Rock"){
        result="You Lost!";
    }
    if(computerChoice==="Paper" && userChoice==="Scissor"){
        result="You Win!";

    }
    if(computerChoice==="Scissor" && userChoice==="Paper"){
        result="You Lost!";

    }
    if(computerChoice==="Scissor" && userChoice==="Rock"){
        result="You Win!";

    }
    resultDisplay.innerHTML=result;

}

