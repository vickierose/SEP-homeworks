// 1.Write a Javascript program to create a new string which is n copies of a given string where n is a non-negative integer.

function repeatString(str = '', value = 0) {
  if ((typeof (str)) !== 'string' || (typeof (value) !== 'number') || value < 0) {
    const error = 'Error: type of arguments are invalid';
    console.error(error);
    return error;
  }

  let basicStr = str;
  for (let i = 1; i < value; i++) {
    basicStr += str;
  }
  return basicStr;
}

const repeatStr = repeatString('Hi Tomas!', 3);
console.log({ repeatStr });


// 2.Write a Javascript program to check if a string starts with "if".

function checkIfStartsWithIf(str = '') {
  if (typeof (str) !== 'string') {
    console.error('Error: Type of argument "str" is invalid');
    return false;
  }
  const regExp = /if/;
  const text = str.toLowerCase().trim();
  const info = text.match(regExp);

  if (info) {
    return (info.index === 0);
  }
  return false;
}

const example = 'if i were sultan, I will have a lots of wife';
const isStart = checkIfStartsWithIf(example);
console.log({ isStart });


// 3.Write a Javascript program to check two non-negative integer values and return true if they have the same last digit

function checkLastDigit(num1 = 0, num2 = 0) {
  if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
    const error = 'Error: type of arguments are invalid';
    console.error(error);
    return false;
  }

  if (num1 < 0 || num2 < 0) {
    const error = 'Error: arguments are negative';
    console.error(error);
    return false;
  }

  const textOfNumber1 = num1.toString().split('');
  const textOfNumber2 = num2.toString().split('');

  const lastValue1 = textOfNumber1[textOfNumber1.length - 1];
  const lastValue2 = textOfNumber2[textOfNumber2.length - 1];

  return (lastValue1 === lastValue2);
}

const isEqual = checkLastDigit(123, 223);
console.log({ isEqual });


// 4. Information of number

function getSomeInfoOfNumber(number = 0) {
  if (typeof (number) !== 'number') {
    console.log('Error: type of argument must be Number');
    return { message: 'Error: type of argument must be Number' };
  }
  if (number <= 0) {
    console.log('Error: argument must be positive number');
    return { message: 'Error: argument must be positive number' };
  }
  if (number % 1 !== 0) {
    console.log('Error: argument must be integer');
    return { message: 'Error: argument must be integer' };
  }
  if (number.toString().split('').length !== 4) {
    console.log('Error: argument length must be equal 4');
    return { message: 'Error: argument length must be equal 4' };
  }

  const textOfNumber = number.toString().split('');
  const arrOfNumber = textOfNumber.map((item) => +item);

  // Sum
  const sum = arrOfNumber.reduce((sum, item) => (sum + item), 0);

  // Statistic of number
  const statisticOfDigitMatch = {};
  arrOfNumber.forEach((item) => statisticOfDigitMatch[item] = statisticOfDigitMatch[item] + 1 || 1);

  // Compare part of number
  let isSumPartOfNumberEqual = false;
  if ((arrOfNumber[0] + arrOfNumber[1]) === (arrOfNumber[2] + arrOfNumber[3])) {
    isSumPartOfNumberEqual = true;
  }

  return {
    sum,
    statisticOfDigitMatch,
    isSumPartOfNumberEqual,
  };
}

const infoOfNumber = getSomeInfoOfNumber(1234);
console.log(infoOfNumber);


/*

5. What would be the result of next statements:
[1, 2, 3] + {} || 1,2,3[object Object]
1 + "3" - 2    || 11
1 + ("3" - 2)  || 2

What would a, b and c equal?
  let a = 2;    || 2
  let b = a++;  || 2
  let c = ++a;  || 4

*/


// 6. Get type of nn in a lower case format:

const nn = new Promise((res, rej) => {
  setTimeout(() => res('done'), 1000);
});

const getDataType = (obj = 'empty') => {
  if (obj === 'empty') { return 'Error: argument is not received'; }
  if (obj === null) { return 'object'; }
  switch (typeof (obj)) {
    case 'number':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'string':
      return 'string';
    case 'undefined':
      return 'undefined';
    case 'function':
      return 'function';
    case 'object':
      return Object.getPrototypeOf(obj).constructor.name.toLowerCase();
    default:
      return "I don't know what wrong happend";
  }
};

const type = getDataType(nn);
console.log({ type });


// For test without error in the Browser
try {
  module.exports = {
    repeatString,
    checkIfStartsWithIf,
    checkLastDigit,
    getSomeInfoOfNumber,
    getDataType,
  };
} catch (e) {};
