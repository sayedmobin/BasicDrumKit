var numButton = document.querySelectorAll('.drum').length;
var audio;

// CHeck for keyboard press
document.addEventListener("keydown", function(e) {
  var keyboardKey = e.key;
  makeSound(keyboardKey);
  animateButton(keyboardKey);
});

// Check for image press
for (var i = 0; i <= numButton; i++) {
  document.querySelectorAll('.drum')[i].addEventListener("click", function() {

  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  animateButton(buttonInnerHTML);

  });
}

// Our Switch function
function makeSound(key) {
  switch (key) {
    case 'w':
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case 'a':
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case 's':
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case 'd':
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case 'j':
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case 'k':
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case 'l':
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
    console.log(key);
  }
}

// Animate out Keyboard or Image Press
function animateButton(animatedKey) {
  var buttonpressed = document.querySelector("." + animatedKey);
  buttonpressed.classList.add("pressed");
  setTimeout(function() {
    buttonpressed.classList.remove("pressed");
  }, 100);
}
