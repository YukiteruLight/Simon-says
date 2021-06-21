var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ['red', 'blue', 'green', 'yellow'];
var level = 0;
var gameStart = false;


//  activates only once to start the game and resets ur clicks;
$('body').on('keyup', () => {
  if (!gameStart) {
    setTimeout(nextSequence, 100);
    gameStart = true;
  }
});

// detectcts when you click YOUR INPUT VVVVVVVVVVVVVVVVV
$('.btn').on('click', (event) => {
  var userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  console.log(userClickedPattern, 'userclicked');
  checkAnswer(userClickedPattern.length - 1);

});

// restarts the game
var startOver = () => {
  level = 0;
  gamePattern = [];
  gameStart = false;
};


// is SUPPOSED TO START NEXT LEVELS
var nextSequence = () => {
  userClickedPattern = [];
  level += 1;
  $('h1').text(`Level ${level}`);
  console.log(userClickedPattern, 'userclicked');
  var randomNumber = (Math.floor(Math.random() * 4));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern, 'gamepattern');
  playSound(randomChosenColour);
  //changing this
  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
};


// adds sound to the patterns
var playSound = (name) => {
  var audio = new Audio(`sounds/${name}.mp3`);
  audio.play();

};

//animates your clicks
var animatePress = (currentColour) => {
  $(`#${currentColour}`).addClass('pressed');
  setTimeout(() => {
    $(`#${currentColour}`).removeClass('pressed');
  }, 100);
};

// checks your input answer..
var checkAnswer = (currentLevel) => {
  if (userClickedPattern.length < gamePattern.length ) {
    for (var i = 0; i < userClickedPattern.length; i++) {
      if (userClickedPattern[i] !== gamePattern[i]) {
        wrongSequence();
        break;
      }
    }
  }
  if (userClickedPattern.length === gamePattern.length ) {
    for (var i = 0; i < userClickedPattern.length; i++) {
      var gameOver = false;
      if (userClickedPattern[i] !== gamePattern [i]) {
        wrongSequence();
        break;
      }
    }
    if (!gameOver) {
      setTimeout(nextSequence, 800);
    }
  }
};

var wrongSequence = () => {
  gameOver = true;
  $('body').addClass('game-over');
  $('h1').text('Game Over, Press Any Key to Restart');
  setTimeout( () => {
    $('body').removeClass('game-over');
  }, 200);
  playSound('wrong');
  startOver();
};
