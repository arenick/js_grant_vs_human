let play = prompt ("Do you want to play the game?");
console.log (play);
//initialize the game//
if (play.toLowerCase() === "no") {
    console.log("Maybe another time.");

} else if (play.toLowerCase() === "yes") {
    let name = prompt("What is your name?")
    console.log(name);
// Ask the user to enter their name //
let lives = 40;
let grant = 10;
let wins = 0;
// set the player's lives outside the while loop //
while (play) {
    console.log(`Grant's lives = ${grant}`);
    console.log(`${name}'s lives = ${lives}`);
    lives -= Math.floor(Math.random() * 2) + 1;
    grant -= Math.floor(Math.random() * 2) + 1; 
    // remove health from user and grant and log the results //
    if (lives <=0){
        break;
    }
    if (grant <= 0){
        grant = 10;
        wins ++;
    }
    
    if (wins === 3){
        break;
    }
    // each time grant dies, a win is logged incrementally //
    let play = prompt ("Do you want to continue to play the game?");
    console.log (play);
    
    if (play.toLowerCase() === "no") {
        console.log("Maybe another time.");

    
    }
}
console.log("Congratulations, YOU WON!");
}