// Wait till the browser is ready to render the game (avoids glitches)
var game;
window.requestAnimationFrame(function () {
  game = new GameManager(4, 2, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

function changeDifficulty(difficulty) {
  game.difficulty = difficulty;
  game.restart();
}