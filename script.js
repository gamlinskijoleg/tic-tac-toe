const square = document.getElementsByClassName("square");

const square1 = document.getElementById("one");
const square2 = document.getElementById("two");
const square3 = document.getElementById("three");
const square4 = document.getElementById("four");
const square5 = document.getElementById("five");
const square6 = document.getElementById("six");
const square7 = document.getElementById("seven");
const square8 = document.getElementById("eight");
const square9 = document.getElementById("nine");

var WhoWon = "";

var usedSquares = [];

function randomizer() {
  var randnum = Math.floor(Math.random() * (10 - 1) + 1);
  switch (randnum) {
    case 1:
      return "one";
      break;
    case 2:
      return "two";
      break;
    case 3:
      return "three";
      break;
    case 4:
      return "four";
      break;
    case 5:
      return "five";
      break;
    case 6:
      return "six";
      break;
    case 7:
      return "seven";
      break;
    case 8:
      return "eight";
      break;
    case 9:
      return "nine";
      break;
    default:
      break;
  }
}

function whoWon() {
  if (
    square1.innerHTML == "X" &&
    square4.innerHTML == "X" &&
    square7.innerHTML == "X"
  ) {
    WhoWon = "X";
  } else if (
    square2.innerHTML == "X" &&
    square5.innerHTML == "X" &&
    square8.innerHTML == "X"
  ) {
    WhoWon = "X";
  } else if (
    square3.innerHTML == "X" &&
    square6.innerHTML == "X" &&
    square9.innerHTML == "X"
  ) {
    WhoWon = "X";
  } else if (
    square1.innerHTML == "X" &&
    square2.innerHTML == "X" &&
    square3.innerHTML == "X"
  ) {
    WhoWon = "X";
  } else if (
    square4.innerHTML == "X" &&
    square5.innerHTML == "X" &&
    square6.innerHTML == "X"
  ) {
    WhoWon = "X";
  } else if (
    square7.innerHTML == "X" &&
    square8.innerHTML == "X" &&
    square9.innerHTML == "X"
  ) {
    WhoWon = "X";
  } else if (
    square1.innerHTML == "X" &&
    square5.innerHTML == "X" &&
    square9.innerHTML == "X"
  ) {
    WhoWon = "X";
  } else if (
    square3.innerHTML == "X" &&
    square5.innerHTML == "X" &&
    square7.innerHTML == "X"
  ) {
    WhoWon = "X";
  } else if (
    square1.innerHTML == "O" &&
    square4.innerHTML == "O" &&
    square7.innerHTML == "O"
  ) {
    WhoWon = "O";
  } else if (
    square2.innerHTML == "O" &&
    square5.innerHTML == "O" &&
    square8.innerHTML == "O"
  ) {
    WhoWon = "O";
  } else if (
    square3.innerHTML == "O" &&
    square6.innerHTML == "O" &&
    square9.innerHTML == "O"
  ) {
    WhoWon = "O";
  } else if (
    square1.innerHTML == "O" &&
    square2.innerHTML == "O" &&
    square3.innerHTML == "O"
  ) {
    WhoWon = "O";
  } else if (
    square4.innerHTML == "O" &&
    square5.innerHTML == "O" &&
    square6.innerHTML == "O"
  ) {
    WhoWon = "O";
  } else if (
    square7.innerHTML == "O" &&
    square8.innerHTML == "O" &&
    square9.innerHTML == "O"
  ) {
    WhoWon = "O";
  } else if (
    square1.innerHTML == "O" &&
    square5.innerHTML == "O" &&
    square9.innerHTML == "O"
  ) {
    WhoWon = "O";
  } else if (
    square3.innerHTML == "O" &&
    square5.innerHTML == "O" &&
    square7.innerHTML == "O"
  ) {
    WhoWon = "O";
  }
}

function randomy() {
  randnum = randomizer();
  if (!usedSquares.includes(randnum)) {
    document.getElementById(randnum).innerHTML = "O";
    usedSquares.push(randnum);
  } else if (usedSquares.includes(randnum)) {
    randomy();
  } else if (usedSquares.length >= 9 && WhoWon == "") {
    console.log("Draw");
  }
}

function click(clicked_square) {
  clicked_square.onclick = function () {
    if (WhoWon == "") {
      if (usedSquares.includes(clicked_square.getAttribute("id")) == false) {
        clicked_square.innerHTML = "X";
        usedSquares.push(clicked_square.getAttribute("id"));
        randomy();
        whoWon();
        checker();
      }
    }
  };
}

function checker() {
  if (WhoWon == "X") {
    console.log("X player won!");
  } else if (WhoWon == "O") {
    console.log("O player won!");
  }
}

  


click(square1);
click(square2);
click(square3);
click(square4);
click(square5);
click(square6);
click(square7);
click(square8);
click(square9);
