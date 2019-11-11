//task1

function copyString(string, count) {
    return string.repeat(count);
}

console.warn(copyString('a', 5));


//task2

function searchSubString(subString) {
    if (!subString) return;
    return subString.toLowerCase().search(/^if/) >= 0 ? true : false;
}

console.warn(searchSubString('if gjgjhvhjgv'));


//task3
function checkLastDigits(first, second) {   
    return first.toString().split('').pop() == second.toString().split('').pop();
}

console.warn(checkLastDigits(12, 32541));

//task4
function summAllArayElement(array) {
    if (!array || array.length == 0) return;
    // summ
    return array.reduce(function (base, curent) {
        return base + curent;
    });
}

function basePartTaskFour(number) {
    var temp = number.toString().split('').map(function(x) {
        return parseInt(x);
    });

    return { temp: temp, firstPart: searchSameNumbers(temp), seconsPart: particialSumFromAray(temp) }
}

console.warn(summAllArayElement(basePartTaskFour(1656464584).temp));

console.warn(basePartTaskFour(5656));


var validateMessage = '';
function validate(arrayNumbers) {
    if (arrayNumbers == null) return null; 
    if (arrayNumbers.length > 4) {
        validateMessage = 'Ви ввели більше 4 чисел';
        return false;
    }
    if (arrayNumbers.length < 4) {
        validateMessage = 'Введіть чотирьохзначне число';
        return false;
    }
    return true;
}

function searchSameNumbers(arrayNumbers) {
    if (!validate(arrayNumbers)) return validateMessage;
    var repeatNumber = arrayNumbers.filter((x, index, arr) => arr.indexOf(x) === index);
    return repeatNumber != '' ? `Повторюється число ${repeatNumber}` : `немає повторень`;
}

function particialSumFromAray(array) {
    if (!validate(array)) return validateMessage;
    return array.slice(0, array.length / 2).reduce((base, curent) => base + curent) == 
            array.slice(array.length / 2, array.length).reduce((base, curent) => base + curent);
}

//task 5 
let exp = [1, 2, 3] + {}; // "1,2,3[object Object]"

let exp1 = 1 + '3' - 2; // 11

let exp2 = 1 + ('3' - 2); // 2

let a = 2; // 4
let b = a++; // 2
let c = ++a; // 4

//task 6
function getTypeToLowerCase() {

    const nn = new Promise((res, rej) => {
        setTimeout(() => res("done"), 1000);
    });

    return nn;
}

console.warn(Object.prototype.toString.call(getTypeToLowerCase()).toLowerCase())

getTypeToLowerCase();