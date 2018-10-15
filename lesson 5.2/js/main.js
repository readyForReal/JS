//                               1.1

let start = document.getElementById("start");

//                               1.2

// let value = document.querySelector(".result-table").children,
//     resultsArr = [];

// for(let i = 0; i < value.length; i++ ) {
//     if ((i%2) != 0) {
//         resultsArr.push(value[i]);
//     }
// }

let budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expencesValue = document.querySelector('.expenses-value'),
    optionalExpencesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearsSavingsValue = document.querySelector('.yearsavings-value');

//                               1.3
// Получить поля(input) c обязательными расходами 
// через класс. (class=”expenses-item”)

let expences = document.getElementsByClassName('expenses-item');

//                               1.4

let expencesBtn = document.getElementsByTagName('BUTTON')[0],
    opteExpencesBtn = document.getElementsByTagName('BUTTON')[1],
    countBudgetBtn = document.getElementsByTagName('BUTTON')[2],
    startBtn = document.getElementsByTagName('BUTTON')[3];

//                               1.5
// Получить поля для ввода необязательных расходов 
// (optionalexpenses-item) при помощи querySelectorAll

let optExpences = document.querySelectorAll('.optionalexpenses-item');

//                               1.5
// Получить оставшиеся поля через querySelector 
// (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

let chooseIncome = document.querySelector(".choose-income"),
    checkSavings = document.querySelector(".checksavings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    year = document.querySelector(".year"),
    month = document.querySelector(".month"),
    day = document.querySelector(".day");




