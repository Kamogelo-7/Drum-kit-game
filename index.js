//*DarkMode feature
document.querySelector("label").addEventListener("click", function () {
  document.querySelector("body").classList.toggle("DarkMode");
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

// let obj = {
//   name: "kamogelo",
//   age: 21,
//   languages: ["English", "Setswana", "Ndebele"],
//   Ethic: "Ndebele",
//   culture: "Ndebele",
// };

// function HouseKeeper(age, name, yearsOfExperince, surname) {
//   this.age = age;
//   this.name = name;
//   this.yearsOfExperince = yearsOfExperince;
//   this.surname = surname;
// }

// let worker1 = new HouseKeeper(35, "Jane", 6, "mokgawa");
// let worker2 = new HouseKeeper(25, "Mike", 3, "kgwaoa");
// let worker3 = new HouseKeeper(19, "Jane", 1);
// let worker4 = new HouseKeeper(21, "Jane", 2);
// let worker5 = new HouseKeeper(40, "Jane", 10);

// console.log(worker1);

// function generateInvitation(
//   guestName,
//   eventDate,
//   eventLocation,
//   hostName,
//   RSVPDeadline
// ) {
//   let guestInvitation = `dear ${guestName}
//   You are cordially invited to an event on ${eventDate} at ${eventLocation}
//   Hosted by: ${hostName}
//   Please RSVP by ${RSVPDeadline}
//   We hope to see you there!
//   Best regards,
//   ${hostName}`;

//   if (eventLocation === "The Grand Hall") {
//     guestInvitation = `We are excited to host this event at our most prestigious venue! ${guestInvitation}`;
//   }
//   return guestInvitation;
// }
// const guestInvitation = generateInvitation(
//   "john",
//   "March 5, 2024",
//   "The Grand Hall",
//   "kamogelo",
//   "February 25, 2024"
// );
// console.log(guestInvitation);

// let num = (num1, num2) => {
//   const int = num1 * num2;

//   return int % 9;
// };
// let value = num(8, 5);
// console.log(`the reminder of ${8 * 5} is = ${value}`);

// document.querySelector("button").addEventListener("click", function () {
//   let userAge = document.querySelector("#ageInput").value;

//   userAge = Number(userAge);

//   if (userAge >= 18) {
//     console.log("Hello, welcome!");
//   } else if (userAge < 18) {
//     console.log("Sorry, you're too young!");
//   }
// });

function btnAnimation(currentkey) {
  let pressedAnimation = document.querySelector("." + currentkey);
  pressedAnimation.classList.add("pressed");

  setTimeout(function () {
    pressedAnimation.classList.remove("pressed");
  }, 200);
}
