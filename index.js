//*DarkMode feature
window.addEventListener("load", function () {
  const savedTheme = localStorage.getItem("Theme");

  // If a theme is saved, apply it to the body
  if (savedTheme === "DarkMode") {
    document.querySelector("body").classList.add("DarkMode");
  }
});

// Add event listener for the theme toggle
document.querySelector("label").addEventListener("click", function () {
  // Toggle the DarkMode class on the body
  document.querySelector("body").classList.toggle("DarkMode");

  // Check if DarkMode is applied, and save the appropriate theme in localStorage
  if (document.querySelector("body").classList.contains("DarkMode")) {
    localStorage.setItem("Theme", "DarkMode");
  } else {
    localStorage.setItem("Theme", "light");
  }
});
//*Advanced DOM manipulation with JS.

let drumNumber = document.querySelectorAll(".drum").length; //? Gets the length of btn numbers

for (let i = 0; i < drumNumber; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let innerHTMLBtnSounds = this.innerHTML;
    keyBoards(innerHTMLBtnSounds);
    btnAnimation(innerHTMLBtnSounds);
  });
}

document.addEventListener("keydown", function (event) {
  keyBoards(event.key);
  btnAnimation(event.key);
});

function btnAnimation(currentkey) {
  let pressedAnimation = document.querySelector("." + currentkey);
  pressedAnimation.classList.add("pressed");

  setTimeout(function () {
    pressedAnimation.classList.remove("pressed");
  }, 200);
}

function keyBoards(key) {
  switch (key) {
    case "w":
      let audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;
    case "a":
      let audio2 = new Audio("sounds/Bamboo Hit - Sound Effect (HD) (1).mp3");
      audio2.play();
      break;
    case "s":
      let audio3 = new Audio("sounds/snare.mp3");
      audio3.play();
      break;
    case "d":
      let audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;
    case "j":
      let audio5 = new Audio("sounds/tom-3.mp3");
      audio5.play();
      break;
    case "k":
      let audio6 = new Audio("sounds/tom-2.mp3");
      audio6.play();
      break;
    case "l":
      let audio7 = new Audio("sounds/crash.mp3");
      audio7.play();
      break;
    default:
  }
}
