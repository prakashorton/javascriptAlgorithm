var num1 = 0;
var num2 = 0;
function FindValidString(input) {
    var count = 0;
    var substring = "";
    var numberPairs = [];
    for (var i = 0; i < input.length; i++) {
        if (/\d/.test(input[i])) {
            if (count === 1) {
                num2 = input[i];
                substring += input[i];
                if (/\d[^0-9]*[?]{3}[^0-9]*\d/.test(substring)) {
                    numberPairs.push(substring);
                }
                substring = "";
                count = 0;
            }
            count++;
            num1 = input[i];
        }
        if (count > 0) {
            substring += input[i];
        }
    }
    var pairCount = 0;
    for (var a of numberPairs) {
        if (Number(a[0]) + Number(a[a.length - 1]) === 10) {
            pairCount++;
        }
    }
    if (pairCount === numberPairs.length) {
        return true;
    }
    return false;
}

console.log(FindValidString("arrb6???4xx?l5?eee5"))



var data = "arrb6???4xx???bl6????eee5";

function testValidString(data) {
    var tempArr = data.split("");
    var startInd = 0;
    var endInd = 0;
    var subStr = "";
    var res = false;

    for (var i = 0; i < tempArr.length; i++) {
        if (!isNaN(Number(tempArr[i]))) {
            // if(startInd && endInd){
            if (startInd) {
                endInd = i;
                subStr = data.substring(startInd, endInd + 1);
                startInd = endInd;
                endInd = 0;
                res = findvalidStr(subStr);
            }

            else
                startInd = i;
            //   }
        }
    }
    return res;
}

function findvalidStr(a) {
    var sum = 0;
    var count = 0;
    if (parseInt(a[0]) + parseInt(a[a.length - 1]) != 10) {
        console.log(parseInt(a[0]) + parseInt(a[a.length - 1]));
        return false;
    }
    for (let b = 0; b < a.length; b++) {
        if (a[b] === "?") {
            count += 1;
        }
    }
    if (count >= 3) {
        return true;
    }
    else
        return false;
}
