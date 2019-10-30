const { repeatString } = require('./v1tal4ik');
const { checkIfStartsWithIf } = require('./v1tal4ik');
const { checkLastDigit } = require('./v1tal4ik');
const { getSomeInfoOfNumber } = require('./v1tal4ik');
const { getDataType } = require('./v1tal4ik');

describe('fn repeatString', () => {
  test('Type of argument "str" is invalid', () => {
    const result = repeatString(123, 2);
    expect(result).toBe('Error: type of arguments are invalid');
  });


  test('Type of argument "value" is invalid', () => {
    const result = repeatString(123, '2');
    expect(result).toBe('Error: type of arguments are invalid');
  });


  test('Argument "value" is negative', () => {
    const result = repeatString(123, -1);
    expect(result).toBe('Error: type of arguments are invalid');
  });


  test('Without arguments', () => {
    const result = repeatString();
    expect(result).toBe('');
  });


  test('Return right result', () => {
    const result = repeatString('123', 2);
    expect(result).toBe('123123');
  });
});


describe('fn checkIfStartsWithIf', () => {
  test('Type of argument "str" is invalid', () => {
    const result = checkIfStartsWithIf(123);
    expect(result).toBe(false);
  });


  test('Without argument', () => {
    const result = checkIfStartsWithIf();
    expect(result).toBe(false);
  });


  test('Text without "if"', () => {
    const result = checkIfStartsWithIf('Text without');
    expect(result).toBe(false);
  });


  test('Text start with " " ', () => {
    const result = checkIfStartsWithIf(' some text');
    expect(result).toBe(false);
  });


  test('Text with "if" in the middle', () => {
    const result = checkIfStartsWithIf('some text with "if" in the middle');
    expect(result).toBe(false);
  });


  test('Text with "if" in the end', () => {
    const result = checkIfStartsWithIf('some text with if');
    expect(result).toBe(false);
  });


  test('Text with "i f" ', () => {
    const result = checkIfStartsWithIf('i f some ... ');
    expect(result).toBe(false);
  });


  test('Text with capital letter', () => {
    const result = checkIfStartsWithIf('IF i were ...');
    expect(result).toBe(true);
  });


  test('Text with CamelCase', () => {
    const result = checkIfStartsWithIf('iF i were ...');
    expect(result).toBe(true);
  });
});


describe('fn checkLastDigit', () => {
  test('Type of arguments is invalid', () => {
    const result = checkLastDigit('123', '2');
    expect(result).toBe(false);
  });


  test('Type of one argument is invalid', () => {
    const result = checkLastDigit(1, '2');
    expect(result).toBe(false);
  });


  test('Without arguments', () => {
    const result = checkLastDigit();
    expect(result).toBe(true);
  });


  test('Arguments are negative', () => {
    const result = checkLastDigit(-11, -2);
    expect(result).toBe(false);
  });


  test('Arguments are expession', () => {
    const result = checkLastDigit((2 + 2), (5 - 1));
    expect(result).toBe(true);
  });


  test('Arguments with point', () => {
    const result = checkLastDigit(1.23, 1.23);
    expect(result).toBe(true);
  });


  test('Usually arguments', () => {
    const result = checkLastDigit(123, 123);
    expect(result).toBe(true);
  });
});


describe('fn getSomeInfoOfNumber', () => {
  test('Type of argument "number" is invalid', () => {
    const result = getSomeInfoOfNumber('123');
    expect(result.message).toBe('Error: type of argument must be Number');
  });

  test('Argument "NaN"', () => {
    const result = getSomeInfoOfNumber(NaN);
    expect(result.message).toBe('Error: argument must be integer');
  });

  test('Without argument', () => {
    const result = getSomeInfoOfNumber();
    expect(result.message).toBe('Error: argument must be positive number');
  });

  test('Argument "number" is negative', () => {
    const result = getSomeInfoOfNumber(-1234);
    expect(result.message).toBe('Error: argument must be positive number');
  });

  test('Argument size < 4', () => {
    const result = getSomeInfoOfNumber(123);
    expect(result.message).toBe('Error: argument length must be equal 4');
  });

  test('Argument size > 4', () => {
    const result = getSomeInfoOfNumber(123323);
    expect(result.message).toBe('Error: argument length must be equal 4');
  });

  test('Argument with point', () => {
    const result = getSomeInfoOfNumber(1.234);
    expect(result).toEqual({ message: 'Error: argument must be integer' });
  });

  test('Return object', () => {
    const result = getSomeInfoOfNumber(1234);
    expect(typeof (result)).toBe('object');
  });

  test('Sum of number 1234', () => {
    const result = getSomeInfoOfNumber(1234);
    expect(result.sum).toBe(10);
  });

  test('Statistic of number 1234', () => {
    const result = getSomeInfoOfNumber(1234);
    expect(result.statisticOfDigitMatch).toEqual({
      1: 1,
      2: 1,
      3: 1,
      4: 1,
    });
  });

  test('Statistic of number 1122 ', () => {
    const result = getSomeInfoOfNumber(1122);
    expect(result.statisticOfDigitMatch).toEqual({
      1: 2,
      2: 2,
    });
  });

  test('Compare part of number 1122 ', () => {
    const result = getSomeInfoOfNumber(1122);
    expect(result.isSumPartOfNumberEqual).toBe(false);
  });

  test('Compare part of number 3122 ', () => {
    const result = getSomeInfoOfNumber(3122);
    expect(result.isSumPartOfNumberEqual).toBe(true);
  });

  test('Argument with expression', () => {
    const result = getSomeInfoOfNumber(1001 - 1);
    expect(result.sum).toEqual(1);
    expect(result.statisticOfDigitMatch).toEqual({ 1: 1, 0: 3 });
    expect(result.isSumPartOfNumberEqual).toBe(false);
  });
});


describe('fn getDataType', () => {
  test('Return string', () => {
    const result = getDataType();
    expect(typeof (result)).toBe('string');
  });


  test('Without argument', () => {
    const result = getDataType();
    expect(result).toBe('Error: argument is not received');
  });


  test('Return type of positive number', () => {
    const result = getDataType(123);
    expect(result).toBe('number');
  });


  test('Return type of negative number', () => {
    const result = getDataType(-12);
    expect(result).toBe('number');
  });


  test('Return type of number with point', () => {
    const result = getDataType(12.3);
    expect(result).toBe('number');
  });


  test('Return type of expression', () => {
    const result = getDataType((125 - 123));
    expect(result).toBe('number');
  });


  test('Return type of boolean', () => {
    const result = getDataType(true);
    expect(result).toBe('boolean');
  });


  test('Return type of string', () => {
    const result = getDataType('text');
    expect(result).toBe('string');
  });


  test('Return type of null', () => {
    const result = getDataType(null);
    expect(result).toBe('object');
  });


  test('Return type of NaN', () => {
    const result = getDataType(NaN);
    expect(result).toBe('number');
  });


  test('Return type of Infinity', () => {
    const result = getDataType(Infinity);
    expect(result).toBe('number');
  });


  test('Return type of Function', () => {
    const result = getDataType(() => {});
    expect(result).toBe('function');
  });

  test('Return type of Object', () => {
    const result = getDataType({});
    expect(result).toBe('object');
  });


  test('Return type of Array', () => {
    const result = getDataType([1, 2, 3]);
    expect(result).toBe('array');
  });


  test('Return type of Promise', () => {
    const nn = new Promise((res, rej) => {
      setTimeout(() => res('done'), 1000);
    });

    const result = getDataType(nn);
    expect(result).toBe('promise');
  });
});
