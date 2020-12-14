console.log("'tis I, the JS file");

// Initialize game with player names
while (!player1) {
    const player1 = prompt("Player One - Enter name below");
}
let p1Color = "";

while (!player2) {
    const player2 = prompt("Player Two - Enter name below");
}
let p2Color = "";

// Game selectors
const row = document.getElementsByTagName('tr');
const col = document.getElementsByTagName('td');
const playersTurn = document.querySelector('.players-turn');
const cells = document.querySelectorAll('.cell');
const resetGame = document.querySelector('.reset');

let currentPlayer = 1;
let winner;
playersTurn.textContent = `${player1}, it's your turn`

// store cell coordinates when clicked on

for (let i = 0; i < col.length; i++) {
    col[i].addEventListener('click', (e) => {
        console.log(`${e.target}`)
    });
    
}