'use strict';

//                          Variable's

let money, 
    time,
    daysInMonth = 30,
    maxSymbols = 50,
    lowDailyBudget = 10,
    highDailyBudget = 100,
    askBudget ="What is your monthly budget ?",
    askTime = "Input date in YYYY-MM-DD format",
    askExpences = 'Input your expence',
    askExpencesCost = 'What is the cost of that expence',
    askIncome = "What is your income, input multiple items separated by a comma",
    askAddedIncome = "Maybe something else",
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
// start();

//                          Main Object

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings : false,
    //                          Expences function 
    chooseExpences : function() {
        let a = prompt(askExpences, '');
        while (isStr(a, errStr)) {
            a = prompt(askExpences, '');
        }
        let str = +prompt(askExpencesCost, '');
        while (isNum(str, errNum)) {
            str = +prompt(askExpencesCost, '');
        }
        appData.expenses[a] = str;
    },
    //                          Optional Expences function
    chooseOptExpences : function(i) {
        let a = prompt(askOptExpences, '');
        while (isStr(a, errStr)) {
            a = prompt(askOptExpences, '');
        }
        appData.optionalExpenses[i] = a;
    },
    //                          Income function 
    chooseIncome : function() {
        let str = prompt(askIncome, '');
        while (isStr(str, errStr)) {
         str = prompt(askIncome, '');
        }
        appData.income = str.split(', ');
        
        let strTwo = prompt(askAddedIncome, '');
        while (isStr(strTwo, errStr)) {
            strTwo = prompt(askAddedIncome, '');
        }
        appData.income.push(strTwo);
        appData.income.sort();
        appData.income.unshift('');

        console.log("Способы доп. заработка: ");
        appData.income.forEach(function(item) {
            if (item != '') {
                console.log(item);
            }
        });

        console.log("Наша программа включает в себя данные: ");
        for (let key in appData) {
            console.log(key);
        }
    },
    //                         Daily budget function
    detectDayBudget : function() {
        appData.moneyPerDay = appData.budget / daysInMonth ;
        alert(strDailyBudget + appData.moneyPerDay.toFixed(1));
    },
    //                          Income Level function
    detectLevel : function() {
        if (appData.moneyPerDay <= lowDailyBudget) {
            console.log(strLowWealth);
        } else if (appData.moneyPerDay > lowDailyBudget && appData.moneyPerDay < highDailyBudget) {
            console.log(strMidWealth);
        } else if (appData.moneyPerDay >= highDailyBudget) {
            console.log(strHighWealth);
        } else {
            console.log(err);
        } 
    },
    //                          Savings function
    checkSavings : function() {
        if (appData.savings == true) {
            let save = +prompt(),
                percent = +prompt(askSavingsPercent);
    
            appData.monthlyIncome = save/100/12*percent;
            alert(strMonthlyDepositIncome + appData.monthlyIncome);
        }
    },
    
};
// appData.chooseIncome();
// console.log(appData);