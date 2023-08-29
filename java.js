var noofdrum = document.querySelectorAll(".drum").length;
for (let i = 0; i < noofdrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    switch (i) {
      case 0:
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();

        break;
      case 1:
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case 2:
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case 3:
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case 4:
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
      case 5:
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case 6:
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    }
  });
}
