let colorX = document.querySelector("#xColor");
let colorO = document.querySelector("#oColor");
let colorBg = document.querySelector("#bgColor");

colorX.addEventListener("change", function(){
    colorx =colorX.value;
})
colorO.addEventListener("change", function(){
    coloro =colorO.value;
})

// Draw
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let cellSize = canvas.width / 3;
drawTable();
function drawTable() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let x = col * cellSize;
      let y = row * cellSize;
      ctx.strokeRect(x, y, cellSize, cellSize);
    }
  }
}

// Click position
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

function handleClick(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const col = Math.floor(mouseX / cellSize);
    const row = Math.floor(mouseY / cellSize);
    const index = row * 3 + col;
  
    if (board[index] === '') {
      board[index] = currentPlayer;
      drawSymbol(col, row);
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
  }
  // 
  function drawSymbol(col, row) {
    const x = col * cellSize;
    const y = row * cellSize;
    ctx.font = "48px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    let color = (currentPlayer =='X') ? colorX.value : colorO.value;
    ctx.fillStyle = color;
    ctx.fillText(currentPlayer, x + cellSize / 2, y + cellSize / 2);
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
      announceTie();
    }
  }
  canvas.addEventListener('click', handleClick);