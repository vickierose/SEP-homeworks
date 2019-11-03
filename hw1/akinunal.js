// 1. Write a Javascript program to create a new string which is n copies of a given string where n is a non-negative integer.

console.log('------ Question 1: ------')

let stringCreator = (str, num) => {
    let strCopy = str;

    if (num < 0) {
        console.log('Error: Number is negative!');
        return
    }
    return strCopy.repeat(num)
}

const repeatingString = stringCreator('a', 5)
console.log(repeatingString)

// 2. Write a Javascript program to check if a string starts with "if".

console.log('------ Question 2: ------')

const strng = 'If i could fly...';

let checkIf = (str, x = 'if') => {
    let strLower = str.toLowerCase();
    return strLower.startsWith(x);
}

console.log(`Checking "if", at the start of string: "${strng}" ${checkIf(strng)}`);

// 3. Write a Javascript program to check two non-negative integer values and return true if they have the same last digit

console.log('------ Question 3: ------')

let lastDigitChecker = (num1, num2) => {
    let firstNumLastDigit = num1.toString().split('').pop();
    let secondNumLastDigit = num2.toString().split('').pop();

    if (num1 < 0 || num2 < 0) {
        return 'Error: Number is negative!'
    }
    return firstNumLastDigit === secondNumLastDigit
}

console.log(lastDigitChecker(1224, 84));

// 4. Write a programm which from inputed 4-digit number (e.g. 5154)

console.log('------ Question 4: ------')

let fourDigitNumberInfo = (num) => {

    let splitNumbers = num.toString().split('');
    let arrayOfNumbers = splitNumbers.map(num => +num); // Unary + Operator OR .map(Number)

    // a) finds a sum of digits in the number (5141 is 5+1+4+1 = 11)
    let sumOfNumbers = arrayOfNumbers.reduce(function (a, b) {
        return a + b
    });

    if (arrayOfNumbers.length > 4) {
        console.log('Error: Number has more than four digits!')
    } else if (arrayOfNumbers.length < 4) {
        console.log('Error: Number has less than four digits!')
    } else {
        console.log(`Four digit number is ${num}, sum of the numbers are: ${sumOfNumbers}`)
    }

    // b) checks whether the number contains the same number twice (digit 1 appears 2 times)

    let arrayOfNumbersSorted = [...arrayOfNumbers].sort()

    for (let i = 0; i < arrayOfNumbersSorted.length; i++) {
        if (arrayOfNumbersSorted[i] === arrayOfNumbersSorted[i + 1]) {
            console.log(`Four digit number ${num} contains digit ${arrayOfNumbersSorted[i]} more than once.`)
        }
    }

    // c) checks whether the sum of first two digits equals the sum of second two digits

    let firstTwoDigits = arrayOfNumbers[0] + arrayOfNumbers[1];
    let secondTwoDigits = arrayOfNumbers[2] + arrayOfNumbers[3];

    if (firstTwoDigits === secondTwoDigits) {
        console.log(`Sums of first two digits: ${firstTwoDigits} and second two digits: ${secondTwoDigits} are equal.`)
    } else {
        console.log(`Sums of first two digits: ${firstTwoDigits} and second two digits: ${secondTwoDigits} are not equal.`)
    }
}

fourDigitNumberInfo(5141);

// 5. What would be the result of next statements:

let statement1 = [1, 2, 3] + {} // "1, 2, 3, [object Object]" -> Array and object converted to string.
let statement2 = 1 + "3" - 2 // 1 is converted to string. "1" + "3" = "13" - 2. "13" converted to number. 13 - 2 = 11.
let statement3 = 1 + ("3" - 2) // "3" is converted to number. 1 + (1) = 2.

let a = 2 // 4 -> First, a = 2
let b = a++ // 2 -> Second, b = 2 because a++ happens after = (a became 3)
let c = ++a // 4 -> Third, c = 4 because ++a happens before = (a became 4)

// 6. get type of nn in a lower case format:

const nn = new Promise((res, rej) => {
    setTimeout(() => res("done"), 1000);
})

function getType(arg) {
    console.log(toString.call(arg).toLowerCase())
}

getType(nn)
getType('abc')