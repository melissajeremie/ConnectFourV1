// console.log("'tis I, the JS file");

// while (!playerOne){
    const playerOne = prompt("Welcome, Player One. Enter your name below:");
// }
let playerOneColor = 'purple';
// while (!playerTwo){
    const playerTwo = prompt("Welcome, Player Two. Enter your name below:");
// }
let playerTwoColor = 'orange';

let currentPlayer = 1
let winner;
let $myTurn = $('.players-turn');
const $resetGame = $('.reset')
    $myTurn.textContent = `It's ${playerOne}'s turn`;

// Create game board onload
const $board = $('#board');

function buildBoard() {

    for (let i = 1; i < 7; i++) {
        $board.append('<tr class = row></tr>');
    }
    for (let j = 1; j < 8; j++) {
        $('.row').append('<td class = col></td>');
        } 
}
buildBoard();

// Game selectors
const $gridRow = $('tr');
const $gridCol = $('td');
const $slots = $('.col')

// return slot coordinates when clicked
for (i = 0; i < $gridCol.length; i++) {
    $gridCol[i].addEventListener('click', (e) => {
        console.log(i)
    })
}

// functions for gameplay

function colorChange(event) {
    let column = event.target.cellIndex;
    let row = [];
    for (let i = 5; i > -1; i--) {
        if ($gridRow[i].children[column].style.backgroundColor == 'white') {
            row.push($gridRow[i].children[column]);

            if (currentPlayer === 1) {
                row[0].style.backgroundColor = 'purple';
                if (verticalWin() || horizontalWin() || diagonalWin() || diagonalWinTwo()) {
                    $myTurn.textContent = `${playerOne} wins! Well done.`;
                    $myTurn.style.color = playerOneColor;
                    return alert(`${playerOne} has won the game`);
                } else if (itsATie()) {
                    $myTurn.textContent = "It's a tie. Play again!"
                    return alert("It's a tie");
                } else {
                    $myTurn.textContent = `It's ${playerTwo}'s turn`
                    return currentPlayer = 2;
                }
            } else {
                row[0].style.backgroundColor = 'orange';
                if (verticalWin() || horizontalWin() || diagonalWin() || diagonalWinTwo()) {
                    $myTurn.textContent = `${playerTwo} wins! Well done.`;
                    $myTurn.style.color = playerOneColor;
                    return alert(`${playerTwo} has won the game`);
                } else if (itsATie()) {
                    $myTurn.textContent = "It's a tie. Play again!"
                    return alert("It's a tie");
                } else {
                    $myTurn.textContent = `It's ${playerOne}'s turn`
                    return currentPlayer = 1;
                }
            }
        }
        
    }
}
Array.prototype.forEach.call($gridCol, (cell) => {
    cell.addEventListener('click', changeColor);
    cell.style.backgroundColor = 'white';
})
function colorCheck(a, b, c, d){
    return (a === b && a ===c && a === d && a !== 'white' && a !== undefined);
}
function verticalWin() {

}

function horizontalWin() {

}


function diagonalWin() {

}

function diagonalWinTwo() {

}

function itsATie() {

}

// $( () => {
    
// });