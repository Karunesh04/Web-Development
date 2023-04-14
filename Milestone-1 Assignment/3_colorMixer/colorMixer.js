let color1 = prompt("Enter the first color: ");
let color2 = prompt("Enter the second color: ");
const backgr = document.querySelector("*");

switch (true) {
  case (color1 === "red" && color2 === "blue") ||
    (color1 === "blue" && color2 === "red"):
    console.log("purple");
    backgr.style.background = "purple";
    break;

  case (color1 === "red" && color2 === "yellow") ||
    (color1 === "yellow" && color2 === "red"):
    console.log("orange");
    backgr.style.background = "orange";
    break;

  case (color1 === "blue" && color2 === "yellow") ||
    (color1 === "yellow" && color2 === "blue"):
    console.log("green");
    backgr.style.background = "green";
    break;

  default:
    console.log("Invalid color combination");
}
