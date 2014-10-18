$(document).ready(function () {
    var x = prompt('choose a number');
    FizzBuzz(x);
});

function FizzBuzz(number) {

    var toSay;
    number = parseInt(number);

    if (isNaN(number))
    {
        alert('Please enter a proper number');
        location.reload();
        return;
    }
    for (var x = 1; x <= number; x++) {
        toSay = "";
        if (x % 5 === 0 && x % 3 === 0) {
            toSay = "fizzbuzz"
        }
        else if (x % 5 === 0) {
            toSay = "buzz"
        }
        else if (x % 3 === 0) {
            toSay = "fizz"
        }
        else {
            toSay = x;
        }

        $('#fizzbuzz').append("" + toSay + "<br />");
    }
}