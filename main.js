// Create a function that can take a start point, end point, and skip amount, to print all numbers in the range.
// Works for negative numbers.

function printRange(start, end, skip) {
    for (var i = start; i < end; i += skip) {
        console.log(i);
    }
}

printRange(2, 10, 2);


// If the user doesn't pass a skip amount, make it default to 1 (printRange(4, 8); would print 4, 5, 6, 7)
function printRange(start, end, skip) {
    var skip = 1; // when the user doesn't pass the skip amount
    for (var i = start; i < end; i += skip) {
        console.log(i);
    }
}

printRange(2, 10, 2);
