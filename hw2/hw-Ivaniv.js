//task 1
var array = [12, 34, 23, 56];

function randomElement(arr) {
    var randomCount = Math.floor(Math.random() * (arr.length - 0 + 1)) + 0;
    var result = [];
    for (var i = 0; i <= randomCount; i++) {
        result.push(arr[Math.floor(Math.random() * randomCount)]);
    }
    return result;
}
console.warn(randomElement(array));

//task 2
var arr = [12, 34, 23, 56];

function sumArrElements(arr) {
    return arr.reduce(function (base, curent) {
        return base + curent;
    });
}
console.warn(sumArrElements(arr));

//task 3
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



//task 5

function fibonachi(n) {
    if (n <= 2) return 1;
    var x = 1;
    var y = 1;
    var ans = 0;
    for (var i = 2; i < n; i++) {
        ans = x + y;
        x = y;
        y = ans;
    }
    return ans;
}

console.warn(fibonachi(10));

function func(n) {
    return n <= 1 ? n : func(n - 1) + func(n - 2);
}

console.warn(func(10));

//task5
let car = "audi";
let bike = "cannondale";

function log () {
  let bike = "specialized";
  car = "jeep";
  
  function inner () {
    let plane = "boeing";
    console.log(car); //jeep
    console.log(bike); // specialized
    console.log(plane); // boeing
  }
  console.log(inner); //function
  return inner; 
}

console.log(car); //audi
console.log(bike); //cannondale

var logger = log();
logger();

console.log(car); //audi
console.log(bike); //cannondale
inner();