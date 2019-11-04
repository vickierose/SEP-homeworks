const { pickNumberOfArray } = require('./v1tal4ik');
const { getSumOfArray } = require('./v1tal4ik');
const { splitStringToArray } = require('./v1tal4ik');
const { getFactorial } = require('./v1tal4ik');
const { getFactorialRecursive } = require('./v1tal4ik');
const { getFibonacci } = require('./v1tal4ik');
const { getFibonacciRecursive } = require('./v1tal4ik');


describe('fn pickNumberOfArray', () => {
  test('Type of argument "arr" is invalid', () => {
    const result = pickNumberOfArray('123', 2);
    expect(result).toEqual([]);
  });

  test('Type of argument "arr" object ', () => {
    const result = pickNumberOfArray({}, 2);
    expect(result).toEqual([]);
  });

  test('Argument "arr" is empty ', () => {
    const result = pickNumberOfArray([], 2);
    expect(result).toEqual([]);
  });

  test('Type of argument "count" is invalid', () => {
    const result = pickNumberOfArray([], '2');
    expect(result).toEqual([]);
  });

  test('Argument "count" is negative', () => {
    const result = pickNumberOfArray([], -2);
    expect(result).toEqual([]);
  });

  test('Argument "count" is not integer', () => {
    const result = pickNumberOfArray([], 2.2);
    expect(result).toEqual([]);
  });

  test('Argument "count" is NaN', () => {
    const result = pickNumberOfArray([1, 2, 3], NaN);
    expect(result).toEqual([]);
  });

  test('Without argument "arr" ', () => {
    const result = pickNumberOfArray(undefined, 2);
    expect(result).toEqual([]);
  });

  test('Without argument "count" ', () => {
    const result = pickNumberOfArray([1, 2, 3]);
    expect(result).toEqual([]);
  });

  test('Without arguments', () => {
    const result = pickNumberOfArray();
    expect(result).toEqual([]);
  });

  test('Return object', () => {
    const result = pickNumberOfArray([1, 2, 3, 4, 5], 2);
    expect(typeof (result)).toBe('object');
  });

  test('2 random elements from the array', () => {
    const result = pickNumberOfArray([1, 2, 3, 4, 5], 2);
    expect(result.length).toEqual(2);
  });

  test('5 random elements from the array', () => {
    const result = pickNumberOfArray([1, 2, 3, 4, 5, 6], 5);
    expect(result.length).toEqual(5);
  });

  test('3 random elements from the array which length 2', () => {
    const result = pickNumberOfArray([1, 2], 3);
    expect(result).toEqual([]);
  });

  test('Elements of Array have different type', () => {
    const result = pickNumberOfArray([1, 2, 3, 'true', false], 2);
    expect(result.length).toEqual(2);
  });

  test('True elements', () => {
    const result = pickNumberOfArray([1, 2], 2);
    expect(result).toEqual([1, 2]);
  });
});


describe('fn getSumOfArray', () => {
  test('Type of argument "arr" is invalid', () => {
    const result = getSumOfArray('123');
    expect(result).toEqual(0);
  });

  test('Type of argument "arr" is object', () => {
    const result = getSumOfArray({});
    expect(result).toEqual(0);
  });

  test('Type of argument "arr" is null', () => {
    const result = getSumOfArray(null);
    expect(result).toEqual(0);
  });

  test('Argument "arr" is empty', () => {
    const result = getSumOfArray([]);
    expect(result).toEqual(0);
  });

  test('Without argument', () => {
    const result = getSumOfArray();
    expect(result).toEqual(0);
  });

  test('Return number', () => {
    const result = getSumOfArray([1, 2, 3, 4, 5]);
    expect(typeof (result)).toBe('number');
  });

  test('Argument "arr" has boolean type elements', () => {
    const result = getSumOfArray([1, 2, 3, true, true, false]);
    expect(result).toEqual(8);
  });

  test('Argument "arr" has different type of elements', () => {
    const result = getSumOfArray([1, {}, 'one', null, true, NaN]);
    expect(result).toEqual(0);
  });

  test('One Element of array is expression', () => {
    const result = getSumOfArray([1, true, (2 - 1)]);
    expect(result).toEqual(3);
  });

  test('One element of array is function', () => {
    const result = getSumOfArray([1, () => 32, 2]);
    expect(result).toEqual(0);
  });

  test('Usually arr with number', () => {
    const result = getSumOfArray([1, 0.3, 5]);
    expect(result).toEqual(6.3);
  });
});


