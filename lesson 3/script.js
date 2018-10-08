'use strict';

//                          Variable's

let money, 
    time,
    daysInMonth = 30,
    maxSymbols = 50,
    lowDailyBudget = 10,
    midDailyBudget = 50,
    highDailyBudget = 100,
    askBudget ="What is your monthly budget ?",
    askTime = "Input date in YYYY-MM-DD format",
    askExpences = 'Input your Expence',
    askExpencesCost = 'What is the cost of that expence',
    askSavings = "What are your monthly saving's",
    askSavingsPercent = "What is your saving's percent :",
    strDailyBudget = "Your daily budget is: ",
    strLowWealth = "Minimum level of wealth",
    strMidWealth = "Average level of wealth",
    strHighWealth = "High level of wealth",
    strError = "E R R O R !",
    strMonthlyDepositIncome = "Your monthly deposit income is : ";

//                          Budget function

function start() {
    money = +prompt(askBudget),
    time = prompt(askTime);

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt(askBudget, "");
    }
}
start();

//                          Main Object

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings : true
};

//                          Expences function 

function chooseExpences() {      
    for (let i = 0; i < 2; i++) {
        let a = prompt(askExpences, ''),
            b = +prompt(askExpencesCost, '');

        if ( (typeof(a)) === "string" && (typeof(a)) != null && a != ''
        && a.length < maxSymbols && Number.isNaN(b) != true 
        && (typeof(b)) === "number" && (typeof(b)) != null && b != '') {
            appData.expenses[a] = b;
        } else {
            i--;
        }
    };
}
chooseExpences();

//                          Daily budget

appData.moneyPerDay = appData.budget / 30;
alert(strDailyBudget + appData.moneyPerDay);

if (appData.moneyPerDay < lowDailyBudget) {
    console.log(strLowWealth);
} else if (appData.moneyPerDay > lowDailyBudget && appData.moneyPerDay < highDailyBudget) {
    console.log(strMidWealth);
} else if (appData.moneyPerDay > highDailyBudget) {
    console.log(strHighWealth);
} else {
    console.log(strError);
}

//                          Savings function

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt(askSavings),
            percent = +prompt(askSavingsPercent);

        appData.monthlyIncome = save/100/12*percent;
        alert(strMonthlyDepositIncome + appData.monthlyIncome);
    }
}
checkSavings();

//                          Place holder

console.log(appData);