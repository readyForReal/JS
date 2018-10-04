'use strict';

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: undefined,
        income : undefined,
        savings : true
}

let expenseOne = prompt('Введите обязательную статью расходов в этом месяце');
appData.expenses[expenseOne] = prompt('Во сколько обойдется?');
let expenseTwo = prompt('Введите обязательную статью расходов в этом месяце');
appData.expenses[expenseTwo] = prompt('Во сколько обойдется?');

let daysInMonth = 30,
    dailyBudget = (appData.budget - appData.expenses[expenseOne] - appData.expenses[expenseTwo]) / daysInMonth;

alert("Your daily budget is: " + dailyBudget);


