'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // const {
//   PersonFunc, WorkingPersonFunc, PersonClass, WorkingPersonClass,
// } = require('./v1tal4ik');


var _v1tal4ik = require('./v1tal4ik.js');

var _require = require('./people.data'),
    SarahMay = _require.SarahMay;

describe('fn PersonFunc', function () {
  test('Type of argument NUMBER', function () {
    var result = new _v1tal4ik.PersonFunc(123);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument STRING', function () {
    var result = new _v1tal4ik.PersonFunc('123');
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument BOOLEAN', function () {
    var result = new _v1tal4ik.PersonFunc(true);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument FUNCTION', function () {
    var result = new _v1tal4ik.PersonFunc(function () {
      console.log('function');
    });
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument ARRAY', function () {
    var result = new _v1tal4ik.PersonFunc([]);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument UNDEFINED', function () {
    var result = new _v1tal4ik.PersonFunc(undefined);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument NaN', function () {
    var result = new _v1tal4ik.PersonFunc(NaN);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Argument is NULL', function () {
    var result = new _v1tal4ik.PersonFunc(null);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Without argument', function () {
    var result = new _v1tal4ik.PersonFunc();
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Argument is empty object', function () {
    var result = new _v1tal4ik.PersonFunc({});
    expect(result).toEqual({
      msg: 'Error : Object is empty!'
    });
  });

  test('Argument has extra property', function () {
    SarahMay.extraProp = 'extraProp';
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object propery length = 6 and must be = 5'
    });
    delete SarahMay.extraProp;
  });

  test('Argument does not have property firstName', function () {
    delete SarahMay.firstName;
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object does not have propery "firstName"! '
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Argument does not have property job', function () {
    delete SarahMay.job;
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object does not have propery "job"! '
    });
    SarahMay.job = {
      title: 'fitness coach',
      experience: 1.5
    };
  });

  test('Property firstName has wrong type', function () {
    SarahMay.firstName = 123;
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid!'
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property job has wrong type', function () {
    SarahMay.job = 123;
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "job" is invalid!'
    });
    SarahMay.job = {
      title: 'fitness coach',
      experience: 1.5
    };
  });

  test('Property firstName is empty string', function () {
    SarahMay.firstName = '';
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid!'
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property job is null', function () {
    SarahMay.job = null;
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "job" is invalid!'
    });
    SarahMay.job = {
      title: 'teacher',
      experience: 5
    };
  });

  test('Property job is empty Object', function () {
    SarahMay.job = {};
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object job does not have propery "title"!'
    });
    SarahMay.job = {
      title: 'teacher',
      experience: 5
    };
  });

  test('Property firstName has wrong type', function () {
    SarahMay.firstName = 123;
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid!'
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property lastName has wrong type', function () {
    SarahMay.lastName = 123;
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "lastName" is invalid!'
    });
    SarahMay.lastName = 'May';
  });

  test('Property birthDate has wrong type', function () {
    SarahMay.birthDate = 123;
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "birthDate" is invalid!'
    });
    SarahMay.birthDate = '13.03.1990';
  });

  test('Property country has wrong type', function () {
    SarahMay.address.country = 123;
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "country" is invalid!'
    });
    SarahMay.address.country = 'Spain';
  });

  test('Property title has wrong type', function () {
    SarahMay.job.title = 123;
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "title" is invalid!'
    });
    SarahMay.job.title = 'Spain';
  });

  test('Property experience has wrong type', function () {
    SarahMay.job.experience = '123';
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "experience" is invalid!'
    });
    SarahMay.job.experience = 5;
  });

  test('Return obj', function () {
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(typeof result === 'undefined' ? 'undefined' : _typeof(result)).toBe('object');
  });

  test('Return obj has method getFullName()', function () {
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result.__proto__.hasOwnProperty('getFullName')).toBe(true);
  });

  test('Return obj has method getFullAddress()', function () {
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result.__proto__.hasOwnProperty('getFullAddress')).toBeTruthy();
  });

  test('Return obj has method getAge()', function () {
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result.__proto__.hasOwnProperty('getAge')).toBeTruthy();
  });

  test('Get full name', function () {
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result.getFullName()).toBe('Sarah May');
  });

  test('Get full address', function () {
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result.getFullAddress()).toBe('Spain, Seville, calle Verde, 5/2A');
  });

  test('Get age', function () {
    var result = new _v1tal4ik.PersonFunc(SarahMay);
    expect(result.getAge()).toBe('29 years');
  });
});

