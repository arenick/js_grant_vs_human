let play = prompt ("Do you want to play the game?");
console.log (play);

if (play.toLowerCase() === "no") {
    console.log("Maybe another time.");

} else if (play.toLowerCase() === "yes") {
    let name = prompt("What is your name?")
    console.log(name);

let lives = 40;
let grant = 10;
let wins = 0;

while (play) {
    console.log(`Grant's lives = ${grant}`);
    console.log(`${name}'s lives = ${lives}`);
    lives -= Math.floor(Math.random() * 2) + 1;
    grant -= Math.floor(Math.random() * 2) + 1; 
    if (lives <=0){
        break;
    }
    if (grant <= 0){
        grant = 10;
        wins ++;
    }

    let play = prompt ("Do you want to continue to play the game?");
    console.log (play);
    
    if (play.toLowerCase() === "no") {
        console.log("Maybe another time.");
     

    if (wins === 3){
        console.log("Congratulations, YOU WON!");
        break;
    }
}
}
}