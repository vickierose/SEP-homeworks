import {
  PersonFunc, WorkingPersonFunc, PersonClass, WorkingPersonClass,
} from './v1tal4ik';
import { SarahMay } from './people.data';

describe('fn PersonFunc', () => {
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
      msg: 'Error : Type of property "firstName" is invalid or empty!',
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
      msg: 'Error : Type of property "firstName" is invalid or empty!',
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property job is null', () => {
    SarahMay.job = null;
    const result = new PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "job" is invalid!',
    });
    SarahMay.job = {
      title: 'teacher',
      experience: 5,
    };
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

  test('Property firstName has wrong type', () => {
    SarahMay.firstName = 123;
    const result = new PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid or empty!',
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property lastName has wrong type', () => {
    SarahMay.lastName = 123;
    const result = new PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "lastName" is invalid or empty!',
    });
    SarahMay.lastName = 'May';
  });

  test('Property birthDate has wrong type', () => {
    SarahMay.birthDate = 123;
    const result = new PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "birthDate" is invalid or empty!',
    });
    SarahMay.birthDate = '13.03.1990';
  });

  test('Property country has wrong type', () => {
    SarahMay.address.country = 123;
    const result = new PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "country" is invalid or empty!',
    });
    SarahMay.address.country = 'Spain';
  });

  test('Property title has wrong type', () => {
    SarahMay.job.title = 123;
    const result = new PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "title" is invalid or empty!',
    });
    SarahMay.job.title = 'Spain';
  });

  test('Property experience has wrong type', () => {
    SarahMay.job.experience = '123';
    const result = new PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "experience" is invalid!',
    });
    SarahMay.job.experience = 5;
  });

  test('Return obj', () => {
    const result = new PersonFunc(SarahMay);
    expect(typeof (result)).toBe('object');
  });

  test('Return obj has method getFullName()', () => {
    const result = new PersonFunc(SarahMay);
    expect(result.__proto__.hasOwnProperty('getFullName')).toBe(true);
  });

  test('Return obj has method getFullAddress()', () => {
    const result = new PersonFunc(SarahMay);
    expect(result.__proto__.hasOwnProperty('getFullAddress')).toBeTruthy();
  });

  test('Return obj has method getAge()', () => {
    const result = new PersonFunc(SarahMay);
    expect(result.__proto__.hasOwnProperty('getAge')).toBeTruthy();
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


describe('fn WorkingPersonFunc', () => {
  test('Type of argument NUMBER', () => {
    const result = new WorkingPersonFunc(123);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument STRING', () => {
    const result = new WorkingPersonFunc('123');
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument BOOLEAN', () => {
    const result = new WorkingPersonFunc(true);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument FUNCTION', () => {
    const result = new WorkingPersonFunc(() => { console.log('function'); });
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument ARRAY', () => {
    const result = new WorkingPersonFunc([]);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument UNDEFINED', () => {
    const result = new WorkingPersonFunc(undefined);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument NaN', () => {
    const result = new WorkingPersonFunc(NaN);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Argument is NULL', () => {
    const result = new WorkingPersonFunc(null);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Without argument', () => {
    const result = new WorkingPersonFunc();
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Argument is empty object', () => {
    const result = new WorkingPersonFunc({});
    expect(result).toEqual({
      msg: 'Error : Object is empty!',
    });
  });

  test('Argument has extra property', () => {
    SarahMay.extraProp = 'extraProp';
    const result = new WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object propery length = 6 and must be = 5',
    });
    delete SarahMay.extraProp;
  });

  test('Argument does not have property firstName', () => {
    delete SarahMay.firstName;
    const result = new WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object does not have propery "firstName"! ',
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Argument does not have property job', () => {
    delete SarahMay.job;
    const result = new WorkingPersonFunc(SarahMay);
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
    const result = new WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid or empty!',
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property job has wrong type', () => {
    SarahMay.job = 123;
    const result = new WorkingPersonFunc(SarahMay);
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
    const result = new WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid or empty!',
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property job is null', () => {
    SarahMay.job = null;
    const result = new WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "job" is invalid!',
    });
    SarahMay.job = {
      title: 'teacher',
      experience: 5,
    };
  });

  test('Property job is empty Object', () => {
    SarahMay.job = {};
    const result = new WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object job does not have propery "title"!',
    });
    SarahMay.job = {
      title: 'teacher',
      experience: 5,
    };
  });

  test('Property firstName has wrong type', () => {
    SarahMay.firstName = 123;
    const result = new WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid or empty!',
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property lastName has wrong type', () => {
    SarahMay.lastName = 123;
    const result = new WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "lastName" is invalid or empty!',
    });
    SarahMay.lastName = 'May';
  });

  test('Property birthDate has wrong type', () => {
    SarahMay.birthDate = 123;
    const result = new WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "birthDate" is invalid or empty!',
    });
    SarahMay.birthDate = '13.03.1990';
  });

  test('Property country has wrong type', () => {
    SarahMay.address.country = 123;
    const result = new WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "country" is invalid or empty!',
    });
    SarahMay.address.country = 'Spain';
  });

  test('Property title has wrong type', () => {
    SarahMay.job.title = 123;
    const result = new WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "title" is invalid or empty!',
    });
    SarahMay.job.title = 'Spain';
  });

  test('Property experience has wrong type', () => {
    SarahMay.job.experience = '123';
    const result = new WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "experience" is invalid!',
    });
    SarahMay.job.experience = 5;
  });

  test('Is the instance is prototype of PersonFunc', () => {
    const result = new WorkingPersonFunc(SarahMay);
    expect(PersonFunc.prototype.isPrototypeOf(result)).toBeTruthy();
  });

  test('Return obj', () => {
    const result = new WorkingPersonFunc(SarahMay);
    expect(typeof (result)).toBe('object');
  });

  test('Return obj has method getFullName()', () => {
    const result = new WorkingPersonFunc(SarahMay);
    expect(result.__proto__.__proto__.hasOwnProperty('getFullName')).toBe(true);
  });

  test('Return obj has method getFullAddress()', () => {
    const result = new WorkingPersonFunc(SarahMay);
    expect(result.__proto__.__proto__.hasOwnProperty('getFullAddress')).toBeTruthy();
  });

  test('Return obj has method getAge()', () => {
    const result = new WorkingPersonFunc(SarahMay);
    expect(result.__proto__.__proto__.hasOwnProperty('getAge')).toBeTruthy();
  });

  test('Get full name', () => {
    const result = new WorkingPersonFunc(SarahMay);
    expect(result.getFullName()).toBe('Sarah May');
  });

  test('Get full address', () => {
    const result = new WorkingPersonFunc(SarahMay);
    expect(result.getFullAddress()).toBe('Spain, Seville, calle Verde, 5/2A');
  });

  test('Get age', () => {
    const result = new WorkingPersonFunc(SarahMay);
    expect(result.getAge()).toBe('29 years');
  });

  test('Get getProfessionalNameAndRank', () => {
    const result = new WorkingPersonFunc(SarahMay);
    expect(result.getProfessionalNameAndRank()).toBe('Sarah May, Spain, job experiance 5 years');
  });
});


