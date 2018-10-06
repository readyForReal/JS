'use strict';

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

//                                      Using for loop

for (let i = 0; i < 3; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt('Во сколько обойдется?', '');

    console.log("going in i is : " + i);

    if ( (typeof(a)) === "string" && (typeof(a)) != null && a != ''
    && a.length < maxSymbols && Number.isNaN(b) != true 
    && (typeof(b)) === "number" && (typeof(b)) != null && b != '') {
        appData.expenses[a] = b;
        i++;
        console.log("SUCCESS: appData has a new key : value !");
    } else {
        i--;
        console.log("ERROR: bad user input");
    }

    console.log("going out i is : " + i);
};

//                                      Using while loop

// let i = 0;

// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдется?', '');

//     console.log("going in i is : " + i);

//     if ( (typeof(a)) === "string" && (typeof(a)) != null && a != ''
//     && a.length < maxSymbols && Number.isNaN(b) != true 
//     && (typeof(b)) === "number" && (typeof(b)) != null && b != '') {
//         appData.expenses[a] = b;
//         i++;
//         console.log("SUCCESS: appData has a new key : value !");
//     } else {
//         console.log("ERROR: bad user input");
//     }

//     console.log("going out i is : " + i);
// };

//                                      Using do while loop

// let i = 0;

// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдется?', '');

//     console.log("going in i is : " + i);

//     if ( (typeof(a)) === "string" && (typeof(a)) != null && a != ''
//     && a.length < maxSymbols && Number.isNaN(b) != true 
//     && (typeof(b)) === "number" && (typeof(b)) != null && b != '') {
//         appData.expenses[a] = b;
//         i++;
//         console.log("SUCCESS: appData has a new key : value !");
//     } else {
//         console.log("ERROR: bad user input");
//     }

//     console.log("going out i is : " + i);
// } while (i < 2);

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
    console.log("ERROR!")
}