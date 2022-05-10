const start = document
  .getElementById("start")
  .addEventListener("click", startGame);

function startGame(e) {
  document.getElementById("welcome").style.display = "none";
}