describe('class PersonClass', () => {
  test('Type of argument NUMBER', () => {
    const result = new PersonClass(123);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument STRING', () => {
    const result = new PersonClass('123');
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument BOOLEAN', () => {
    const result = new PersonClass(true);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument FUNCTION', () => {
    const result = new PersonClass(() => { console.log('function'); });
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument ARRAY', () => {
    const result = new PersonClass([]);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument UNDEFINED', () => {
    const result = new PersonClass(undefined);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument NaN', () => {
    const result = new PersonClass(NaN);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Argument is NULL', () => {
    const result = new PersonClass(null);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Without argument', () => {
    const result = new PersonClass();
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Argument is empty object', () => {
    const result = new PersonClass({});
    expect(result).toEqual({
      msg: 'Error : Object is empty!',
    });
  });

  test('Argument has extra property', () => {
    SarahMay.extraProp = 'extraProp';
    const result = new PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object propery length = 6 and must be = 5',
    });
    delete SarahMay.extraProp;
  });

  test('Argument does not have property firstName', () => {
    delete SarahMay.firstName;
    const result = new PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object does not have propery "firstName"! ',
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Argument does not have property job', () => {
    delete SarahMay.job;
    const result = new PersonClass(SarahMay);
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
    const result = new PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid or empty!',
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property job has wrong type', () => {
    SarahMay.job = 123;
    const result = new PersonClass(SarahMay);
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
    const result = new PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid or empty!',
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property job is null', () => {
    SarahMay.job = null;
    const result = new PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "job" is invalid!',
    });
    SarahMay.job = {
      title: 'teacher',
      experience: 5,
    };
  });

  test('Property job is empty Object', () => {
    SarahMay.job = {};
    const result = new PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object job does not have propery "title"!',
    });
    SarahMay.job = {
      title: 'teacher',
      experience: 5,
    };
  });

  test('Property firstName has wrong type', () => {
    SarahMay.firstName = 123;
    const result = new PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid or empty!',
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property lastName has wrong type', () => {
    SarahMay.lastName = 123;
    const result = new PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "lastName" is invalid or empty!',
    });
    SarahMay.lastName = 'May';
  });

  test('Property birthDate has wrong type', () => {
    SarahMay.birthDate = 123;
    const result = new PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "birthDate" is invalid or empty!',
    });
    SarahMay.birthDate = '13.03.1990';
  });

  test('Property country has wrong type', () => {
    SarahMay.address.country = 123;
    const result = new PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "country" is invalid or empty!',
    });
    SarahMay.address.country = 'Spain';
  });

  test('Property title has wrong type', () => {
    SarahMay.job.title = 123;
    const result = new PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "title" is invalid or empty!',
    });
    SarahMay.job.title = 'Spain';
  });

  test('Property experience has wrong type', () => {
    SarahMay.job.experience = '123';
    const result = new PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "experience" is invalid!',
    });
    SarahMay.job.experience = 5;
  });

  test('Return obj', () => {
    const result = new PersonClass(SarahMay);
    expect(typeof (result)).toBe('object');
  });

  test('Return obj has method getFullName()', () => {
    const result = new PersonClass(SarahMay);
    expect(result.__proto__.hasOwnProperty('getFullName')).toBe(true);
  });

  test('Return obj has method getFullAddress()', () => {
    const result = new PersonClass(SarahMay);
    expect(result.__proto__.hasOwnProperty('getFullAddress')).toBeTruthy();
  });

  test('Return obj has method getAge()', () => {
    const result = new PersonClass(SarahMay);
    expect(result.__proto__.hasOwnProperty('getAge')).toBeTruthy();
  });

  test('Get full name', () => {
    const result = new PersonClass(SarahMay);
    expect(result.getFullName()).toBe('Sarah May');
  });

  test('Get full address', () => {
    const result = new PersonClass(SarahMay);
    expect(result.getFullAddress()).toBe('Spain, Seville, calle Verde, 5/2A');
  });

  test('Get age', () => {
    const result = new PersonClass(SarahMay);
    expect(result.getAge()).toBe('29 years');
  });
});


