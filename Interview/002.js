function getTheSpecifiedValue(input) {
    var count = 0;
    return getCountValue(input, count);
}

function getCountValue(input, count) {
    if (input.length < 4) {
        var leadZeros = 4 - input.length;
        for (var a = 0; a < leadZeros; a++) {
            input = '0' + input
        }
    }
    var ascNumber = parseInt(input.split("").sort((a, b) => a - b).join(""));
    var desNumber = parseInt(input.split("").sort((a, b) => b - a).join(""));
    var newNumber = desNumber - ascNumber;
    if (newNumber === 6174) {
        count++;
        return count;
    }
    else {
        count++;
        return getCountValue((newNumber).toString(), count);
    }
}

var output = getTheSpecifiedValue("2111")
console.log(output)