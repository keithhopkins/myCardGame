var startButton = document.getElementById('start-game');

var redealButton = document.createElement('button');
redealButton.innerHTML = 'Redeal';

var resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset!';

startButton.addEventListener('click',function(){
  playGame();
  startButton.remove();
  document.body.appendChild(redealButton);
  document.body.appendChild(resetButton);
});

redealButton.addEventListener('click',playGame);

resetButton.addEventListener('click',function(){
  resetButton.remove();
  redealButton.remove();

});

