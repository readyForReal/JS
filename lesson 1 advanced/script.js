'use strict';

<<<<<<< HEAD
let num = "33721",
    arr = num.split(""),
    sum = 1;

arr.forEach(function(item, i, arr) {
    sum = sum * parseInt(arr[i]);
    return sum;
});

sum = sum  ** 3;

alert(sum.toString().slice(0, 3));
=======
let num = "33721";
let arr = num.split("");

let i,
    summ = 1;
for (i = 0; i < arr.length; i++) { 
    summ = summ * parseInt(arr[i]);
}

summ = summ  ** 3;
summ = summ.toString();

alert(summ.slice(0, 3));
>>>>>>> b7da6bd2eb9f0ccacd0ef09068c22bd197a9dcb0