describe('fn WorkingPersonClass', () => {
  test('Type of argument NUMBER', () => {
    const result = new WorkingPersonClass(123);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument STRING', () => {
    const result = new WorkingPersonClass('123');
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument BOOLEAN', () => {
    const result = new WorkingPersonClass(true);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument FUNCTION', () => {
    const result = new WorkingPersonClass(() => { console.log('function'); });
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument ARRAY', () => {
    const result = new WorkingPersonClass([]);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument UNDEFINED', () => {
    const result = new WorkingPersonClass(undefined);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Type of argument NaN', () => {
    const result = new WorkingPersonClass(NaN);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Argument is NULL', () => {
    const result = new WorkingPersonClass(null);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Without argument', () => {
    const result = new WorkingPersonClass();
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!',
    });
  });

  test('Argument is empty object', () => {
    const result = new WorkingPersonClass({});
    expect(result).toEqual({
      msg: 'Error : Object is empty!',
    });
  });

  test('Argument has extra property', () => {
    SarahMay.extraProp = 'extraProp';
    const result = new WorkingPersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object propery length = 6 and must be = 5',
    });
    delete SarahMay.extraProp;
  });

  test('Argument does not have property firstName', () => {
    delete SarahMay.firstName;
    const result = new WorkingPersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object does not have propery "firstName"! ',
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Argument does not have property job', () => {
    delete SarahMay.job;
    const result = new WorkingPersonClass(SarahMay);
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
    const result = new WorkingPersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid or empty!',
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property job has wrong type', () => {
    SarahMay.job = 123;
    const result = new WorkingPersonClass(SarahMay);
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
    const result = new WorkingPersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid or empty!',
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property job is null', () => {
    SarahMay.job = null;
    const result = new WorkingPersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "job" is invalid!',
    });
    SarahMay.job = {
      title: 'teacher',
      experience: 5,
    };
  });

  test('Property job is empty Object', () => {
    SarahMay.job = {};
    const result = new WorkingPersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object job does not have propery "title"!',
    });
    SarahMay.job = {
      title: 'teacher',
      experience: 5,
    };
  });

  test('Property firstName has wrong type', () => {
    SarahMay.firstName = 123;
    const result = new WorkingPersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid or empty!',
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property lastName has wrong type', () => {
    SarahMay.lastName = 123;
    const result = new WorkingPersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "lastName" is invalid or empty!',
    });
    SarahMay.lastName = 'May';
  });

  test('Property birthDate has wrong type', () => {
    SarahMay.birthDate = 123;
    const result = new WorkingPersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "birthDate" is invalid or empty!',
    });
    SarahMay.birthDate = '13.03.1990';
  });

  test('Property country has wrong type', () => {
    SarahMay.address.country = 123;
    const result = new WorkingPersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "country" is invalid or empty!',
    });
    SarahMay.address.country = 'Spain';
  });

  test('Property title has wrong type', () => {
    SarahMay.job.title = 123;
    const result = new WorkingPersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "title" is invalid or empty!',
    });
    SarahMay.job.title = 'Spain';
  });

  test('Property experience has wrong type', () => {
    SarahMay.job.experience = '123';
    const result = new WorkingPersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "experience" is invalid!',
    });
    SarahMay.job.experience = 5;
  });

  test('Is the instance is prototype of PersonClass', () => {
    const result = new WorkingPersonClass(SarahMay);
    expect(PersonClass.prototype.isPrototypeOf(result)).toBeTruthy();
  });

  test('Return obj', () => {
    const result = new WorkingPersonClass(SarahMay);
    expect(typeof (result)).toBe('object');
  });

  test('Return obj has method getFullName()', () => {
    const result = new WorkingPersonClass(SarahMay);
    expect(result.__proto__.__proto__.hasOwnProperty('getFullName')).toBe(true);
  });

  test('Return obj has method getFullAddress()', () => {
    const result = new WorkingPersonClass(SarahMay);
    expect(result.__proto__.__proto__.hasOwnProperty('getFullAddress')).toBeTruthy();
  });

  test('Return obj has method getAge()', () => {
    const result = new WorkingPersonClass(SarahMay);
    expect(result.__proto__.__proto__.hasOwnProperty('getAge')).toBeTruthy();
  });

  test('Get full name', () => {
    const result = new WorkingPersonClass(SarahMay);
    expect(result.getFullName()).toBe('Sarah May');
  });

  test('Get full address', () => {
    const result = new WorkingPersonClass(SarahMay);
    expect(result.getFullAddress()).toBe('Spain, Seville, calle Verde, 5/2A');
  });

  test('Get age', () => {
    const result = new WorkingPersonClass(SarahMay);
    expect(result.getAge()).toBe('29 years');
  });

  test('Get getProfessionalNameAndRank', () => {
    const result = new WorkingPersonClass(SarahMay);
    expect(result.getProfessionalNameAndRank()).toBe('Sarah May, Spain, job experiance 5 years');
  });
});
