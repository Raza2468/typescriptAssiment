import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import gussingnumbergam from "gussingnumbergam";


let randNum = Math.floor(Math.random() * 10);

const gussingNumberGame = async () => {
    for (let i = 1; i < 10; i++) {

        // console.log(chalk.red((`Chance: ${i}`)));

        let getNumber: { num: Number } = await inquirer.prompt({
            name: "num",
            type: "number",
            message: chalk.underline.bgCyanBright("Guess the Correct Number")
    })

        if (getNumber.num === randNum) {
            chalkAnimation.rainbow("Congratulations Your Got Correct Number");
            break;
        }

        else {

            chalkAnimation.rainbow(`Wrong Answer..! Correct Number is ${randNum}`);
            // gussingNumberGame()
        }

    }
}

export default gussingNumberGame