'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkingPersonClass = exports.PersonClass = exports.WorkingPersonFunc = exports.PersonFunc = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // eslint-disable-next-line max-classes-per-file


var _helperFunc = require('./helperFunc');

var _helperFunc2 = _interopRequireDefault(_helperFunc);

var _people = require('./people.data');

var objUsers = _interopRequireWildcard(_people);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 1. write a constructor function `PersonFunc` whith methods : getFullName() getAge() getFullAddress();
var PersonFunc = function PersonFunc(obj) {
  var _validateObj = (0, _helperFunc2.default)(obj),
      isObjHasAllProperty = _validateObj.isObjHasAllProperty,
      isObjPropertyTypeRight = _validateObj.isObjPropertyTypeRight,
      msg = _validateObj.msg;

  if (!isObjHasAllProperty || !isObjPropertyTypeRight) {
    return { msg: msg };
  }
  this.person = obj;
};

PersonFunc.prototype.getFullName = function () {
  return this.person.firstName + ' ' + this.person.lastName;
};
PersonFunc.prototype.getFullAddress = function () {
  return this.person.address.country + ', ' + this.person.address.city + ', ' + this.person.address.street + ', ' + this.person.address.house + '/' + this.person.address.apartment;
};
PersonFunc.prototype.getAge = function () {
  var nowYear = new Date().getFullYear();
  var birthYear = this.person.birthDate.split('.').pop();
  return nowYear - birthYear + ' years';
};

// 2. write a constructor function `WorkingPersonFunc` which inherits from `PersonFunc` and has extra method: getProfessionalNameAndRank();
var WorkingPersonFunc = function WorkingPersonFunc(obj) {
  var result = PersonFunc.call(this, obj);
  if (!(result === undefined)) {
    return result;
  }
};

WorkingPersonFunc.prototype = Object.create(PersonFunc.prototype);
WorkingPersonFunc.prototype.constructor = WorkingPersonFunc;
WorkingPersonFunc.prototype.getProfessionalNameAndRank = function () {
  var _person = this.person,
      firstName = _person.firstName,
      lastName = _person.lastName,
      _person$job = _person.job,
      title = _person$job.title,
      experience = _person$job.experience;

  return firstName + ' ' + lastName + ', ' + title + ', job experiance ' + experience + ' years';
};

// 3. write a class `PersonClass` which has the same functionality as `PersonFunc` constructor function.

var PersonClass = function () {
  function PersonClass(obj) {
    _classCallCheck(this, PersonClass);

    var _validateObj2 = (0, _helperFunc2.default)(obj),
        isObjHasAllProperty = _validateObj2.isObjHasAllProperty,
        isObjPropertyTypeRight = _validateObj2.isObjPropertyTypeRight,
        msg = _validateObj2.msg;

    if (!isObjHasAllProperty || !isObjPropertyTypeRight) {
      return { msg: msg };
    }
    this.person = obj;
  }

  _createClass(PersonClass, [{
    key: 'getFullName',
    value: function getFullName() {
      return this.person.firstName + ' ' + this.person.lastName;
    }
  }, {
    key: 'getFullAddress',
    value: function getFullAddress() {
      var _person$address = this.person.address,
          country = _person$address.country,
          city = _person$address.city,
          street = _person$address.street,
          house = _person$address.house,
          apartment = _person$address.apartment;

      return country + ', ' + city + ', ' + street + ', ' + house + '/' + apartment;
    }
  }, {
    key: 'getAge',
    value: function getAge() {
      var nowYear = new Date().getFullYear();
      var birthYear = this.person.birthDate.split('.').pop();
      return nowYear - birthYear + ' years';
    }
  }]);

  return PersonClass;
}();

// 4. write a class `WorkingPersonClass` which inherits from `PersonClass` and has the same functionality as `WorkingPersonFunc`.


