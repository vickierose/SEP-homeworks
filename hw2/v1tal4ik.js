// # Hometask 2

// 1. Write a Javascript program to pick a number of random elements from a given array.

function pickNumberOfArray(arr = [], count = 0) {
  if (Object.getPrototypeOf(arr).constructor.name.toLowerCase() !== 'array') {
    console.error('Error: type of argument "arr" must be Array ');
    return [];
  }
  if (arr.length <= 0) {
    console.error('Error: argument "arr" is empty ');
    return [];
  }
  if (typeof (count) !== 'number' || count <= 0 || count > arr.length || (count % 1) !== 0) {
    console.error('Error: argument "count" is invalid ');
    return [];
  }
  if (arr.length === count) {
    return arr;
  }


  const getRandomIntInclusive = (max) => Math.floor(Math.random() * max) + 1;
  const arrOfRandomNumber = new Set();
  const subArr = [];
  while (arrOfRandomNumber.size < count) {
    arrOfRandomNumber.add(getRandomIntInclusive(arr.length - 1));
  }


  arrOfRandomNumber.forEach((item) => {
    subArr.push(arr[item]);
  });


  return subArr;
}
// const result = pickNumberOfArray([1, 2, 3,4,5], 2);
// console.log(result);

// 2. Write a Javascript program to compute the sum of elements in a given array. Sample output:

function getSumOfArray(arr = []) {
  if (arr === null || arr.length === 0) {
    console.error('Error: argument "arr" is invalid');
    return 0;
  }
  if (Object.getPrototypeOf(arr).constructor.name.toLowerCase() !== 'array') {
    console.error('Error: type of argument "arr" must be Array ');
    return 0;
  }
  function checkIfTypeWrong(item) {
    if (typeof (item) === 'boolean') {
      return false;
    }
    if (typeof (item) === 'number') {
      return false;
    }
    return true;
  }
  if (arr.some(checkIfTypeWrong)) {
    console.error('Error: type of elements "arr" must be number ');
    return 0;
  }

  return arr.reduce((sum, item) => (sum + item), 0);
}

// const result = getSumOfArray([1, 2, 3, -1, 56, 0.5]);
// console.log(result);

// 3. Write a Javascript program to split a delimited string into an array. Sample output:

function splitStringToArray(str = '') {
  const response = {
    message: '',
    arrOfString: [],
    arrOfNumber: [],
  };


  if (typeof (str) !== 'string') {
    response.message = 'Error: argument "str" must be type STRING';
    return response;
  }
  if (!str) {
    response.message = 'Error: argument "str" is invalid';
    return response;
  }

  const arrOfStr = str.split(',');
  const digit = /\d+/g;

  arrOfStr.forEach((item) => {
    if (item === ' ') {
      return response.arrOfString.push(item);
    }
    // If it's just number
    if (!(isNaN(+item))) {
      return response.arrOfNumber.push(+item);
    }
    // If it's string and contains digit
    const arrDigit = item.match(digit);
    if (arrDigit) {
      arrDigit.forEach((el) => response.arrOfNumber.push(+el));
      item = item.replace(digit, '');
    }
    return response.arrOfString.push(item);
  });
  return response;
}

// const result = splitStringToArray('Red, Green, Blue, White1, 3, 4, 5, 7');
// console.log(result);

// 4. write a function which returns a factorial of a given number with loop and recursive function. Sample output:

function getFactorial(value) {
  if (typeof (value) !== 'number' || value <= 0 || isNaN(value) || value % 1 !== 0) {
    console.error('Error: argument value is invalid');
    return 0;
  }

  let sum = value;
  for (let i = value - 1; i > 0; i--) {
    sum *= i;
  }
  return sum;
}

// console.log(getFactorial(5));

function getFactorialRecursive(value) {
  if (typeof (value) !== 'number' || value <= 0 || isNaN(value) || value % 1 !== 0) {
    console.error('Error: argument value is invalid');
    return 0;
  }
  while (value !== 1) {
    return value * getFactorialRecursive(value - 1);
  }
  return 1;
}

// console.log(getFactorialRecursive(6));

// 5. write a function which returns a Fibonacci value for a given number with loop and recursive function. Sample output:

function getFibonacci(value) {
  if (typeof (value) !== 'number' || value <= 0 || isNaN(value) || value % 1 !== 0) {
    console.error('Error: argument value is invalid');
    return 0;
  }
  const holderNumber = {
    1: 1,
    2: 1,
  };

  for (let i = 3; i <= value; i++) {
    holderNumber[i] = holderNumber[i - 1] + holderNumber[i - 2];
  }

  return holderNumber[value - 1] + holderNumber[value - 2];
}

// console.log(getFibonacci(5));


function getFibonacciRecursive(value) {
  if (typeof (value) !== 'number' || value <= 0 || isNaN(value) || value % 1 !== 0) {
    console.error('Error: argument value is invalid', value);
    return 0;
  }
  while (value > 2) {
    return getFibonacciRecursive(value - 1) + getFibonacciRecursive(value - 2);
  }
  return 1;
}

// console.log(getFibonacciRecursive(10));

// 6. think and write the results of all console logs (without running code in console please :smiling_imp: ):

// let car = "audi";
// let bike = "cannondale";

// function log () {
//   let bike = "specialized";
//   car = "jeep";

//   function inner () {
//     let plane = "boeing";
//     console.log(car);    || 4. "jeep"
//     console.log(bike);   || 5. "specialized"
//     console.log(plane);  || 6. "boeing"
//   }
//   console.log(inner); ||3. Native Code inner ..
//   return inner;
// }

// console.log(car);  || 1."audi"
// console.log(bike); || 2."cannondale"

// var logger = log();
// logger();

// console.log(car);  || 7."jeep"
// console.log(bike); || 8."cannondale"
// inner();           || 9. ???


module.exports = {
  pickNumberOfArray,
  getSumOfArray,
  splitStringToArray,
  getFactorial,
  getFactorialRecursive,
  getFibonacci,
  getFibonacciRecursive,
};