describe('fn WorkingPersonFunc', function () {
  test('Type of argument NUMBER', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(123);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument STRING', function () {
    var result = new _v1tal4ik.WorkingPersonFunc('123');
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument BOOLEAN', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(true);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument FUNCTION', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(function () {
      console.log('function');
    });
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument ARRAY', function () {
    var result = new _v1tal4ik.WorkingPersonFunc([]);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument UNDEFINED', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(undefined);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument NaN', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(NaN);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Argument is NULL', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(null);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Without argument', function () {
    var result = new _v1tal4ik.WorkingPersonFunc();
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Argument is empty object', function () {
    var result = new _v1tal4ik.WorkingPersonFunc({});
    expect(result).toEqual({
      msg: 'Error : Object is empty!'
    });
  });

  test('Argument has extra property', function () {
    SarahMay.extraProp = 'extraProp';
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object propery length = 6 and must be = 5'
    });
    delete SarahMay.extraProp;
  });

  test('Argument does not have property firstName', function () {
    delete SarahMay.firstName;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object does not have propery "firstName"! '
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Argument does not have property job', function () {
    delete SarahMay.job;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object does not have propery "job"! '
    });
    SarahMay.job = {
      title: 'fitness coach',
      experience: 1.5
    };
  });

  test('Property firstName has wrong type', function () {
    SarahMay.firstName = 123;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid!'
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property job has wrong type', function () {
    SarahMay.job = 123;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "job" is invalid!'
    });
    SarahMay.job = {
      title: 'fitness coach',
      experience: 1.5
    };
  });

  test('Property firstName is empty string', function () {
    SarahMay.firstName = '';
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid!'
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property job is null', function () {
    SarahMay.job = null;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "job" is invalid!'
    });
    SarahMay.job = {
      title: 'teacher',
      experience: 5
    };
  });

  test('Property job is empty Object', function () {
    SarahMay.job = {};
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object job does not have propery "title"!'
    });
    SarahMay.job = {
      title: 'teacher',
      experience: 5
    };
  });

  test('Property firstName has wrong type', function () {
    SarahMay.firstName = 123;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid!'
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property lastName has wrong type', function () {
    SarahMay.lastName = 123;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "lastName" is invalid!'
    });
    SarahMay.lastName = 'May';
  });

  test('Property birthDate has wrong type', function () {
    SarahMay.birthDate = 123;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "birthDate" is invalid!'
    });
    SarahMay.birthDate = '13.03.1990';
  });

  test('Property country has wrong type', function () {
    SarahMay.address.country = 123;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "country" is invalid!'
    });
    SarahMay.address.country = 'Spain';
  });

  test('Property title has wrong type', function () {
    SarahMay.job.title = 123;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "title" is invalid!'
    });
    SarahMay.job.title = 'Spain';
  });

  test('Property experience has wrong type', function () {
    SarahMay.job.experience = '123';
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "experience" is invalid!'
    });
    SarahMay.job.experience = 5;
  });

  test('Is the instance is prototype of PersonFunc', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(_v1tal4ik.PersonFunc.prototype.isPrototypeOf(result)).toBeTruthy();
  });

  test('Return obj', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(typeof result === 'undefined' ? 'undefined' : _typeof(result)).toBe('object');
  });

  test('Return obj has method getFullName()', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result.__proto__.__proto__.hasOwnProperty('getFullName')).toBe(true);
  });

  test('Return obj has method getFullAddress()', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result.__proto__.__proto__.hasOwnProperty('getFullAddress')).toBeTruthy();
  });

  test('Return obj has method getAge()', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result.__proto__.__proto__.hasOwnProperty('getAge')).toBeTruthy();
  });

  test('Get full name', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result.getFullName()).toBe('Sarah May');
  });

  test('Get full address', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result.getFullAddress()).toBe('Spain, Seville, calle Verde, 5/2A');
  });

  test('Get age', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result.getAge()).toBe('29 years');
  });

  test('Get getProfessionalNameAndRank', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result.getProfessionalNameAndRank()).toBe('Sarah May, Spain, job experiance 5 years');
  });
});

