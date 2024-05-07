console.log("Hello Wssordld")

let HumanScore = ComputerScore = 0;



function getComputerChoice(){


    let random1 = Math.floor(Math.random()*3)+1
    let choice;
    switch (random1){
        case 1:   choice = 'rock';
        break;
        case 2:  choice = 'paper';
        break;
        case 3:  choice = 'scissors';
        break;
    }
    return(choice)
}

function getHumanChoice(){
    let choice = prompt('please write your decision');
    choice = choice.toLowerCase();
    return(choice);
}

function playRound(hum , com){

    if (hum === com){
        console.log('it"s a tie');
    }
    else if((hum === 'rock' && com === 'scissors') || (hum === 'paper' && com === 'rock') || (hum==='scissors' && com==='paper')) 
    {
        console.log('you won the game ' + hum + ' beats the '+ com)
        HumanScore++;

    }
    else
    {
        console.log('you lost the game ' + com + ' beats the '+ hum);
        ComputerScore++;
    }
}

const HumanSelection = getHumanChoice();
const ComputerSelection = getComputerChoice();

playRound(HumanSelection, ComputerSelection);
console.log(HumanScore)
console.log(ComputerScore)