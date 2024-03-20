let currentPlayer = 'X';
const board = ['', '', '', '', '', '', '', '', ''];
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleClick(index));
  });
});

function handleClick(index) {
  if (board[index] === '' && !isGameFinished()) {
    board[index] = currentPlayer;
    document.getElementById('cell' + index).innerText = currentPlayer;
    if (checkWin()) {
      alert(currentPlayer + ' wins!');
    } else if (isBoardFull()) {
      alert('It\'s a draw!');
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

function isBoardFull() {
  return board.every(cell => cell !== '');
}

function isGameFinished() {
  return checkWin() || isBoardFull();
}
