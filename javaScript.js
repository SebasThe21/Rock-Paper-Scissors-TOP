const btnRock=document.getElementById('rock');
const btnPaper=document.getElementById('paper');
const btnScissors=document.getElementById('scissors');
const buttonContainer=document.querySelector('.buttons')
const score=document.querySelector('#socre-line')

let userScore=0;
let computeScore=0;
let rounds=0;
let computerChoice=function(){
    let numberAl=()=>Math.floor(Math.random()*3);
let choiceNumber=numberAl();
    let computerChoice;
    if(choiceNumber===0){
         computerChoice="scissors"
    }else if(choiceNumber===1){
        computerChoice="rock"
    }else if(choiceNumber===2){
        computerChoice="paper"
    }
return computerChoice;
}




function selectFunction(choice){
    const existingMessage=document.querySelector('#selectMessage');
    if(existingMessage){
        existingMessage.remove();
    }

    const selectButton=document.createElement('p');
    selectButton.style.fontSize="20px";
    selectButton.style.fontWeight="300";
    selectButton.textContent=`You have selected: ${choice}`;
    selectButton.id='selectMessage'
    buttonContainer.appendChild(selectButton);
}

function playGame(userChoice,computerChoice){
    let whoWins
   
        
        if(userChoice.toLowerCase()==="scissors" && computerChoice.toLowerCase() ==="paper"){
            
            whoWins="User win"
        
        }else if(userChoice.toLowerCase() ==="rock" && computerChoice.toLowerCase() ==="scissors"){
            
            whoWins="User win"
        }else if(userChoice.toLocaleLowerCase() ==="paper" && computerChoice.toLowerCase() ==="rock"){
            
            whoWins="user win"
        }else if(userChoice.toLowerCase()===computerChoice.toLowerCase()){
            
            whoWins="draw"
        }else{
            
            whoWins="computer win"
        }
    
        return whoWins
   


}

let result=function(whoWins){
    if (whoWins.toLocaleLowerCase() === "user win") {
        rounds++;
        userScore++;
        score.textContent = "user win"+" User score: "+userScore+" computer score: "+computeScore;
    } else if (whoWins.toLocaleLowerCase() === "draw") {
        rounds++;
        score.textContent = "draw"+" User score: "+userScore+" computer score: "+computeScore;
    } else {
        rounds++;
        computeScore++;
        score.textContent = "computer wins"+" User score: "+userScore+" computer score: "+computeScore;
    }
}

function buttonEvent(playerDesicion){
    selectFunction(playerDesicion);
    let whoWins=playGame(playerDesicion,computerChoice());
    if(rounds ==5){
        if(computeScore>userScore){

            score.textContent="The computer is the winner "+" Score: "+computeScore
        }else{
            score.textContent="The user is the winner "+" Score: "+userScore
        }
    }else{

        result(whoWins);
    }
}

btnRock.addEventListener('click',function(){

    buttonEvent("rock")

    


    
});

btnPaper.addEventListener('click',function(){
    buttonEvent("paper")
})

btnScissors.addEventListener('click',function(){
    buttonEvent("scissors")
})




//First ¿How do i can make the computer choose an option?



/*let computerScore=0;
let userScore=0;
for(let i=0;i<5;i++){
    let userChoice=prompt("Insert your choice( Scissors,Rock or paper)")
    let computerChoicee=computerChoice();
    if(userChoice.toLowerCase()==="scissors" && computerChoicee.toLowerCase() ==="paper"){
        userScore++;
        alert("user win, score: "+userScore)
    
    }else if(userChoice.toLowerCase() ==="rock" && computerChoicee.toLowerCase() ==="scissors"){
        userScore++;
        alert("user win, score: "+userScore)
    }else if(userChoice.toLocaleLowerCase() ==="paper" && computerChoicee.toLowerCase() ==="rock"){
        userScore++;
        alert("user win, score: "+userScore)
    }else if(userChoice.toLowerCase()===computerChoicee.toLowerCase()){
        
        alert("draw")
    }else{
        computerScore++;
        alert("computer win, score: "+computerScore)
    }
}

/*if(computerScore>userScore){
    alert("computer WINNNNSSSS score computer: "+computerScore+" UserScore: "+userScore)
}else if(computerScore ===userScore){
    alert("DRAAAWW, score computer: "+computerScore+" UserScore: "+userScore)
}else{
    alert("USEEEER WIIIINS, FATALITY, score computer: "+computerScore+" UserScore: "+userScore)
}*/









