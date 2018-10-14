'use strict';

let daysInMonth = 30,
    maxSymbols = 50,
    lowDailyBudget = 10,
    midDailyBudget = 50,
    highDailyBudget = 100,
    money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income : [],
        savings : false
};

let i = 0;

for (i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt('Во сколько обойдется?', '');
    
    if ( (typeof(a)) === "string" && (typeof(a)) != null && a != ''
         && a.length < maxSymbols && Number.isNaN(b) != true 
         && (typeof(b)) === "number" && (typeof(b)) != null && b != '') {
            console.log("done");
            appData.expenses[a] = b;
    } else {

    }
};

while (i < 2) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt('Во сколько обойдется?', '');
    
    if ( (typeof(a)) === "string" && (typeof(a)) != null && a != ''
    && a.length < maxSymbols && Number.isNaN(b) != true 
    && (typeof(b)) === "number" && (typeof(b)) != null && b != '') {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("error");
    }
    i++
}

do {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt('Во сколько обойдется?', '');
    
    if ( (typeof(a)) === "string" && (typeof(a)) != null && a != ''
    && a.length < maxSymbols && Number.isNaN(b) != true 
    && (typeof(b)) === "number" && (typeof(b)) != null && b != '') {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("done");
    }
    i++
} while (i < 2);


console.log(appData);

appData.moneyPerDay = appData.budget / 30;
alert("Your daily budget is: " + appData.moneyPerDay);

if (appData.moneyPerDay < lowDailyBudget) {
    console.log("Minimum level of wealth");
} else if (appData.moneyPerDay > lowDailyBudget && appData.moneyPerDay < highDailyBudget) {
    console.log("Average level of wealth");
} else if (appData.moneyPerDay > highDailyBudget) {
    console.log("High level of wealth");
} else {
    console.log("ERROR!");
}

// let arr = [];
// for (var i = 2; i <= 8; i++) {
//     for (var j = 2; j < i; j++) {
//         console.log(i, j);
//     }
//     arr.push(i)
// }
// console.log(arr);
// let str = document.getElementById("demo");
// str.innerHTML = arr;

function primeNum(start, end) {
    for (start; start <= end; start++) {
        for (let j = 2; j < start; j++) {
            console.log(start, j);
        }
    }
}
primeNum(2, 10);
