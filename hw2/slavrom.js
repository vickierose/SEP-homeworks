// 1

randomNumbers = (arr, n) => {
    let result = [];
    if (n > arr.length) {
        return 'Taken more elements than available !';
    } else {
        while (n--) {
            let x = arr[Math.floor(Math.random() * arr.length)];
            result.push(x);
        }
    }
    return `${result.length} random elements from array: ${result}`;
}

let numbers = [12, 34, 23, 56];
console.log(randomNumbers(numbers, 3));

// or 

randomNumbers2 = (arr) => {
    let result = [];
    let n = Math.floor(Math.random() * arr.length);
    while (n--) {
        let x = arr[Math.floor(Math.random() * arr.length)];
        result.push(x);
    }
    return `${result.length} random elements from array: ${result}`;
}

console.log(randomNumbers2(numbers));

// 2

sumOfElements = (arr) => {
    let result = arr.reduce((sum, current) => sum + current);
    return `Sum of the values of the above array: ${result}`;
}

console.log(sumOfElements(numbers));

// 3

splitString = (str) => {
    let string = [];
    let number = [];
    let result = {
        Strings: string, 
        Numbers: number
    };
    let splited = str.split(/(\d)/).toString().replace(/[, ]+/g, " ").trim().split(' ').sort();
    splited.forEach((i) => {
        +i ? number.push(+i) : string.push(i);
    });
    return result;
}

console.log(splitString('Red, Green, Blue, White1, 3, 4, 5, 7'));

// 4

getFactorial = (num) => {
    let result = num;
    if (num <= 0) {
        return 'Only positive number !';
    } else {
        while (num > 1) {
            num--;
            result *= num;
        };
    }
    return result;
}
console.log(getFactorial(5));

// 5

getFibonacci = (num) => {
    let result = [];
    if (num <= 0) {
        return 'Only positive number !';
    } else {
        while (num >= 1) {
            result.push(num);
            num--;
        };
    }
    return result.reduce((sum, current) => sum + current);
}

console.log(getFibonacci(10));

// 6

let car = "audi";
let bike = "cannondale";

function log () {
    let bike = "specialized";
    car = "jeep";

    function inner () {
        let plane = "boeing";
        console.log(car);
        console.log(bike);
        console.log(plane);
    }
    console.log(inner);
    return inner;
}

console.log(car); // audi
console.log(bike); // cannondale

var logger = log();
logger(); // inner () {...} / jeep / specialized / boeing

console.log(car); // jeep
console.log(bike); //cannondale
inner(); // error