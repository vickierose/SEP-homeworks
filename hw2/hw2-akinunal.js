/* 1. Write a Javascript program to pick a number of random elements from a given array. Sample Output:

Original array:
[12, 34, 23, 56]
2 random elements from the array.
  [34, 12]
3 random elements from the array.
  [56, 12, 34]
*/
console.log('------ Question 1: ------')

let arrayOfNumbers = [12, 34, 23, 56]

let randomElement = (arr, num) => {
  let arrCopy = []

  for (i = 0; i < num; i++) {
    let randomNum = Math.floor(Math.random() * arr.length)
    arrCopy.push(arrayOfNumbers[randomNum])
  }
  console.log(arrCopy)
}

randomElement(arrayOfNumbers, 2)
randomElement(arrayOfNumbers, 3)

/* 2. Write a Javascript program to compute the sum of elements in a given array. Sample output:
  Original array:
  [12, 34, 23, 56]
  Sum of the values of the above array:
  125
*/
console.log('------ Question 2: ------')

let sumOfElements = arr => {
  return arr.reduce(function (a, b) {
    return a + b
  })
}

console.log(sumOfElements(arrayOfNumbers))

/* 3. Write a Javascript program to split a delimited string into an array. Sample output:
  Original delimited string:
  Red, Green, Blue, White1, 3, 4, 5, 7String to array:
  ["Red", " Green", " Blue", " White"]
  [1, 3, 4, 5, 7]
*/
console.log('------ Question 3: ------')

let delimitedString = "Red, Green, Blue, White1, 3, 4, 5, 7";

let stringToArray = str => {
  let mainArray = str.split('')
  let mainArrayNoNumbers = []
  let obj = {
    numberArray: [],
    stringArray: []
  }

  mainArray.forEach(el => {
    +el ? obj.numberArray.push(+el) : mainArrayNoNumbers.push(el)
  })

  obj.stringArray = [...mainArrayNoNumbers.join('').split(', ').filter(value => value != '')]

  return obj
}

console.log(stringToArray(delimitedString))

/* 4. Write a function which returns a factorial of a given number with loop and recursive function. Sample output:
  getFactorial(5) => 120
*/
console.log('------ Question 4: ------')

let getFactorial = num => {
  let result = 1
  for (let i = num; i > 0; i--) {
    result = result * i
  }
  return result
}

console.log(getFactorial(5))

/* 5. Write a function which returns a Fibonacci value for a given number with loop and recursive function. Sample output:
  getFibonacci(10) => 55
*/
console.log('------ Question 5: ------')

let getFibonacci = num => {
  if (num <= 2) return 1
  if (num > 40) return `Please use a number smaller than 40, so you don't crash the browser :)`

  return getFibonacci(num - 1) + getFibonacci(num - 2)
}

console.log(getFibonacci(10))

/* 6. Think and write the results of all console logs (without running code in console please):
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

console.log(car);
console.log(bike);

var logger = log();
logger();

console.log(car);
console.log(bike);
inner();

CONSOLE LOG
"audi"
"cannondale"
function inner() {
let plane = "boeing";
  console.log(car);
  console.log(bike);
  console.log(plane);
}
"jeep"
"specialized"
"boeing"
"jeep"
"cannondale"
inner is not defined
*/