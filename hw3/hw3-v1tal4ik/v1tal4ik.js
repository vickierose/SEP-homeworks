// 1. write a constructor function `PersonFunc` whith methods : getFullName() getAge() getFullAddress();
const validateObj = require('./helperFunc');

const PersonFunc = function (obj) {
  if (typeof (obj) !== 'object') {
    console.error('Error : Wrong type of argument!');
    return {
      msg: 'Error : Wrong type of argument!',
    };
  }
  if (obj === null || Object.getPrototypeOf(obj).constructor.name.toLowerCase() !== 'object') {
    console.error('Error : Wrong type of argument!');
    return {
      msg: 'Error : Wrong type of argument!',
    };
  }
  if (Object.keys(obj).length === 0) {
    console.error('Error : Object is empty');
    return {
      msg: 'Error : Object is empty!',
    };
  }
  if (!new.target) {
    console.warn('Use operator "new" for the next call PersonFunc()');
    return new PersonFunc(obj);
  }
  const { isObjHasAllProperty, isObjPropertyTypeRight, msg } = validateObj(obj);
  // console.log(isObjHasAllProperty, isObjPropertyTypeRight, msg);
  if (!isObjHasAllProperty || !isObjPropertyTypeRight) {
    return { msg };
  }

  this.person = obj;
  this.getFullName = () => `${this.person.firstName} ${this.person.lastName}`;
  this.getFullAddress = () => `${this.person.address.country}, ${this.person.address.city}, ${this.person.address.street}, ${this.person.address.house}/${this.person.address.apartment}`;
  this.getAge = () => {
    const nowYear = new Date().getFullYear();
    const birthYear = this.person.birthDate.split('.').pop();
    return `${nowYear - birthYear} years`;
  };
};

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

// delete Elizabeth.job.title;
// Elizabeth.job = {};
// SarahMay.extraProp = 'extraProp';
// Elizabeth.birthDate = 5;
const person = new PersonFunc(SarahMay);
console.log(person.getFullName());


// 2. write a constructor function `WorkingPersonFunc` which inherits from `PersonFunc` and has extra method: getProfessionalNameAndRank();


// 3. write a class `PersonClass` which has the same functionality as `PersonFunc` constructor function.


// 4. write a class `WorkingPersonClass` which inherits from `PersonClass` and has the same functionality as `WorkingPersonFunc`.


// 5. create a few instances of each class and call the methods to check whether they work correctly. You can use objects from `people.data.js` for check.

module.exports = {
  PersonFunc,
};
