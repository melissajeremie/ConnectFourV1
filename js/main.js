console.log("'tis I, the JS file");

function buildBoard() {
    const $board = document.getElementById('#board');
    const $gridRow = $('<tr></tr>').addClass('row');
    const $gridCol = $('<td></td>').addClass('col');

    let rows = 6;
    let columns = 7;
    

    for (let i = 0; i <= rows; i++) {
        $gameTable.append($gridRow);

        for (let j = 0; j <= columns; j++) {
        $gridRow.append($gridCol);
        }
    }
}


$(document).ready(function () {
    buildBoard();
});