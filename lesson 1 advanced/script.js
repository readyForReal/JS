'use strict';

let num = "33721";

let arr = num.split("");

console.log(arr);

let i,
    summ = 1;
for (i = 0; i < arr.length; i++) { 
    summ = summ * parseInt(arr[i]);
}

summ = summ  ** 3;
summ = summ.toString();

alert(summ.slice(0, 3));