var WorkingPersonClass = function (_PersonClass) {
  _inherits(WorkingPersonClass, _PersonClass);

  // eslint-disable-next-line no-useless-constructor
  function WorkingPersonClass(obj) {
    _classCallCheck(this, WorkingPersonClass);

    return _possibleConstructorReturn(this, (WorkingPersonClass.__proto__ || Object.getPrototypeOf(WorkingPersonClass)).call(this, obj));
  }

  _createClass(WorkingPersonClass, [{
    key: 'getProfessionalNameAndRank',
    value: function getProfessionalNameAndRank() {
      var _person2 = this.person,
          firstName = _person2.firstName,
          lastName = _person2.lastName,
          _person2$job = _person2.job,
          title = _person2$job.title,
          experience = _person2$job.experience;

      return firstName + ' ' + lastName + ', ' + title + ', job experiance ' + experience + ' years';
    }
  }]);

  return WorkingPersonClass;
}(PersonClass);

// 5. create a few instances of each class and call the methods to check whether they work correctly. You can use objects from `people.data.js` for check.


console.log('********* PersonFunc ********** ');
Object.keys(objUsers).forEach(function (user) {
  var instanceOfPersonFunc = new PersonFunc(objUsers['' + user]);
  console.log(user + ' ' + instanceOfPersonFunc.msg);
  if (instanceOfPersonFunc.person) {
    console.log('* getFullName :', instanceOfPersonFunc.getFullName());
    console.log('* getFullAddress :', instanceOfPersonFunc.getFullAddress());
    console.log('* getAge :', instanceOfPersonFunc.getAge());
  }
});

console.log('\n', '********* WorkingPersonFunc ********** ');
Object.keys(objUsers).forEach(function (user) {
  var instanceOfWorkingPersonFunc = new WorkingPersonFunc(objUsers['' + user]);
  console.log(user + ' ' + instanceOfWorkingPersonFunc.msg);
  if (instanceOfWorkingPersonFunc.person) {
    console.log('* getFullName :', instanceOfWorkingPersonFunc.getFullName());
    console.log('* getFullAddress :', instanceOfWorkingPersonFunc.getFullAddress());
    console.log('* getAge :', instanceOfWorkingPersonFunc.getAge());
    console.log('* getProfessionalNameAndRank :', instanceOfWorkingPersonFunc.getProfessionalNameAndRank());
  }
});

console.log('\n', '********* PersonClass ********** ');
Object.keys(objUsers).forEach(function (user) {
  var instanceOfPersonClass = new PersonClass(objUsers['' + user]);
  console.log(user + ' ' + instanceOfPersonClass.msg);
  if (instanceOfPersonClass.person) {
    console.log('* getFullName :', instanceOfPersonClass.getFullName());
    console.log('* getFullAddress :', instanceOfPersonClass.getFullAddress());
    console.log('* getAge :', instanceOfPersonClass.getAge());
  }
});

console.log('\n', '********* WorkingPersonClass ********** ');
Object.keys(objUsers).forEach(function (user) {
  var instanceOfWorkingPersonClass = new WorkingPersonClass(objUsers['' + user]);
  console.log(user + ' ' + instanceOfWorkingPersonClass.msg);
  if (instanceOfWorkingPersonClass.person) {
    console.log('* getFullName :', instanceOfWorkingPersonClass.getFullName());
    console.log('* getFullAddress :', instanceOfWorkingPersonClass.getFullAddress());
    console.log('* getAge :', instanceOfWorkingPersonClass.getAge());
    console.log('* getProfessionalNameAndRank :', instanceOfWorkingPersonClass.getProfessionalNameAndRank());
  }
});

console.log('\n', '********* Custom Person ********** ');
var customPerson = new WorkingPersonClass({
  firstName: 'Vitaliy',
  lastName: 'Suhodolskiy',
  birthDate: '24.09.1998',
  address: {
    country: 'Ukraine',
    city: 'Ternopil',
    street: 'Lychakivska',
    house: '11',
    apartment: '58'
  },
  job: {
    title: 'trainee frontend dev',
    experience: 0.5
  }
});

console.log('* getFullName :', customPerson.getFullName());
console.log('* getFullAddress :', customPerson.getFullAddress());
console.log('* getAge :', customPerson.getAge());
console.log('* getProfessionalNameAndRank :', customPerson.getProfessionalNameAndRank());

exports.PersonFunc = PersonFunc;
exports.WorkingPersonFunc = WorkingPersonFunc;
exports.PersonClass = PersonClass;
exports.WorkingPersonClass = WorkingPersonClass;