let colorX = document.querySelector("#xColor");
let colorO = document.querySelector("#oColor");
let colorBg = document.querySelector("#bgColor");
let colorXValue = colorX.value;
let colorOValue = colorO.value;
let bgColorValue = colorBg.value;

colorX.addEventListener("change", function() {
  colorXValue = colorX.value;
});

colorO.addEventListener("change", function() {
  colorOValue = colorO.value;
});

colorBg.addEventListener("change", function() {
  bgColorValue = colorBg.value;
  canvas.style.backgroundColor = bgColorValue;
});

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let cellSize = canvas.width / 3;
drawTable();

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

function drawTable() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let x = col * cellSize;
      let y = row * cellSize;
      ctx.strokeRect(x, y, cellSize, cellSize);
    }
  }
}

function announceWinner(winner) {
  const winnerMessage = document.querySelector("#winnerMessage");
  winnerMessage.textContent = `Người chơi ${winner} chiến thắng!`;
}

function handleClick(event) {
  if (!isGameOver()) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const col = Math.floor(mouseX / cellSize);
    const row = Math.floor(mouseY / cellSize);
    const index = row * 3 + col;

    if (board[index] === '') {
      board[index] = currentPlayer;
      drawSymbol(col, row);
      checkWin();
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
  }
}

function isGameOver() {
  return !!document.querySelector("#winnerMessage").textContent;
}

function drawSymbol(col, row) {
  const x = col * cellSize;
  const y = row * cellSize;
  const offset = cellSize * 0.2;

  ctx.strokeStyle = (currentPlayer === 'X') ? colorXValue : colorOValue;
  ctx.lineWidth = 5;

  if (currentPlayer === 'X') {
    ctx.beginPath();
    ctx.moveTo(x + offset, y + offset);
    ctx.lineTo(x + cellSize - offset, y + cellSize - offset);
    ctx.moveTo(x + cellSize - offset, y + offset);
    ctx.lineTo(x + offset, y + cellSize - offset);
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize / 2 - offset, 0, Math.PI * 2);
    ctx.fillStyle = colorOValue;
    ctx.fill();

    ctx.stroke();
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]            // Diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      announceWinner(board[a]);
      return;
    }
  }

  if (board.every(cell => cell !== '')) {
    const winnerMessage = document.querySelector("#winnerMessage");
    winnerMessage.textContent = "Hòa!";
  }
}

canvas.addEventListener('click', handleClick);
