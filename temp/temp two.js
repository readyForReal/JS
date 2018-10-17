let arr = ['a', '', 'b'],
    counter = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] != '') {
        counter++;
        console.log('the ' + i + ' item of the array is ' + arr[i] + " and counter is now " + counter);
        if (counter == arr.length) {
            console.log("SUCCESS !");
            break;
        }
    } else {
        console.log('the ' + i + ' item of the array is empty');
    }
}

// could wrap this in a while loop so it runs until all inputs have atleast one char

// make a counter
// cycle threw html collection
// add input listener's to every element
// inside them check if 1st condition is met
// and check if input field not empty on this one, add to counter
// and check if counter = arr.length, if it is, enable button
