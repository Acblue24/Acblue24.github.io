let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
function handleCellClick(e) {
  const { dataset: { index } } = e.target;
  if (e.target.textContent) return;
  e.target.textContent = currentPlayer;
  e.target.classList.add(currentPlayer);
  if (checkWin()) endGame(false);
  else if (checkDraw()) endGame(true);
  else currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
function checkWin() {
  const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  return winConditions.some(c => c.every(i => cells[i].textContent === currentPlayer));
}
function checkDraw() {
  return Array.from(cells).every(cell => cell.textContent);
}
function endGame(draw) {
  alert(draw ? 'Game ended in a draw!' : `${currentPlayer} has won the game!`);
  cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
}
