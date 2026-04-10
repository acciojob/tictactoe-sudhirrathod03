//your JS code here. If required.
let btn = document.getElementById("submit");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let gameDiv = document.getElementById("game");

btn.addEventListener("click", () => {
  console.log("player 1:", player1.value);
  console.log("player 2:", player2.value);
  gameDiv.innerHTML = `
	<h1>Tic Tac Toe</h1>
	<div class="message">${player1.value}, you're up</div>
		<br/>
	<div id="board">
		<div class="cell" id="1"></div>
		<div class="cell" id="2"></div>
		<div class="cell" id="3"></div>
		<div class="cell" id="4"></div>
		<div class="cell" id="5"></div>
		<div class="cell" id="6"></div>
		<div class="cell" id="7"></div>
		<div class="cell" id="8"></div>
		<div class="cell" id="9"></div>
	</div>
	
	`;
  let cells = document.querySelectorAll(".cell");
  let message = document.querySelector(".message");
  let currentPlayer = player1.value;
  let currentSymbol = "x";
  function checkWinner() {
    let winningPatterns = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["3", "6", "9"],
      ["1", "5", "9"],
      ["3", "5", "7"],
    ];
    for (let pattern of winningPatterns) {
      let a = document.getElementById(pattern[0]).textContent;
      let b = document.getElementById(pattern[1]).textContent;
      let c = document.getElementById(pattern[2]).textContent;

      if (a !== "" && a === b && b === c) {
        return true;
      }
    }
    return false;
  }
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (cell.innerText !== "") return;
      cell.textContent = currentSymbol;

      if (checkWinner()) {
        message.innerText = `${currentPlayer} congratulations you won!`;
        cells.forEach((c) => (c.style.pointerEvents = "none"));
        return;
      }

      if (currentSymbol === "x") {
        currentSymbol = "o";
        currentPlayer = player2.value;
      } else {
        currentSymbol = "x";
        currentPlayer = player1.value;
      }

      message.innerText = `${currentPlayer}, you're up`;
    });
  });
});
