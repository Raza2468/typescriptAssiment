import chalk from "chalk";
import inquirer from "inquirer";



let loop: boolean = true;

while (loop) {

    let list: { WordCounter: string, } = await inquirer.prompt([
        {
            type: "input",
            name: "WordCounter",
            message: "what do you want to Word Counter?"
        }
    ])


    let { WordCounter, } = list;


    if (WordCounter) {

        let words = WordCounter.split(' ');
        console.log(`Your sentence is ${words.length}`);
        // let regex = new RegExp(/\w+/g)
        // let temp = WordCounter.split(regex)
        // console.log(temp.length);
        // console.log(temp);

    }
    else {
        console.log("Kindly dd valid input");
    }


}

