let Time = 30; // Seconds

// Timer
let Example = setInterval(function() {
    console.clear(); // Clear console.
    console.log("It has been " + Time + " seconds.."); // Use variables to respond.
    clearInterval(Example); // Clear timer.
}, 1000 * Time);