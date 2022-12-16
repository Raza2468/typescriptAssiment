#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

console.log(`               _____________________
              |  _________________  |
              | | Faiz e Raza  0. | |
              | |_________________| |
              |  ___ ___ ___   ___  |
              | | 7 | 8 | 9 | | + | |
              | |___|___|___| |___| |
              | | 4 | 5 | 6 | | - | |
              | |___|___|___| |___| |
              | | 1 | 2 | 3 | | x | |
              | |___|___|___| |___| |
              | | . | 0 | = | | / | |
              | |___|___|___| |___| |
              |_____________________|`);

let NumOne = await inquirer.prompt([
  {
    name: "numberOne",
    type: Number,
    message: "First parameter",
  },
]);
// console.log(chalk.red(NumOne.numberOne));
let NumTwo = await inquirer.prompt([
  {
    name: "numberTwo",
    type: Number,
    message: "Second parameter",
  },
]);
// console.log(chalk.green(NumTwo.numberTwo));
let Operator = await inquirer.prompt([
  {
    name: "OperatorSign",
    type: String,
    message: "Enter this all mathematical symbols + - / x",
  },
]);

console.log(chalk.bgBlueBright(`Your Answer ${Calculate(Operator.OperatorSign)}`));

function Calculate(Operator) {
  switch (Operator) {
    case "+":
      return parseInt(NumOne.numberOne) + parseInt(NumTwo.numberTwo);
    case "-":
      return NumOne.numberOne - NumTwo.numberTwo;
    case "X":
      return NumOne.numberOne * NumTwo.numberTwo;
    case "*":
      return NumOne.numberOne * NumTwo.numberTwo;
    case "/":
      return chalk.blue(NumOne.numberOne / NumTwo.numberTwo);
  }
}
//# sourceMappingURL=app.js.map
