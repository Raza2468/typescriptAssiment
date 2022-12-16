#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';

let NumOne = await inquirer.prompt([{
    name: "numberOne",
    type: Number,
    message: "First parameter"
}])

// console.log(chalk.red(NumOne.numberOne));

let NumTwo = await inquirer.prompt([{
    name: "numberTwo",
    type: Number,
    message: "Second parameter"
}])

// console.log(chalk.green(NumTwo.numberTwo));


let Operator = await inquirer.prompt([{
    name: "OperatorSign",
    type: String,
    message: "Enter this all mathematical symbols + - / x"
}])






console.log(Calculate(Operator.OperatorSign))

function Calculate(Operator: String) {

    switch (Operator) {
        case "+":
            return  parseInt(NumOne.numberOne) +parseInt(NumTwo.numberTwo);
        case "-":
            return NumOne.numberOne - NumTwo.numberTwo;
        case "X":
            return NumOne.numberOne * NumTwo.numberTwo;
        case "*":
            return  NumOne.numberOne * NumTwo.numberTwo;
        case "/":
            return  chalk.blue(NumOne.numberOne / NumTwo.numberTwo);
    }
}

