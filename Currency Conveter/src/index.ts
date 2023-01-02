import inquirer from "inquirer";
import chalk from 'chalk';


let runStatment: boolean = true


while (runStatment) {

    let currency: { EnterAmount: number, currencyArr: string, convertCurrencyArr: string } = await inquirer.prompt([
        {
            type: "list",
            name: "currencyArr",
            choices: ["PKR", "USD", "EURO"],
            message: "Select the current Convert Currency",
        },
        {
            type: "input",
            name: "EnterAmount",
            message: "",
        },
        {
            type: "list",
            name: "convertCurrencyArr",
            choices: ["PKR", "USD", "EURO"],
            message: "Select the Convert Currency",
        },
    ])
    let { currencyArr, EnterAmount, convertCurrencyArr } = currency

    if (EnterAmount) {


        switch (currencyArr) {
            case "PKR" || "USD": console.log("PKR Convert to USD", EnterAmount * 0.0044);
                break;
            case "PKR" || "EURO": console.log("PKR Convert to EURO", EnterAmount * 241);
                break;
            case "USD" || "PKR": console.log("USD Convert to PKR", EnterAmount * 226);
                break;
            case "USD" || "EURO": console.log("USD Convert to EURO", EnterAmount * 241);
                break;
            case "EURO" || "PKR": console.log("USD Convert to PKR", EnterAmount * 0.0044);
                break;
            case "EURO" || "USD": console.log("USD Convert to PKR", EnterAmount * 226);
                break;

            default: console.log("Please inter");
                break;
        }

        let reltime: { reltimeConform: boolean } = await inquirer.prompt([
            {
                type: "confirm",
                name: "reltimeConform",
                message: "agin use in convert Currency",
            }])
        let { reltimeConform } = reltime;
        runStatment = reltimeConform


    } else {
        console.log("Please inter");
    }

}