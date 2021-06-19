var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var buttonColours = ['red', 'blue', 'green', 'yellow'];
var randomNumber = null;
var nextSequence = () => (Math.floor(Math.random() * 4));
var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

var userChosenColour = $('.btn').on('click', (event) => {
  // console.log(event.target.id);
  userClickedPattern.push(event.target.id);
  // console.log(userClickedPattern);
  console.log(event.target);
  playSound(event.target.id);
  // $(event.target).addClass('pressed');
  animatePress();

});
//  function that starts the whole thing
var randomColour = () => {
  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
};


var animatePress = (currentColour = null) => {
  if (currentColour === null) {
    var thisTarget = event.target;
    $(thisTarget).addClass('pressed');
    setTimeout(() => { $(thisTarget).removeClass('pressed'); }, 100);
  } else {
    // ganna see if i can simplify this
  }
};

var playSound = (name) => {
  var audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
};


//hardest part to fisure out for me
$('body').on('keyup', function (event) {
  $('h1').text(`level ${level}`);
  randomColour();
  level++;
  console.log(window.gamePattern);
  $('body').off('keyup');
  // setTimeout($('h1').text(`level ${level}`), 3000);
});






// $('body').off('keydown', randomColour);
