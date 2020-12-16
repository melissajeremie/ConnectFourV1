// console.log("'tis I, the JS file");


const playerOne = prompt("Welcome, Player One. Enter your name below:");
const playerTwo = prompt("Welcome, Player Two. Enter your name below:");

let playerOneColor = 'purple';
let playerTwoColor = 'orange';
    
let currentPlayer = 1
let winner;
let $myTurn = $('.players-turn');
    $myTurn.text(`It's ${playerOne}'s turn`);


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

// Game selectors
const $gridRow = $('tr');
const $gridCol = $('td');
const $slots = $('.col')


// return slot coordinates when clicked
for (i = 0; i < $gridCol.length; i++) {
    $gridCol[i].addEventListener('click', (e) => {
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`)
        // console.log(`${e.target.parent().rowIndex}, ${e.target.cellIndex}`)
    });
};

// functions for gameplay

function colorChange(e) {
    let column = e.target.cellIndex;
    let row = [];
    for (let i = 5; i > -1; i--) {
        if ($gridRow[i].children[column].style.backgroundColor == 'white') {
            row.push($gridRow[i].children[column]);

            if (currentPlayer === 1) {
                row[0].style.backgroundColor = 'purple';
                if (verticalWin() || horizontalWin() || diagonalWin() || diagonalWinTwo()) {
                    $myTurn.text(`${playerOne} wins! Well done.`);
                    $myTurn.css("color", playerOneColor);
                    return alert(`${playerOne} has won the game`);
                } else if (itsATie()) {
                    $myTurn.text("It's a tie. Play again!")
                    return alert("It's a tie");
                } else {
                    $myTurn.text(`It's ${playerTwo}'s turn`);
                    return currentPlayer = 2;
                }
            } else {
                row[0].style.backgroundColor = 'orange';
                if (verticalWin() || horizontalWin() || diagonalWin() || diagonalWinTwo()) {
                    $myTurn.text(`${playerTwo} wins! Well done.`);
                    $myTurn.css("color", playerTwoColor);
                    return alert(`${playerTwo} has won the game`);
                } else if (itsATie()) {
                    $myTurn.text("It's a tie. Play again!");
                    return alert("It's a tie");
                } else {
                    $myTurn.text(`It's ${playerOne}'s turn`);
                    return currentPlayer = 1;
                }
            }
        }
        
    }
}
Array.prototype.forEach.call($gridCol, (cell) => {
    cell.addEventListener('click', colorChange);
    cell.style.backgroundColor = 'white';
})
function colorCheck(cell1, cell2, cell3, cell4){
    return (cell1 === cell2 && cell1 === cell3 && cell1 === cell4 && cell1 !== 'white' && cell1 !== undefined);
};

function horizontalWin() {
    for (let row = 0; row < $gridRow.length; row++) {
        for (let col = 0; col < 4; col++){
            if (colorCheck($gridRow[row].children[col].style.backgroundColor,tableRow[row].children[col+1].style.backgroundColor, tableRow[row].children[col+2].style.backgroundColor, tableRow[row].children[col+3].style.backgroundColor)){
                return true;
            }
        }
    }
};

function verticalWin() {
    for (let col = 0; col < 7; col++){
        for (let row =0; row < $gridRow.length-3; row++){
            if (colorCheck($gridRow[row].children[col].style.backgroundColor,$gridRow[row+1].children[col].style.backgroundColor,$gridRow[row+2].children[col].style.backgroundColor,$gridRow[row+3].children[col].style.backgroundColor)){
                return true;
            };
        }
    }
};

function diagonalWin() {
    for (let col = 0; col < 4; col++){
        for (let row = 0; row < $gridRow.length-3; row++){
            if (colorCheck($gridRow[row].children[col].style.backgroundColor, $gridRow[row+1].children[col+1].style.backgroundColor, $gridRow[row+2].children[col+2].style.backgroundColor, $gridRow[row+3].children[col+3].style.backgroundColor)){
                return true;
            }
        }
    }
};

function diagonalWinTwo() {
    for (let col = 0; col < 4; col++){
        for (let row = 5; row > 1; row--){
            if (colorCheck($gridRow[row].children[col].style.backgroundColor, $gridRow[row-1].children[col+1].style.backgroundColor, $gridRow[row-2].children[col+2].style.backgroundColor, $gridRow[row-3].children[col+3].style.backgroundColor)){
                return true;
            }
        }
    }
};

function itsATie() {
    let fullColumn = []
    for (i=0; i < $gridCol.length; i++){
        if ($gridCol[i].style.backgroundColor !== 'white') {
            fullColumn.push($gridCol[i]);
        }
    }
    if (fullColumn.length === $gridCol.length) {
        return true;
    }
};

const $resetGame = $('.reset');
$resetGame.click(clearBoard());
function clearBoard() {
    $myTurn.color = 'green';

    $slots.each(slot => {
        slot.style.backgroundColor = 'white';
    }); 
    return (currentPlayer === 1 ? $myTurn.text(`It's ${playerOne}'s turn`) : $myTurn.text(`It's ${playerTwo}'s turn`));
};

$( () => {
    buildBoard();
    
});
colorChange('click');
    colorCheck();
    verticalWin();
    horizontalWin();
    diagonalWin();
    diagonalWinTwo();
    itsATie();
   