'use strict';

//                                      2.1

let week = [ 
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" 
    ],
    today = "Friday",
    parent = document.getElementById("demo");

for (let i = 0; i < week.length; i++) {
    let child = document.createElement("p");

    if ( week[i] === today) {
        child.style.fontStyle = 'italic';
    }
    if ( week[i] === "Saturday" || week[i] === "Sunday") {
        child.style.fontWeight = 'bold';
    }

    child.innerHTML = week[i];
    parent.appendChild(child);
}

//                                      2.2

let arr = [
    "123", "234", "345", "456", "567", "678", "789" 
];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith("3") || arr[i].startsWith("7")) {
        console.log(arr[i]);
    }
}
