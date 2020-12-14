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

// Game cell selectors
const row = document.getElementsByTagName('tr');