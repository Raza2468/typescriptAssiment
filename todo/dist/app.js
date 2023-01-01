import inquirer from "inquirer";
let todoData = [];
let loop = true;
while (loop) {
    let list = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "what do you want to add in your Todo?"
        }, {
            type: "confirm",
            name: "addMore",
            message: "do you want to add more TODO ?"
        }
    ]);
    let { todo, addMore } = list;
    loop = addMore;
    if (todo) {
        todoData.push(todo);
    }
    else {
        console.log("Kindly dd valid input");
    }
    if (todoData.length > 0) {
        if (addMore === true) {
        }
        else {
            todoData.forEach((v) => {
                console.log(v);
            });
            let todobolean = true;
            while (todobolean) {
                let listUpdate = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "todoBol",
                        message: "do you want to UPdate more TODO ?"
                    },
                ]);
                let { todoBol } = listUpdate;
                todobolean = todoBol;
                if (todoBol === true) {
                    let listUpdate = await inquirer.prompt([
                        {
                            type: "list",
                            name: "todoUpdate",
                            choices: todoData,
                            message: "select"
                        },
                        {
                            type: "inpute",
                            name: "todoReplace",
                            message: "inter your update todo "
                        }
                    ]);
                    let { todoUpdate, todoReplace } = listUpdate;
                    let todoindex = todoData.indexOf(todoUpdate);
                    let Replace = todoData[todoindex] = todoReplace;
                    // console.log(Replace, "hu gya");
                    todoData.forEach((v) => {
                        console.log(v);
                    });
                    todobolean = false;
                }
                else {
                    console.log("good by");
                }
            }
        }
    }
    else {
        console.log("no todos found");
    }
}
//# sourceMappingURL=app.js.map