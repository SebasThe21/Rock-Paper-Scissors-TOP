//First ¿How do i can make the computer choose an option?

let numberAl=()=>Math.floor(Math.random()*3);

function computerChoice(){
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
let computerScore=0;
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

if(computerScore>userScore){
    alert("computer WINNNNSSSS score computer: "+computerScore+" UserScore: "+userScore)
}else if(computerScore ===userScore){
    alert("DRAAAWW, score computer: "+computerScore+" UserScore: "+userScore)
}else{
    alert("USEEEER WIIIINS, FATALITY, score computer: "+computerScore+" UserScore: "+userScore)
}









