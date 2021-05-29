const screen = document.getElementById("res"),
  clear = document.getElementById("btnClr"),
  result = document.getElementById("btnEql");

const buttons = ["0", "1", "Sum", "Sub", "Mul", "Div"];

buttons.forEach((item) => {
  document.getElementById(`btn${item}`).addEventListener("click", (e) => {
    screen.innerHTML += e.target.innerHTML;
  });
});

clear.addEventListener("click", () => {
  screen.innerHTML = "";
});

result.addEventListener("click", () => {
  // CurrentValue in Screen
  let currentValue = screen.innerHTML;
  let operator;
  // Split by operator
  ["+", "-", "*", "/"].forEach((item) => {
    if (currentValue.includes(item)) {
      operator = item;
      currentValue = currentValue.split(operator);
    }
  });

  let value1 = parseInt(currentValue[0], 2).toString(10);
  let value2 = parseInt(currentValue[1], 2).toString(10);
  let total = eval(value1 + operator + value2);
  total = parseInt(total, 10).toString(2);
  screen.innerHTML = total;
});
