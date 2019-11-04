




//task 2

var arr = [12, 34, 23, 56];

function sumArrElements(arr) {
    return arr.reduce(function (base, curent) {
        return base + curent;
    });
}

console.warn(sumArrElements(arr));

//task 4
function factorial(x) {
    return x <= 1 ? x : x * factorial(x - 1);
}

console.warn(factorial(5));

function factorialLoop(x) {
    if (x == 1) return x;
    var result = 0;

    for (var i = 0; i <= x; i++) {
        result += x * (x - 1);
    }

    return result;
}

console.warn(factorialLoop(5));

var baseString = "Red, Green, Blue, White1, 3, 4, 5, 7";

function format(string) {
    var temp = string.split(',');

    var numberArrayResult = [];
    var stringArrayResult = [];
    
    temp.forEach(x => {
        var resultString = '';

        x.split('').forEach(c => {
            if (c.match(/\d/) && c != ' ') numberArrayResult.push(c);
            if (c.match(/\D/) && c != ' ') resultString += c;
        });

        if (resultString) {
            stringArrayResult.push(resultString);
        }
    });

    return [numberArrayResult, stringArrayResult];
}



console.warn(format(baseString));
