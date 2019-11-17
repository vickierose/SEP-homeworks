// 1. write a constructor function `PersonFunc` whith methods : getFullName() getAge() getFullAddress();
const validateObj = require('./helperFunc');
const { SarahMay, JeremieBrown, Elizabeth } = require('./people.data');


const PersonFunc = function (obj) {
  const { isObjHasAllProperty, isObjPropertyTypeRight, msg } = validateObj(obj);
  if (!isObjHasAllProperty || !isObjPropertyTypeRight) {
    return { msg };
  }
  this.person = obj;
};


PersonFunc.prototype.getFullName = function () { return `${this.person.firstName} ${this.person.lastName}`; };
PersonFunc.prototype.getFullAddress = function () { return `${this.person.address.country}, ${this.person.address.city}, ${this.person.address.street}, ${this.person.address.house}/${this.person.address.apartment}`; };
PersonFunc.prototype.getAge = function () {
  const nowYear = new Date().getFullYear();
  const birthYear = this.person.birthDate.split('.').pop();
  return `${nowYear - birthYear} years`;
};

const teacher = new PersonFunc(SarahMay);
console.log(teacher.getFullName());
console.log(teacher.getFullAddress());
console.log(teacher.getAge());
const manager = new PersonFunc(JeremieBrown);
console.log(manager);
const trainer = new PersonFunc(Elizabeth);
console.log(trainer);


// 2. write a constructor function `WorkingPersonFunc` which inherits from `PersonFunc` and has extra method: getProfessionalNameAndRank();
const WorkingPersonFunc = function (obj) {
  const result = PersonFunc.call(this, obj);
  if (!(result === undefined)) {
    return result;
  }
};


WorkingPersonFunc.prototype = Object.create(PersonFunc.prototype);
WorkingPersonFunc.prototype.constructor = WorkingPersonFunc;
WorkingPersonFunc.prototype.getProfessionalNameAndRank = function () {
  const { firstName, lastName, job: { title, experience } } = this.person;
  return `${firstName} ${lastName}, ${title}, job experiance ${experience} years`;
};

const developer = new WorkingPersonFunc(SarahMay);
console.log(developer.getProfessionalNameAndRank());


// 3. write a class `PersonClass` which has the same functionality as `PersonFunc` constructor function.


// 4. write a class `WorkingPersonClass` which inherits from `PersonClass` and has the same functionality as `WorkingPersonFunc`.


// 5. create a few instances of each class and call the methods to check whether they work correctly. You can use objects from `people.data.js` for check.

module.exports = {
  PersonFunc,
  WorkingPersonFunc,
};
