let initial = 0;
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return true;
        }
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return true;
        }
    }
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return true;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return true;
    }

    return false;
}

function number(row, column) {
    if (initial < 9 && !checkWin()) {
        const button = document.querySelector(`table tr:nth-child(${row}) td:nth-child(${column}) button`);
        if (button.textContent !== 'X' && button.textContent !== 'O') {
            if (initial % 2 == 0) {
                button.textContent = 'O';
                button.style.backgroundColor = 'green';
                board[row - 1][column - 1] = 'O';
                button.style.fontSize = '24px';

            } else {
                button.textContent = 'X';
                board[row - 1][column - 1] = 'X';
                button.style.backgroundColor = 'red';
                button.style.fontSize = '24px';

            }

            const winner = checkWin();
            const resultDisplay = document.getElementById('result-display');

            if (winner) {
                if (initial % 2 == 0) {
                    resultDisplay.textContent = "O wins";
                } else {
                    resultDisplay.textContent = "X wins";
                }
            }
            initial++;
            if (initial == 9 && !winner) {
                resultDisplay.textContent = "Draw";
            }
        }
    }
}

function restart() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    initial = 0;
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.textContent = '';
        button.style.backgroundColor = '';
    });
    document.getElementById('result-display').textContent = '';
    }