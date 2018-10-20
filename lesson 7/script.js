'use strict';

setInterval(function() {
    let time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();

        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        
        document.getElementById("out").innerHTML = hours + ":" 
        + minutes + ":" + seconds;
}, 1000);



// lol :)

// arr = [ hours, minutes, seconds ];

        // for (let i = 0; i < arr.length; i++) {
        //     arr[i] = arr[i].toString();
        //     if ( arr[i].length == 1) {
        //         arr[i] = '0' + arr[i];
        //     }
        // }