describe('fn splitStringToArray', () => {
  test('Type of argument "str" is invalid', () => {
    const result = splitStringToArray(123);
    expect(result).toEqual({
      message: 'Error: argument "str" must be type STRING',
      arrOfString: [],
      arrOfNumber: [],
    });
  });

  test('Argument "str" is undefined', () => {
    const result = splitStringToArray(undefined);
    expect(result).toEqual({
      message: 'Error: argument "str" is invalid',
      arrOfString: [],
      arrOfNumber: [],
    });
  });

  test('Argument "str" is null', () => {
    const result = splitStringToArray(null);
    expect(result).toEqual({
      message: 'Error: argument "str" must be type STRING',
      arrOfString: [],
      arrOfNumber: [],
    });
  });

  test('Argument "str" is empty string', () => {
    const result = splitStringToArray('');
    expect(result).toEqual({
      message: 'Error: argument "str" is invalid',
      arrOfString: [],
      arrOfNumber: [],
    });
  });

  test('Without argument', () => {
    const result = splitStringToArray();
    expect(result).toEqual({
      message: 'Error: argument "str" is invalid',
      arrOfString: [],
      arrOfNumber: [],
    });
  });

  test('String composed of only letters', () => {
    const result = splitStringToArray('asd,fgh,jkl,L,Uasd');
    expect(result).toEqual({
      message: '',
      arrOfString: ['asd', 'fgh', 'jkl', 'L', 'Uasd'],
      arrOfNumber: [],
    });
  });

  test('String composed of only digit', () => {
    const result = splitStringToArray('123,2,-5,0,1.4');
    expect(result).toEqual({
      message: '',
      arrOfString: [],
      arrOfNumber: [123, 2, -5, 0, 1.4],
    });
  });

  test('String composed of digit and letters separately', () => {
    const result = splitStringToArray('123,asd,2,-5,Akon,0,Has,1.4');
    expect(result).toEqual({
      message: '',
      arrOfString: ['asd', 'Akon', 'Has'],
      arrOfNumber: [123, 2, -5, 0, 1.4],
    });
  });

  test('String composed of letters and digit at the start or at the end of letters', () => {
    const result = splitStringToArray('123asd,dft2,-5,Akon1,0,Has,1.4');
    expect(result).toEqual({
      message: '',
      arrOfString: ['asd', 'dft', 'Akon', 'Has'],
      arrOfNumber: [123, 2, -5, 1, 0, 1.4],
    });
  });

  test('String composed of letters and digit at the middle of letters', () => {
    const result = splitStringToArray('a123sd,dft2,-5,Ak34on1,0,Ha6s6,1.4');
    expect(result).toEqual({
      message: '',
      arrOfString: ['asd', 'dft', 'Akon', 'Has'],
      arrOfNumber: [123, 2, -5, 34, 1, 0, 6, 6, 1.4],
    });
  });

  test('String composed of letters,digit and empty srting', () => {
    const result = splitStringToArray('a123sd,dft2,-5, ,Ak34on1,0,Ha6s6,1.4');
    expect(result).toEqual({
      message: '',
      arrOfString: ['asd', 'dft', ' ', 'Akon', 'Has'],
      arrOfNumber: [123, 2, -5, 34, 1, 0, 6, 6, 1.4],
    });
  });

  test('Expample test', () => {
    const result = splitStringToArray('Red, Green, Blue, White1, 3, 4, 5, 7String');
    expect(result).toEqual({
      message: '',
      arrOfString: ['Red', ' Green', ' Blue', ' White', ' String'],
      arrOfNumber: [1, 3, 4, 5, 7],
    });
  });
});


describe('fn getFactorial', () => {
  test('Type of argument "number" is string', () => {
    const result = getFactorial('123');
    expect(result).toEqual(0);
  });

  test('Type of argument "number" is undefined', () => {
    const result = getFactorial(undefined);
    expect(result).toEqual(0);
  });

  test('Type of argument "number" is null', () => {
    const result = getFactorial(null);
    expect(result).toEqual(0);
  });

  test('Type of argument "number" is object', () => {
    const result = getFactorial({});
    expect(result).toEqual(0);
  });

  test('Argument "number" is NaN ', () => {
    const result = getFactorial(NaN);
    expect(result).toEqual(0);
  });

  test('Argument "number" is negative number ', () => {
    const result = getFactorial(-5);
    expect(result).toEqual(0);
  });

  test('Argument "number" is number with point ', () => {
    const result = getFactorial(1.5);
    expect(result).toEqual(0);
  });

  test('Without argument', () => {
    const result = getFactorial();
    expect(result).toEqual(0);
  });

  test('Return number', () => {
    const result = getFactorial();
    expect(typeof (result)).toBe('number');
  });

  test('Normal number 0', () => {
    const result = getFactorial(0);
    expect(result).toEqual(0);
  });

  test('Normal number 5 ', () => {
    const result = getFactorial(5);
    expect(result).toEqual(120);
  });
});

