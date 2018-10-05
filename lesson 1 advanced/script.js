'use strict';

let num = "33721",
    arr = num.split(""),
    sum = 1;

arr.forEach(function(item, i, arr) {
    sum = sum * parseInt(arr[i]);
    return sum;
});

sum = sum  ** 3;

alert(sum.toString().slice(0, 3));
