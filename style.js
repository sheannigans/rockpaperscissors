var computerChoice =Math.random ();
function getComputerChoice () {
    if (computerChoice < 0.34) {
        console.log("rock");
    } else if (computerChoice <= 0.6) {
        console.log("paper");
    } else {
        console.log("scissors");
    } 
    
}
