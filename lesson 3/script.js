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
    askExpences = 'Input your expence',
    askExpencesCost = 'What is the cost of that expence',
    askSavings = "What are your monthly saving's",
    askSavingsPercent = "What is your saving's percent :",
    askOptExpences = "Input optional expence",
    strDailyBudget = "Your daily budget is: ",
    strLowWealth = "Minimum level of wealth",
    strMidWealth = "Average level of wealth",
    strHighWealth = "High level of wealth",
    strMonthlyDepositIncome = "Your monthly deposit income is : ",
    err = "E R R O R !",
    errStr = "Input a string",
    errNum = "Input a number";

//                          Check if number function

function isNum(num, err) {
    if (isNaN(num) || num == "" || num == null) {
        alert(err);
        return true;
    } else {
        return false;
    }
}

//                          Check if string function

function isStr(str, err) {
    if (!isNaN(str) || str == "" || str == null || str.length > maxSymbols) {
        alert(err);
        return true;
    } else {
        return false;
    }
}

//                          Budget function

function start() {
    money = +prompt(askBudget);

    while (isNum(money, errNum)) {
        money = +prompt(askBudget, "");
    }

    // time = prompt(askTime);
}
start();

//                          Main Object

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings : false
};

//                          Expences function 

function chooseExpences() {

    let a = prompt(askExpences, '');
    while (isStr(a, errStr)) {
        a = prompt(askExpences, '');
    }

    let b = +prompt(askExpencesCost, '');
    while (isNum(b, errNum)) {
        b = +prompt(askExpencesCost, '');
    }

    appData.expenses[a] = b;
}
chooseExpences();
chooseExpences();

//                          Optional Expences function 

function chooseOptExpences(i) {
    let a = prompt(askOptExpences, '');

    while (isStr(a, errStr)) {
        a = prompt(askOptExpences, '');
    }

    appData.optionalExpenses[i] = a;
}
chooseOptExpences(1);
chooseOptExpences(2);
chooseOptExpences(3);

//                          Daily budget function

function detectDayBudget() {
    appData.moneyPerDay = appData.budget / daysInMonth ;
    alert(strDailyBudget + appData.moneyPerDay.toFixed(1));
}
detectDayBudget();

//                          Income Level function

function detectLevel() {
    if (appData.moneyPerDay < lowDailyBudget) {
        console.log(strLowWealth);
    } else if (appData.moneyPerDay > lowDailyBudget && appData.moneyPerDay < highDailyBudget) {
        console.log(strMidWealth);
    } else if (appData.moneyPerDay > highDailyBudget) {
        console.log(strHighWealth);
    } else {
        console.log(err);
    }
}
detectLevel();

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