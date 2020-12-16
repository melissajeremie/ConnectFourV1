// console.log("'tis I, the JS file");

while (!playerOne){
    const playerOne = prompt("Welcome, Player One. Enter your name below:");
}
let playerOneColor = 'purple';
while (!playerTwo){
    const playerTwo = prompt("Welcome, Player Two. Enter your name below:");
}
let playerTwoColor = 'orange';

let currentPlayer = 1
let winner;
let $myTurn = $('.players-turn');
    $myTurn.textContent = `It's ${playerOne}'s turn`;


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

const $gridRow = $('tr');
const $gridCol = $('td');
const $slots = $('.col')

// return slot coordinates 
for (i = 0; i < $gridCol.length; i++) {
    $gridCol[i].addEventListener('click', (e) => {
        console.log(i)
    })
}

function colorChange(event) {
    let column = event.target.cellIndex;
    let row = [];
    for (let i = 5; i > -1; i--) {
        if ($gridRow[i].children[column].style.backgroundColor == 'white') {
            row.push($gridRow[i].children[column]);

            if (currentPlayer === 1) {
                row[0].style.backgroundColor = 'purple';
                if (verticalWin() || horizontalWin() || diagonalWin() || diagonalWinTwo()) {
                    myTurn.textContent = `${playerOne} wins! Well done.`;
                    myTurn.style.color = playerTwoColor;
                }
            }
        }
        
    }
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