describe('fn getFactorialRecursive', () => {
  test('Type of argument "number" is string', () => {
    const result = getFactorialRecursive('123');
    expect(result).toEqual(0);
  });

  test('Type of argument "number" is undefined', () => {
    const result = getFactorialRecursive(undefined);
    expect(result).toEqual(0);
  });

  test('Type of argument "number" is null', () => {
    const result = getFactorialRecursive(null);
    expect(result).toEqual(0);
  });

  test('Type of argument "number" is object', () => {
    const result = getFactorialRecursive({});
    expect(result).toEqual(0);
  });

  test('Argument "number" is NaN ', () => {
    const result = getFactorialRecursive(NaN);
    expect(result).toEqual(0);
  });

  test('Argument "number" is negative number ', () => {
    const result = getFactorialRecursive(-5);
    expect(result).toEqual(0);
  });

  test('Argument "number" is number with point ', () => {
    const result = getFactorialRecursive(1.5);
    expect(result).toEqual(0);
  });

  test('Without argument', () => {
    const result = getFactorialRecursive();
    expect(result).toEqual(0);
  });

  test('Return number', () => {
    const result = getFactorialRecursive();
    expect(typeof (result)).toBe('number');
  });

  test('Normal number 0', () => {
    const result = getFactorialRecursive(0);
    expect(result).toEqual(0);
  });

  test('Normal number 5 ', () => {
    const result = getFactorialRecursive(5);
    expect(result).toEqual(120);
  });
});


describe('fn getFibonacci', () => {
  test('Type of argument "number" is string', () => {
    const result = getFibonacci('123');
    expect(result).toEqual(0);
  });

  test('Type of argument "number" is undefined', () => {
    const result = getFibonacci(undefined);
    expect(result).toEqual(0);
  });

  test('Type of argument "number" is null', () => {
    const result = getFibonacci(null);
    expect(result).toEqual(0);
  });

  test('Type of argument "number" is object', () => {
    const result = getFibonacci({});
    expect(result).toEqual(0);
  });

  test('Argument "number" is NaN ', () => {
    const result = getFibonacci(NaN);
    expect(result).toEqual(0);
  });

  test('Argument "number" is negative number ', () => {
    const result = getFibonacci(-5);
    expect(result).toEqual(0);
  });

  test('Argument "number" is number with point ', () => {
    const result = getFibonacci(1.5);
    expect(result).toEqual(0);
  });

  test('Without argument', () => {
    const result = getFibonacci();
    expect(result).toEqual(0);
  });

  test('Return number', () => {
    const result = getFibonacci(123);
    expect(typeof (result)).toBe('number');
  });

  test('Normal number 0', () => {
    const result = getFibonacci(0);
    expect(result).toEqual(0);
  });

  test('Normal number 10 ', () => {
    const result = getFibonacci(10);
    expect(result).toEqual(55);
  });
});


describe('fn getFibonacciRecursive', () => {
  test('Type of argument "number" is string', () => {
    const result = getFibonacciRecursive('123');
    expect(result).toEqual(0);
  });

  test('Type of argument "number" is undefined', () => {
    const result = getFibonacciRecursive(undefined);
    expect(result).toEqual(0);
  });

  test('Type of argument "number" is null', () => {
    const result = getFibonacciRecursive(null);
    expect(result).toEqual(0);
  });

  test('Type of argument "number" is object', () => {
    const result = getFibonacciRecursive({});
    expect(result).toEqual(0);
  });

  test('Argument "number" is NaN ', () => {
    const result = getFibonacciRecursive(NaN);
    expect(result).toEqual(0);
  });

  test('Argument "number" is negative number ', () => {
    const result = getFibonacciRecursive(-5);
    expect(result).toEqual(0);
  });

  test('Argument "number" is number with point ', () => {
    const result = getFibonacciRecursive(1.5);
    expect(result).toEqual(0);
  });

  test('Without argument', () => {
    const result = getFibonacciRecursive();
    expect(result).toEqual(0);
  });

  test('Return number', () => {
    const result = getFibonacciRecursive(2);
    expect(typeof (result)).toBe('number');
  });

  test('Normal number 0', () => {
    const result = getFibonacciRecursive(0);
    expect(result).toEqual(0);
  });

  test('Normal number 5 ', () => {
    const result = getFibonacciRecursive(10);
    expect(result).toEqual(55);
  });
});
