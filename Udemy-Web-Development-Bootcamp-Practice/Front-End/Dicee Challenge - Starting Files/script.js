function rollTheDice(){
    var dice = Math.floor(Math.random()*6+1);
    return dice;
}

function whoIsBigger(a,b){
    if (a > b){
        return 1;
    }
    else if (a < b){
        return -1;
    }
    else{
        0;
    }
}
function main(){
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    var diceNum1 = rollTheDice();
    var diceNum2 = rollTheDice();
    dice1.setAttribute("src", "./images/dice" + diceNum1 + ".png");
    dice2.setAttribute("src", "./images/dice" + diceNum2 + ".png");
    
    // show who is win
    if (whoIsBigger(diceNum1, diceNum2) === 1){
        document.querySelector("h1").textContent = "Player 1 is Winner!";
    }
    else if (whoIsBigger(diceNum1, diceNum2) === -1){
        document.querySelector("h1").textContent = "Player 2 is Winner!";
    }
    else{
        document.querySelector("h1").textContent = "Dice it again!";
    }
}

main();

