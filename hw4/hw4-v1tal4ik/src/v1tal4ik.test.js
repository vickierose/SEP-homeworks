import {
  range, arrOfOddNumbers, arrOfEvenNumbers, argumentsLogger, obj,
} from './v1tal4ik';

describe('Range', () => {
  test('Functional of iterator', () => {
    range.from = 1;
    range.to = 5;
    let counter = 0;
    for (const item of range) {
      counter++;
    }
    expect(counter).toEqual(5);
  });
});


describe('Sort number to array', () => {
  test('arrOfOddNumbers', () => {
    const result = arrOfOddNumbers.every((item) => (item % 2 !== 0));
    expect(result).toBeTruthy();
  });
  test('arrOfOddNumbers', () => {
    const result = arrOfEvenNumbers.every((item) => (item % 2 === 0));
    expect(result).toBeTruthy();
  });
});


describe('argumentsLogger', () => {
  test('return string ', () => {
    const result = argumentsLogger(1, 2, 3);
    expect(typeof (result)).toBe('string');
  });
  test('return right value ', () => {
    const result = argumentsLogger(1, 2, 3);
    expect(result).toBe('argument 0: 1, argument 1: 2, argument 2: 3, ');
  });
});


describe('Proxy', () => {
  test('get value of existing property ', () => {
    obj.test = 10;
    expect(obj.test).toEqual(10);
  });

  test('get value of non-existing property ', () => {
    expect(obj.foo).toBe('I have no such fruits');
  });
});
