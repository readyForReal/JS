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

for (let i = 0; i < 2; i++) {
    let a,
        b;
    while (true) {
        a = prompt('Введите обязательную статью расходов в этом месяце', '');
        if ( (typeof(a)) === "string" && (typeof(a)) != null && a != ''
         && a.length < maxSymbols) {
            break;
        } else {
            alert("ERROR, please input a string, max 50 symbol's", '');
        }
    }
    while (true) {
        b = +prompt('Во сколько обойдется?', '');
        if ( Number.isNaN(b) != true && (typeof(b)) === "number" && (typeof(b)) != null && b != '') {
            break;
        } else {
            alert("ERROR, please input a number", '');
        }
    }
    appData.expenses[a] = b;
};

//                                      Using while loop

// let counter = 1;

// while (true) {
//     let a,
//         b;
//     while (true) {
//         a = prompt('Введите обязательную статью расходов в этом месяце', '');
//         if ( (typeof(a)) === "string" && (typeof(a)) != null && a != ''
//          && a.length < maxSymbols) {
//             break;
//         } else {
//             alert("ERROR, please input a string, max 50 symbol's", '');
//         }
//     }
//     while (true) {
//         b = +prompt('Во сколько обойдется?', '');
//         if ( Number.isNaN(b) != true && (typeof(b)) === "number" && (typeof(b)) != null && b != '') {
//             break;
//         } else {
//             alert("ERROR, please input a number", '');
//         }
//     }

//     appData.expenses[a] = b;

//     if (counter == 2) {
//         break;
//     } else {
//         counter++;
//     }
// };

//                                      Using do while loop

// let counter = 1;

// do {
//     let a,
//         b;
//     while (true) {
//         a = prompt('Введите обязательную статью расходов в этом месяце', '');
//         if ( (typeof(a)) === "string" && (typeof(a)) != null && a != ''
//          && a.length < maxSymbols) {
//             break;
//         } else {
//             alert("ERROR, please input a string, max 50 symbol's", '');
//         }
//     }
//     while (true) {
//         b = +prompt('Во сколько обойдется?', '');
//         if ( Number.isNaN(b) != true && (typeof(b)) === "number" && (typeof(b)) != null && b != '') {
//             break;
//         } else {
//             alert("ERROR, please input a number", '');
//         }
//     }

//     appData.expenses[a] = b;

//     if (counter == 2) {
//         break;
//     } else {
//         counter++;
//     }
// } while (counter < 3);

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




