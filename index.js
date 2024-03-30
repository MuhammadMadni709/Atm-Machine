#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 8687;
let pinAnswer = await inquirer.prompt({
    name: "pinNumber",
    type: "number",
    message: "enter your pin",
});
if (pinAnswer.pinNumber === myPin) {
    console.log("Welcome to Your Account");
    let atmMachine = await inquirer.prompt([
        {
            name: "action",
            message: "please choose an option",
            type: "list",
            choices: [
                "balance inquiry",
                "Cash withdraw",
                "fastCash",
                "Pay Your Bills",
                "Change Pin Code",
            ],
        },
    ]);
    if (atmMachine.action === "balance inquiry") {
        console.log(`Your Current balance is: ${myBalance}`);
    }
    else if (atmMachine.action === "Cash withdraw") {
        let withdrawAmount = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "How much money do you want",
        });
        if (withdrawAmount.amount < myBalance) {
            (myBalance -= withdrawAmount.amount),
                console.log(`your remaining balance is : ${myBalance}`);
        }
        else if (withdrawAmount.amount > myBalance) {
            console.log(`insufficient balance!\n your current balance is\t${myBalance}`);
        }
    }
    else if (atmMachine.action === "fastCash") {
        let cashAmount = await inquirer.prompt({
            name: "cash",
            message: "choose your amount",
            type: "list",
            choices: ["500", "1000", "2000", "5000", "10000"],
        });
        // add the selected amount of cash
        myBalance -= cashAmount.cash;
        console.log(`your remaining balance is: ${myBalance}`);
    }
    if (atmMachine.action === "Pay Your Bills") {
        let bill = await inquirer.prompt([
            {
                name: "bills",
                message: "choose your bill",
                type: "list",
                choices: [
                    "electricity Bill",
                    "Water Bill",
                    "Maintenance Bill",
                    "Gas Bill",
                    "Internet Bill",
                ],
            },
        ]);
    }
    else if (atmMachine.bills === "electricity Bill") {
        let withdrawlAmount = await inquirer.prompt({
            name: "bill",
            type: "number",
            message: "Your Electricity bill is 10k",
        });
        myBalance >= withdrawlAmount.bill;
        console.log(`your remaining balance is: ${myBalance}`);
    }
    // else if (pinAnswer.pinNumber !== myPin) {
    //   console.log("incorrect pin! please try again.");
}
