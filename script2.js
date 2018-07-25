"use strict";

startGame();
function startGame() {
    let play = prompt ("Are you ready for an epic battle?");
    if (play.toLowerCase() === "yes") {
    let name = prompt("What is your name?");    
    startCombat(name);
    }
    else {
        alert("See you when you are prepared to battle!");
    }
}
//funtion to initiate the game//
function startCombat(name) {
    let lives = 40;
    let grant = 10;
    let wins = 0;
    // set the player's lives outside the while loop, but within the function //
    while (lives > 0) {
        let response = prompt ("would you like to attack or quit?");
            if (response.toLowerCase() === "attack") {
                lives -= getDamage();
                grant -= getDamage();
                console.log(`Grant's lives = ${grant}`);
                console.log(`${name}'s lives = ${lives}`);
                // remove health from user and grant and log the results //
                if (lives <=0){
                    break;
                }
                
                if (grant <= 0){
                    grant = 10;
                    wins ++;
                }

                else if (lives <= 0) {
                    console.log(`Grant wins!`);
                    break;
                }

                if (wins === 3){
                    break;
                }
    } else if (response.toLowerCase() === "quit") {
        console.log("Bummer. See you when you're better prepared.");
        break;
    }

    }

    }
function getDamage() {
    return Math.floor(Math.random() * 5) + 1;
}