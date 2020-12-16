// console.log("'tis I, the JS file");

const $board = $('#board');
// const $gridRow = $('<tr></tr>').addClass('row');
// const $gridCol = $('<td></td>').addClass('col');

function buildBoard() {

    for (let i = 1; i < 7; i++) {
        $board.append('<tr class = row></tr>');
    }
    for (let j = 1; j < 8; j++) {
        $('.row').append('<td class = col></td>');
        } 
}

buildBoard();
// $(document).ready(function () {
    
// });

function horizontalWin() {

}

function verticalWin() {

}

function diagonalWin() {

}

function diagonalWinTwo() {

}

function itsATie() {

}