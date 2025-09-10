
let board = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "X";

const winPatterns = [
  [0, 1, 2], // row 1
  [3, 4, 5], // row 2
  [6, 7, 8], // row 3
  [0, 3, 6], // col 1
  [1, 4, 7], // col 2
  [2, 5, 8], // col 3
  [0, 4, 8], // diagonal
  [2, 4, 6]  // diagonal
];
const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");
const Back = document.getElementById("back");
const player1Input = document.getElementById("player1");
const player2Input = document.getElementById("player2");

let Player1 = "Player 1"; 
let Player2 = "Player 2"; 

document.querySelector(".submit").addEventListener("click", () => {
  if (player1Input.value.trim() !== "") {
    Player1 = player1Input.value.trim();
  }
  if (player2Input.value.trim() !== "") {
    Player2 = player2Input.value.trim();
  }
  // message.textContent = `Player ${currentPlayer === "X" ? Player1 : Player2}'s turn`;
});



const X_SVG = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><line x1='20' y1='20' x2='80' y2='80' stroke='%2361dafb' stroke-width='12' stroke-linecap='round'/><line x1='80' y1='20' x2='20' y2='80' stroke='%2361dafb' stroke-width='12' stroke-linecap='round'/></svg>";

const O_SVG = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='30' fill='none' stroke='%23ff6b6b' stroke-width='12' stroke-linecap='round'/></svg>";



function isWinningLine([x, y, z]) {
  return board[x] && board[x] === board[y] && board[x] === board[z];
}

function checkWin() {
  return winPatterns.some(pattern =>{
    const [a,b,c] = pattern;
    const check =  board[a] && board[a] === board[b] && board[a] === board[c];
    if(check){
      cells[a].style.backgroundColor = "lightgreen";
      cells[b].style.backgroundColor = "lightgreen";
      cells[c].style.backgroundColor = "lightgreen";

      return true;
    }
  });
}

resetButton.addEventListener("click", () => {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  lastIndexes = [];
  message.textContent = `Player ${currentPlayer}'s turn`;
  cells.forEach(cell =>{
    cell.style.backgroundColor = "";
    cell.innerHTML = ""; 
  });
});

let lastIndexes = [];
let gameActive = true;

cells.forEach(cell => {
  cell.addEventListener("click", handleCellClick);
});

function handleCellClick(e) {
  const index = e.target.getAttribute("data-index");
  if (!gameActive || board[index]) return;

  board[index] = currentPlayer;
  lastIndexes.push(index); 

  const img = document.createElement("img");
  img.src = currentPlayer === "X" ? X_SVG : O_SVG;
  img.alt = currentPlayer;
  img.classList.add("symbol");
  e.target.appendChild(img);

  let player = currentPlayer === "X" ? Player1 : Player2;

  if (checkWin()) {
    message.textContent = `🎉 ${player} wins!`;
    gameActive = false;
    return;
  }

  if (board.every(cell => cell)) {
    message.textContent = "😲 It's a draw!";
    gameActive = false;
    return;
  }

 
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  let nextPlayer = currentPlayer === "X" ? Player1 : Player2;
  message.textContent = ` ${nextPlayer}'s turn`;
}

Back.addEventListener("click", () => {
  if (lastIndexes.length === 0) return; 

  let lastIndex = lastIndexes.pop(); 
  board[lastIndex] = "";
  cells[lastIndex].innerHTML = "";
  cells.forEach(cell => cell.style.backgroundColor = "");

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  let backPlayer = currentPlayer === "X" ? Player1 : Player2;
  message.textContent = ` ${backPlayer}'s turn`;
  gameActive = true; 
});