describe('class PersonClass', function () {
  test('Type of argument NUMBER', function () {
    var result = new _v1tal4ik.PersonClass(123);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument STRING', function () {
    var result = new _v1tal4ik.PersonClass('123');
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument BOOLEAN', function () {
    var result = new _v1tal4ik.PersonClass(true);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument FUNCTION', function () {
    var result = new _v1tal4ik.PersonClass(function () {
      console.log('function');
    });
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument ARRAY', function () {
    var result = new _v1tal4ik.PersonClass([]);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument UNDEFINED', function () {
    var result = new _v1tal4ik.PersonClass(undefined);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument NaN', function () {
    var result = new _v1tal4ik.PersonClass(NaN);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Argument is NULL', function () {
    var result = new _v1tal4ik.PersonClass(null);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Without argument', function () {
    var result = new _v1tal4ik.PersonClass();
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Argument is empty object', function () {
    var result = new _v1tal4ik.PersonClass({});
    expect(result).toEqual({
      msg: 'Error : Object is empty!'
    });
  });

  test('Argument has extra property', function () {
    SarahMay.extraProp = 'extraProp';
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object propery length = 6 and must be = 5'
    });
    delete SarahMay.extraProp;
  });

  test('Argument does not have property firstName', function () {
    delete SarahMay.firstName;
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object does not have propery "firstName"! '
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Argument does not have property job', function () {
    delete SarahMay.job;
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object does not have propery "job"! '
    });
    SarahMay.job = {
      title: 'fitness coach',
      experience: 1.5
    };
  });

  test('Property firstName has wrong type', function () {
    SarahMay.firstName = 123;
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid!'
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property job has wrong type', function () {
    SarahMay.job = 123;
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "job" is invalid!'
    });
    SarahMay.job = {
      title: 'fitness coach',
      experience: 1.5
    };
  });

  test('Property firstName is empty string', function () {
    SarahMay.firstName = '';
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid!'
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property job is null', function () {
    SarahMay.job = null;
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "job" is invalid!'
    });
    SarahMay.job = {
      title: 'teacher',
      experience: 5
    };
  });

  test('Property job is empty Object', function () {
    SarahMay.job = {};
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object job does not have propery "title"!'
    });
    SarahMay.job = {
      title: 'teacher',
      experience: 5
    };
  });

  test('Property firstName has wrong type', function () {
    SarahMay.firstName = 123;
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid!'
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property lastName has wrong type', function () {
    SarahMay.lastName = 123;
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "lastName" is invalid!'
    });
    SarahMay.lastName = 'May';
  });

  test('Property birthDate has wrong type', function () {
    SarahMay.birthDate = 123;
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "birthDate" is invalid!'
    });
    SarahMay.birthDate = '13.03.1990';
  });

  test('Property country has wrong type', function () {
    SarahMay.address.country = 123;
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "country" is invalid!'
    });
    SarahMay.address.country = 'Spain';
  });

  test('Property title has wrong type', function () {
    SarahMay.job.title = 123;
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "title" is invalid!'
    });
    SarahMay.job.title = 'Spain';
  });

  test('Property experience has wrong type', function () {
    SarahMay.job.experience = '123';
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "experience" is invalid!'
    });
    SarahMay.job.experience = 5;
  });

  test('Return obj', function () {
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(typeof result === 'undefined' ? 'undefined' : _typeof(result)).toBe('object');
  });

  test('Return obj has method getFullName()', function () {
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result.__proto__.hasOwnProperty('getFullName')).toBe(true);
  });

  test('Return obj has method getFullAddress()', function () {
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result.__proto__.hasOwnProperty('getFullAddress')).toBeTruthy();
  });

  test('Return obj has method getAge()', function () {
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result.__proto__.hasOwnProperty('getAge')).toBeTruthy();
  });

  test('Get full name', function () {
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result.getFullName()).toBe('Sarah May');
  });

  test('Get full address', function () {
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result.getFullAddress()).toBe('Spain, Seville, calle Verde, 5/2A');
  });

  test('Get age', function () {
    var result = new _v1tal4ik.PersonClass(SarahMay);
    expect(result.getAge()).toBe('29 years');
  });
});

