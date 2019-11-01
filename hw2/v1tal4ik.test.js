const { pickNumberOfArray } = require('./v1tal4ik');
const { getSumOfArray } = require('./v1tal4ik');
const { splitToArray } = require('./v1tal4ik');
const { getFactorial } = require('./v1tal4ik');
const { getFactorialRecursive } = require('./v1tal4ik');
const { getFibonacci } = require('./v1tal4ik');
const { getFibonacciRecursive } = require('./v1tal4ik');


// describe('fn repeatString', () => {
//   test('Type of argument "str" is invalid', () => {
//     const result = repeatString(123, 2);
//     expect(result).toBe('Error: type of arguments are invalid');
//   });
// });

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


describe('fn splitToArray', () => {
  test('Type of argument "str" is invalid', () => {
    const result = splitToArray(123);
    expect(result).toEqual({
      message: 'Error: argument "str" must be type STRING',
      arrOfString: [],
      arrOfNumber: [],
    });
  });

  test('Argument "str" is undefined', () => {
    const result = splitToArray(undefined);
    expect(result).toEqual({
      message: 'Error: argument "str" is invalid',
      arrOfString: [],
      arrOfNumber: [],
    });
  });

  test('Argument "str" is null', () => {
    const result = splitToArray(null);
    expect(result).toEqual({
      message: 'Error: argument "str" must be type STRING',
      arrOfString: [],
      arrOfNumber: [],
    });
  });

  test('Argument "str" is empty string', () => {
    const result = splitToArray('');
    expect(result).toEqual({
      message: 'Error: argument "str" is invalid',
      arrOfString: [],
      arrOfNumber: [],
    });
  });

  test('Without argument', () => {
    const result = splitToArray();
    expect(result).toEqual({
      message: 'Error: argument "str" is invalid',
      arrOfString: [],
      arrOfNumber: [],
    });
  });

  test('String composed of only letters', () => {
    const result = splitToArray('asd,fgh,jkl,L,Uasd');
    expect(result).toEqual({
      message: '',
      arrOfString: ['asd', 'fgh', 'jkl', 'L', 'Uasd'],
      arrOfNumber: [],
    });
  });

  test('String composed of only digit', () => {
    const result = splitToArray('123,2,-5,0,1.4');
    expect(result).toEqual({
      message: '',
      arrOfString: [],
      arrOfNumber: [123, 2, -5, 0, 1.4],
    });
  });

  test('String composed of digit and letters separately', () => {
    const result = splitToArray('123,asd,2,-5,Akon,0,Has,1.4');
    expect(result).toEqual({
      message: '',
      arrOfString: ['asd', 'Akon', 'Has'],
      arrOfNumber: [123, 2, -5, 0, 1.4],
    });
  });

  test('String composed of letters and digit at the start or at the end of letters', () => {
    const result = splitToArray('123asd,dft2,-5,Akon1,0,Has,1.4');
    expect(result).toEqual({
      message: '',
      arrOfString: ['asd', 'dft', 'Akon', 'Has'],
      arrOfNumber: [123, 2, -5, 1, 0, 1.4],
    });
  });

  test('String composed of letters and digit at the middle of letters', () => {
    const result = splitToArray('a123sd,dft2,-5,Ak34on1,0,Ha6s6,1.4');
    expect(result).toEqual({
      message: '',
      arrOfString: ['asd', 'dft', 'Akon', 'Has'],
      arrOfNumber: [123, 2, -5, 34, 1, 0, 6, 6, 1.4],
    });
  });

  test('String composed of letters,digit and empty srting', () => {
    const result = splitToArray('a123sd,dft2,-5, ,Ak34on1,0,Ha6s6,1.4');
    // expect(result.arrOfNumber).toEqual([123, 2, -5, 0, 34, 1, 0, 6, 6, 1.4]);
    expect(result).toEqual({
      message: '',
      arrOfString: ['asd', 'dft', ' ', 'Akon', 'Has'],
      arrOfNumber: [123, 2, -5, 34, 1, 0, 6, 6, 1.4],
    });
  });

  test('Expample test', () => {
    const result = splitToArray('Red, Green, Blue, White1, 3, 4, 5, 7String');
    expect(result).toEqual({
      message: '',
      arrOfString: ['Red', ' Green', ' Blue', ' White', ' String'],
      arrOfNumber: [1, 3, 4, 5, 7],
    });
  });
});
