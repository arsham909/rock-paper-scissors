console.log("Hello Wssordld")


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