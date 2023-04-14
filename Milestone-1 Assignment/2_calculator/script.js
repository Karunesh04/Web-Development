function calculator(firstNum, secondNum, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
    case "/":
      result = firstNum / secondNum;
      break;
    default:
      console.log("Invalid operator used.");
  }
  console.log("Calculated value is : " + result);
}

calculator(5, 3, "/");
