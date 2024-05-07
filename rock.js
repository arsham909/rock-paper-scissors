console.log("Hello Wssordld")

let HumanScore = ComputerScore = 0;
console.log(HumanScore)
console.log(ComputerScore)


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
    return(choice);
}