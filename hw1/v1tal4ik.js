// 1.Write a Javascript program to create a new string which is n copies of a given string where n is a non-negative integer.

function repeatString(str, value) {
  let basicStr = str;
  for (let i = 1; i < value; i++) {
    basicStr += str;
  }
  return basicStr;
}

const repeatStr = repeatString('Hi Tomas!', 4);
console.log(repeatStr);


// 2.Write a Javascript program to check if a string starts with "if".

function checkIfStartsWithIf(str = '') {
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
console.log(isStart);

// 3.Write a Javascript program to check two non-negative integer values and return true if they have the same last digit

function checkLastDigit(num1 = 0, num2 = 0) {
  const textOfNumber1 = num1.toString().split('');
  const textOfNumber2 = num2.toString().split('');

  const lastValue1 = textOfNumber1[textOfNumber1.length - 1];
  const lastValue2 = textOfNumber2[textOfNumber2.length - 1];

  return (lastValue1 === lastValue2);
}

const isEqual = checkLastDigit(123, 223);
console.log(isEqual);

// 4. Information of number

function getSomeInfoOfNumber(number = 0) {
  const textOfNumber = number.toString().split('');
  textOfNumber.length = 4;
  const arrOfNumber = textOfNumber.map((item) => +item);

  // Sum
  const sum = arrOfNumber.reduce((sum, item) => (sum + item), 0);

  // Statistic of number
  const statisticOfDigitMatch = {};
  arrOfNumber.forEach((item) => statisticOfDigitMatch[item] = statisticOfDigitMatch[item] + 1 || 1);

  // Compare part of number
  let isSumPartOfNumberEqual = false;
  if ((arrOfNumber[0] + arrOfNumber[1]) === arrOfNumber[2] + arrOfNumber[3]) {
    isSumPartOfNumberEqual = true;
  }

  return {
    sum,
    statisticOfDigitMatch,
    isSumPartOfNumberEqual,
  };
}

const infoOfNumber = getSomeInfoOfNumber(1234567);
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

const getDataType = (obj = '') => Object.getPrototypeOf(obj).constructor.name.toLowerCase();

const type = getDataType(nn);
console.log(type);
