import inquirer from "inquirer";
let loop = true;
while (loop) {
    let list = await inquirer.prompt([
        {
            type: "input",
            name: "WordCounter",
            message: "what do you want to Word Counter?"
        }
    ]);
    let { WordCounter, } = list;
    if (WordCounter) {
        let words = WordCounter.split(' ');
        console.log(`Your sentence is ${words.length}`);
        let regex = new RegExp(/\w+/g);
        let temp = WordCounter.split(regex);
        console.log(temp.length);
        console.log(temp);
        // const wordslength = WordCounter.split(' ');
        // console.log(`Your sentence is length ${wordslength.length}`);
    }
    else {
        console.log("Kindly dd valid input");
    }
}
//# sourceMappingURL=app.js.map