describe('fn WorkingPersonFunc', function () {
  test('Type of argument NUMBER', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(123);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument STRING', function () {
    var result = new _v1tal4ik.WorkingPersonFunc('123');
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument BOOLEAN', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(true);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument FUNCTION', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(function () {
      console.log('function');
    });
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument ARRAY', function () {
    var result = new _v1tal4ik.WorkingPersonFunc([]);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument UNDEFINED', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(undefined);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Type of argument NaN', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(NaN);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Argument is NULL', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(null);
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Without argument', function () {
    var result = new _v1tal4ik.WorkingPersonFunc();
    expect(result).toEqual({
      msg: 'Error : Wrong type of argument!'
    });
  });

  test('Argument is empty object', function () {
    var result = new _v1tal4ik.WorkingPersonFunc({});
    expect(result).toEqual({
      msg: 'Error : Object is empty!'
    });
  });

  test('Argument has extra property', function () {
    SarahMay.extraProp = 'extraProp';
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object propery length = 6 and must be = 5'
    });
    delete SarahMay.extraProp;
  });

  test('Argument does not have property firstName', function () {
    delete SarahMay.firstName;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object does not have propery "firstName"! '
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Argument does not have property job', function () {
    delete SarahMay.job;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object does not have propery "job"! '
    });
    SarahMay.job = {
      title: 'fitness coach',
      experience: 1.5
    };
  });

  test('Property firstName has wrong type', function () {
    SarahMay.firstName = 123;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid!'
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property job has wrong type', function () {
    SarahMay.job = 123;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "job" is invalid!'
    });
    SarahMay.job = {
      title: 'fitness coach',
      experience: 1.5
    };
  });

  test('Property firstName is empty string', function () {
    SarahMay.firstName = '';
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid!'
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property job is null', function () {
    SarahMay.job = null;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "job" is invalid!'
    });
    SarahMay.job = {
      title: 'teacher',
      experience: 5
    };
  });

  test('Property job is empty Object', function () {
    SarahMay.job = {};
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Object job does not have propery "title"!'
    });
    SarahMay.job = {
      title: 'teacher',
      experience: 5
    };
  });

  test('Property firstName has wrong type', function () {
    SarahMay.firstName = 123;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "firstName" is invalid!'
    });
    SarahMay.firstName = 'Sarah';
  });

  test('Property lastName has wrong type', function () {
    SarahMay.lastName = 123;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "lastName" is invalid!'
    });
    SarahMay.lastName = 'May';
  });

  test('Property birthDate has wrong type', function () {
    SarahMay.birthDate = 123;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "birthDate" is invalid!'
    });
    SarahMay.birthDate = '13.03.1990';
  });

  test('Property country has wrong type', function () {
    SarahMay.address.country = 123;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "country" is invalid!'
    });
    SarahMay.address.country = 'Spain';
  });

  test('Property title has wrong type', function () {
    SarahMay.job.title = 123;
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "title" is invalid!'
    });
    SarahMay.job.title = 'Spain';
  });

  test('Property experience has wrong type', function () {
    SarahMay.job.experience = '123';
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result).toEqual({
      msg: 'Error : Type of property "experience" is invalid!'
    });
    SarahMay.job.experience = 5;
  });

  test('Is the instance is prototype of PersonFunc', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(_v1tal4ik.PersonFunc.prototype.isPrototypeOf(result)).toBeTruthy();
  });

  test('Return obj', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(typeof result === 'undefined' ? 'undefined' : _typeof(result)).toBe('object');
  });

  test('Return obj has method getFullName()', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result.__proto__.__proto__.hasOwnProperty('getFullName')).toBe(true);
  });

  test('Return obj has method getFullAddress()', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result.__proto__.__proto__.hasOwnProperty('getFullAddress')).toBeTruthy();
  });

  test('Return obj has method getAge()', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result.__proto__.__proto__.hasOwnProperty('getAge')).toBeTruthy();
  });

  test('Get full name', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result.getFullName()).toBe('Sarah May');
  });

  test('Get full address', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result.getFullAddress()).toBe('Spain, Seville, calle Verde, 5/2A');
  });

  test('Get age', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result.getAge()).toBe('29 years');
  });

  test('Get getProfessionalNameAndRank', function () {
    var result = new _v1tal4ik.WorkingPersonFunc(SarahMay);
    expect(result.getProfessionalNameAndRank()).toBe('Sarah May, Spain, job experiance 5 years');
  });
});