#!/usr/bin/env node
import inquirer from "inquirer";
let accounts = [];
accounts.push({
  userName: "rahim",
  password: 1234,
  customerName: "rahim Malik",
  customerBalance: 5000,
  pinRetries: 0,
  accountBlocked: false,
});
accounts.push({
  userName: "tahseen",
  password: 1234,
  customerName: "tahseen Malik",
  customerBalance: 100000,
  pinRetries: 0,
  accountBlocked: false,
});
accounts.push({
  userName: "Humza",
  password: 1234,
  customerName: "Syed Humza",
  customerBalance: 100000,
  pinRetries: 0,
  accountBlocked: true,
});
while (true) {
  let isValididated = false;
  console.log("welcome to basic atm");
  let userNameInput = await inquirer.prompt([
    {
      name: "inputUser",
      type: "string",
      message: "Input User Name:",
    },
  ]);
  let userPasswordInput = await inquirer.prompt([
    {
      name: "inputPassword",
      type: "password",
      message: "Input User Pin:",
    },
  ]);
  let found = accounts.find(
    (element) =>
      element.userName == userNameInput.inputUser &&
      element.password == userPasswordInput.inputPassword
  );
  console.log(found);
  if (found) {
    console.log("Undifine Error");
    if (found.accountBlocked == true) {
      console.log(
        `Dear ${found.customerName},Your account is blocked, Please contact customer support.`
      );
    } else {
      console.log(userNameInput.inputUser, userPasswordInput.inputPassword);
      found.pinRetries = 0;
      console.log("Welcome", found.customerName);
      let opr = await inquirer.prompt([
        {
          name: "operation",
          type: "list",
          choices: ["Cash Deposit", "Cash Withdrawal", "View Balance"],
          message: "Select your desired operation",
        },
      ]);
      switch (opr.operation) {
        case "Cash Deposit": {
          console.log("Your Current Balance is ", found.customerBalance);
          let amount = await inquirer.prompt([
            {
              name: "deposit",
              type: "number",
              message: "Deposit Amount:",
            },
          ]);
          if (amount.deposit >= 0) {
            found.customerBalance += amount.deposit;
            console.log(
              "Your Current Balance after Deposit is ",
              found.customerBalance
            );
          } else {
            console.log("Deposit Amount cannot be Zero or Negative");
          }
          break;
        }
        case "Cash Withdrawal": {
          console.log("Your Current Balance is ", found.customerBalance);
          let amount = await inquirer.prompt([
            {
              name: "witdrawal",
              type: "number",
              message: "Deposit Amount:",
            },
          ]);
          if (amount.witdrawal >= 0) {
            if (found.customerBalance >= amount.witdrawal) {
              found.customerBalance -= amount.witdrawal;
              console.log(
                "Your Current Balance after Withdrawal is ",
                found.customerBalance
              );
            } else {
              console.log("Amount is mot valid ", found.customerBalance);
            }
          } else {
            console.log("Withdrawal Amount cannot be Zero or Negative");
          }
          break;
        }
        case "View Balance": {
          console.log(
            `Dear ${found.customerName}: Your balance is ${found.customerBalance}`
          );
          break;
        }
      }
    }
  } else {
    found = accounts.find(
      (element) => element.userName == userNameInput.inputUser
    );
    if (found) {
      found.pinRetries += 1;
      if (found.pinRetries > 3) {
        found.accountBlocked = true;
        console.log("3 failed pin retries, account is blocked. ");
      }
    } else {
      console.log(`Cannot find user ${userNameInput.inputUser}`);
    }
  }
}
//# sourceMappingURL=index.js.map
