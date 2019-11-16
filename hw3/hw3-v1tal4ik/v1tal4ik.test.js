const { PersonFunc } = require('./v1tal4ik');

const SarahMay = {
  firstName: 'Sarah',
  lastName: 'May',
  birthDate: '13.03.1990',
  address: {
    country: 'Spain',
    city: 'Seville',
    street: 'calle Verde',
    house: '5',
    apartment: '2A',
  },
  job: {
    title: 'teacher',
    experience: 5,
  },
};


// describe('fn pickNumberOfArray', () => {
//   test('Type of argument "arr" is invalid', () => {
//     const result = pickNumberOfArray('123', 2);
//     expect(result).toEqual([]);
//   });
// });

describe('fn PersonFunc', () => {
  test('Return obj', () => {
    const result = new PersonFunc();
    expect(typeof (result)).toBe('object');
  });

  test('Type of argument NUMBER', () => {
    const result = new PersonFunc(123);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument STRING', () => {
    const result = new PersonFunc('123');
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument BOOLEAN', () => {
    const result = new PersonFunc(true);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument FUNCTION', () => {
    const result = new PersonFunc(() => { console.log('function'); });
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument ARRAY', () => {
    const result = new PersonFunc([]);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument UNDEFINED', () => {
    const result = new PersonFunc(undefined);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument NaN', () => {
    const result = new PersonFunc(NaN);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Argument is NULL', () => {
    const result = new PersonFunc(null);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Without argument', () => {
    const result = new PersonFunc();
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Argument is empty object', () => {
    const result = new PersonFunc({});
    expect(result).toEqual({
      msg: 'Error : Object is empty!',
    });
  });

  test('Argument has extra property', () => {
    SarahMay.extraProp = 'extraProp';
    const result = new PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object propery length = 6 and must be = 5',
    });
    delete SarahMay.extraProp;
  });

  test('Argument does not have property firstName', () => {
    delete SarahMay.firstName;
    const result = new PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object does not have propery "firstName"! ',
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Argument does not have property job', () => {
    delete SarahMay.job;
    const result = new PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object does not have propery "job"! ',
    });
    SarahMay.job = {
      title: 'fitness coach',
      experience: 1.5,
    };
  });

  test('Property firstName has wrong type', () => {
    SarahMay.firstName = 123;
    const result = new PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid!',
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property job has wrong type', () => {
    SarahMay.job = 123;
    const result = new PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "job" is invalid!',
    });
    SarahMay.job = {
      title: 'fitness coach',
      experience: 1.5,
    };
  });

  test('Property firstName is empty string', () => {
    SarahMay.firstName = '';
    const result = new PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid!',
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property job is null', () => {
    SarahMay.job = null;
    const result = new PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "job" is invalid!',
    });
  });

  test('Property job is empty Object', () => {
    SarahMay.job = {};
    const result = new PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object job does not have propery "title"!',
    });
    SarahMay.job = {
      title: 'teacher',
      experience: 5,
    };
  });

  test('Get full name', () => {
    const result = new PersonFunc(SarahMay);
    expect(result.getFullName()).toBe('Sarah May');
  });

  test('Get full address', () => {
    const result = new PersonFunc(SarahMay);
    expect(result.getFullAddress()).toBe('Spain, Seville, calle Verde, 5/2A');
  });

  test('Get age', () => {
    const result = new PersonFunc(SarahMay);
    expect(result.getAge()).toBe('29 years');
  });
});
