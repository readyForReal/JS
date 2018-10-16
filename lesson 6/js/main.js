'use strict';

//                               Variable's

//                               Number's

let money, 
    time,
    daysInMonth = 30,
    maxSymbols = 50,
    lowDailyBudget = 10,
    highDailyBudget = 100,

//                               String's

    askBudget ="What is your monthly budget ?",
    askTime = "Input date in YYYY-MM-DD format",
    strLowWealth = "Minimum level of wealth",
    strMidWealth = "Average level of wealth",
    strHighWealth = "High level of wealth",
    err = "E R R O R !",
    errStr = "Input a string",
    errNum = "Input a number",

//                               Inputs's

    expencesItem = document.getElementsByClassName('expenses-item'),
    optExpencesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector(".choose-income"),
    sumValue = document.querySelector(".choose-sum"),
    percentValue = document.querySelector(".choose-percent"),

//                               Output's

    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expencesValue = document.querySelector('.expenses-value'),
    optExpencesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthlySavingsValue = document.querySelector('.monthsavings-value'),
    yearlySavingsValue = document.querySelector('.yearsavings-value'),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value"),

//                               Button's

    expencesBtn = document.getElementsByTagName('BUTTON')[0],
    optExpencesBtn = document.getElementsByTagName('BUTTON')[1],
    countBtn = document.getElementsByTagName('BUTTON')[2],
    startBtn = document.getElementById("start"),

//                               Checkboxe's

    checkSavings = document.querySelector(".checksavings");

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


//                          Budget and Time

startBtn.addEventListener('click', function() {
    money = +prompt(askBudget);

    while (isNum(money, errNum)) {
        money = +prompt(askBudget, "");
    }

    time = prompt(askTime);

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

//                          Expences 

expencesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expencesItem.length; i++) {
        let a = expencesItem[i].value,
            b = expencesItem[++i].value;
        
        if ((typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '') {
                appData.expenses[a] = b;
                sum += +b;
        } else {
            i = i - 1
        }
    }
    expencesValue.textContent = sum;
});

//                          Optional Expences

optExpencesBtn.addEventListener('click', function() {
    for (let i = 0; i < optExpencesItem.length; i++) {
        let opt = optExpencesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optExpencesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

//                         Daily budget

countBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / daysInMonth).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay <= lowDailyBudget) {
            levelValue.textContent = strLowWealth;
        } else if (appData.moneyPerDay > lowDailyBudget && appData.moneyPerDay < highDailyBudget) {
            levelValue.textContent = strMidWealth;
        } else if (appData.moneyPerDay >= highDailyBudget) {
            levelValue.textContent = strHighWealth;
        } else {
            levelValue.textContent = err;
        } 
    } else {
        dayBudgetValue.textContent = err;
    }
});

//                          Income

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

//                          Saving's

checkSavings.addEventListener('click',function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input',function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appData.monthlyIncome = sum/100/12*percent;
        appData.yearlyIncome = sum/100*percent;

        monthlySavingsValue.textContent = appData.monthlyIncome.toFixed(1);
        yearlySavingsValue.textContent = appData.yearlyIncome.toFixed(1);
    }
});

percentValue.addEventListener('input',function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appData.monthlyIncome = sum/100/12*percent;
        appData.yearlyIncome = sum/100*percent;

        monthlySavingsValue.textContent = appData.monthlyIncome.toFixed(1);
        yearlySavingsValue.textContent = appData.yearlyIncome.toFixed(1);
    }
});

//                          Main Object

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings : false
    
};





