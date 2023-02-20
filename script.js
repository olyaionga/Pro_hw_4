
let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));


let sum = num1 + num2;
let diff = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;


let message = num1 + " + " + num2 + " = " + sum + "\n" +
              num1 + " - " + num2 + " = " + diff + "\n" +
              num1 + " * " + num2 + " = " + product + "\n" +
              num1 + " / " + num2 + " = " + quotient;

alert(message);
