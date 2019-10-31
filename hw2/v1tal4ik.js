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
// const result = pickNumberOfArray([1, 2, 3], NaN);
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
//   ```
//     Original delimited string:
//     Red, Green, Blue, White1, 3, 4, 5, 7String to array:
//     ["Red", " Green", " Blue", " White"]
//     [1, 3, 4, 5, 7]
//   ```

function splitToArray(str = '') {

}

// 4. write a function which returns a factorial of a given number with loop and recursive function. Sample output:
//   ```
//     getFactorial(5) => 120
//   ```

function getFactorial() {

}

function getFactorialRecursive() {

}

// 5. write a function which returns a Fibonacci value for a given number with loop and recursive function. Sample output:
//   ```
//     getFibonacci(10) => 55
//   ```

function getFibonacci() {

}

function getFibonacciRecursive() {

}
// 6. think and write the results of all console logs (without running code in console please :smiling_imp: ):
//   ```javascript
//   let car = "audi";
//   let bike = "cannondale";

//   function log () {
//     let bike = "specialized";
//     car = "jeep";

//     function inner () {
//       let plane = "boeing";
//       console.log(car);
//       console.log(bike);
//       console.log(plane);
//     }
//     console.log(inner);
//     return inner;
//   }

//   console.log(car);
//   console.log(bike);

//   var logger = log();
//   logger();

//   console.log(car);
//   console.log(bike);
//   inner();
//   ```

module.exports = {
  pickNumberOfArray,
  getSumOfArray,
  splitToArray,
  getFactorial,
  getFactorialRecursive,
  getFibonacci,
  getFibonacciRecursive,
};
