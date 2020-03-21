//START BUTTON WHEN CLICKED
document.getElementById("Start").addEventListener("click", spin)


//Set balance to 500
let balance = 500;
let bet = 5


function increaseBet() {
    bet = bet * 2;
}

function loser() {
    document.getElementById("status").src = "images/Fail.png"
}

function winner() {
    document.getElementById("status").src = "images/BigWin.png"
}

function increaseBalance() { // increases each win with a new balance
    let i = Math.floor(Math.random() * 6)
    if (i === 0) {
        balance = balance + 1000;
    }
    if (i == 1) {
        balance = balance + 2000;
       
    } 
    if (i == 2) {
        balance = balance + 3000;
        
    }
    if (i == 3) {
        balance = balance + 4000;
        
    }
    if (i == 4) {
        balance = balance + 5000;
        
    }
    if (i == 5) {
        balance = balance + 6000;
        
    }
}

function spin() {
    balance = balance - bet
    //alert(bet)
    let final = []
    final.push(spinReel("r1"))
    final.push(spinReel("r2"))
    final.push(spinReel("r3"))
    //Check if the reels match up by checking 1 and 0 & 0 and 2
    if (final[0] == final[1] && final[0] == final[2]) {
        winner()
        increaseBalance()
        console.log("win")
    } else {
        loser()
    }
    updateScreen()
}



function spinReel(reel) {
    let i = Math.floor(Math.random() * 6)
    if (i == 0) {
        document.getElementById(reel).src = "images/Cherry.png";
    }
    if (i == 1) {
        document.getElementById(reel).src = "images/Grapes.png";
    }
    if (i == 2) {
        document.getElementById(reel).src = "images/Strawberry.png"
    }
    if (i == 3) {
        document.getElementById(reel).src = "images/Watermelon.png"
    }
    if (i == 4) {
        document.getElementById(reel).src = "images/Dollars.png"
    }
    if (i == 5) {
        document.getElementById(reel).src = "images/ThreeBars.png"
    }
    return i
}

const updateScreen = () => {
    document.getElementById("balanceDisplay").innerHTML = balance
}