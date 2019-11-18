// eslint-disable-next-line max-classes-per-file
import validateObj from './helperFunc';
import * as objUsers from './people.data';

// 1. write a constructor function `PersonFunc` whith methods : getFullName() getAge() getFullAddress();
const PersonFunc = function (obj) {
  const { isObjHasAllProperty, isObjPropertyTypeRight, msg } = validateObj(obj);
  if (!isObjHasAllProperty || !isObjPropertyTypeRight) {
    return { msg };
  }
  this.person = obj;
};


PersonFunc.prototype.getFullName = function () { return `${this.person.firstName} ${this.person.lastName}`; };
PersonFunc.prototype.getFullAddress = function () {
  const { country, city, street, house, apartment } = this.person.address;
  return `${country}, ${city}, ${street}, ${house}/${apartment}`;
};
PersonFunc.prototype.getAge = function () {
  const nowYear = new Date().getFullYear();
  const birthYear = this.person.birthDate.split('.').pop();
  return `${nowYear - birthYear} years`;
};


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
    const {job: { title, experience } } = this.person;
  return `${this.getFullName(this)}, ${title}, job experiance ${experience} years`;
};


// 3. write a class `PersonClass` which has the same functionality as `PersonFunc` constructor function.
class PersonClass {
  constructor(obj) {
    const { isObjHasAllProperty, isObjPropertyTypeRight, msg } = validateObj(obj);
    if (!isObjHasAllProperty || !isObjPropertyTypeRight) {
      return { msg };
    }
    this.person = obj;
  }

  getFullName() {
    return `${this.person.firstName} ${this.person.lastName}`;
  }

  getFullAddress() {
    const {
      country, city, street, house, apartment,
    } = this.person.address;
    return `${country}, ${city}, ${street}, ${house}/${apartment}`;
  }

  getAge() {
    const nowYear = new Date().getFullYear();
    const birthYear = this.person.birthDate.split('.').pop();
    return `${nowYear - birthYear} years`;
  }
}


// 4. write a class `WorkingPersonClass` which inherits from `PersonClass` and has the same functionality as `WorkingPersonFunc`.
class WorkingPersonClass extends PersonClass {
  // eslint-disable-next-line no-useless-constructor
  constructor(obj) {
    super(obj);
  }

  getProfessionalNameAndRank() {
    const {job: { title, experience } } = this.person;
  return `${this.getFullName(this)}, ${title}, job experiance ${experience} years`;
  }
}

// 5. create a few instances of each class and call the methods to check whether they work correctly. You can use objects from `people.data.js` for check.
console.log('********* PersonFunc ********** ');
Object.keys(objUsers).forEach((user) => {
  const instanceOfPersonFunc = new PersonFunc(objUsers[`${user}`]);
  console.log(`${user} ${instanceOfPersonFunc.msg}`);
  if (instanceOfPersonFunc.person) {
    console.log('* getFullName :', instanceOfPersonFunc.getFullName());
    console.log('* getFullAddress :', instanceOfPersonFunc.getFullAddress());
    console.log('* getAge :', instanceOfPersonFunc.getAge());
  }
});


console.log('\n', '********* WorkingPersonFunc ********** ');
Object.keys(objUsers).forEach((user) => {
  const instanceOfWorkingPersonFunc = new WorkingPersonFunc(objUsers[`${user}`]);
  console.log(`${user} ${instanceOfWorkingPersonFunc.msg}`);
  if (instanceOfWorkingPersonFunc.person) {
    console.log('* getFullName :', instanceOfWorkingPersonFunc.getFullName());
    console.log('* getFullAddress :', instanceOfWorkingPersonFunc.getFullAddress());
    console.log('* getAge :', instanceOfWorkingPersonFunc.getAge());
    console.log('* getProfessionalNameAndRank :', instanceOfWorkingPersonFunc.getProfessionalNameAndRank());
  }
});


console.log('\n', '********* PersonClass ********** ');
Object.keys(objUsers).forEach((user) => {
  const instanceOfPersonClass = new PersonClass(objUsers[`${user}`]);
  console.log(`${user} ${instanceOfPersonClass.msg}`);
  if (instanceOfPersonClass.person) {
    console.log('* getFullName :', instanceOfPersonClass.getFullName());
    console.log('* getFullAddress :', instanceOfPersonClass.getFullAddress());
    console.log('* getAge :', instanceOfPersonClass.getAge());
  }
});


console.log('\n', '********* WorkingPersonClass ********** ');
Object.keys(objUsers).forEach((user) => {
  const instanceOfWorkingPersonClass = new WorkingPersonClass(objUsers[`${user}`]);
  console.log(`${user} ${instanceOfWorkingPersonClass.msg}`);
  if (instanceOfWorkingPersonClass.person) {
    console.log('* getFullName :', instanceOfWorkingPersonClass.getFullName());
    console.log('* getFullAddress :', instanceOfWorkingPersonClass.getFullAddress());
    console.log('* getAge :', instanceOfWorkingPersonClass.getAge());
    console.log('* getProfessionalNameAndRank :', instanceOfWorkingPersonClass.getProfessionalNameAndRank());
  }
});

console.log('\n', '********* Custom Person ********** ');
const customPerson = new WorkingPersonClass({
  firstName: 'Vitaliy',
  lastName: 'Suhodolskiy',
  birthDate: '24.09.1998',
  address: {
    country: 'Ukraine',
    city: 'Ternopil',
    street: 'Lychakivska',
    house: '11',
    apartment: '58',
  },
  job: {
    title: 'trainee frontend dev',
    experience: 0.5,
  },
});
console.log('* getFullName :', customPerson.getFullName());
console.log('* getFullAddress :', customPerson.getFullAddress());
console.log('* getAge :', customPerson.getAge());
console.log('* getProfessionalNameAndRank :', customPerson.getProfessionalNameAndRank());

export {
  PersonFunc,
  WorkingPersonFunc,
  PersonClass,
  WorkingPersonClass,
};
