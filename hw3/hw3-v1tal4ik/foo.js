const person = {
  name: 'viktor',
  lastName: 'pavlik',
  age: 20,
  experience: 5,
};


function User(obj) {
  this.name = obj.name;
  this.lastName = obj.lastName;
  this.go = function () { return `${this.name} go`; };
  this.fullName = function () {
    console.log(`${this.name} ${this.lastName}`);
  };
}

// User.prototype.fullName = function () { console.log(`${this.name} ${this.lastName}`); };


function Developer(...arg) {
  User.apply(this, arg);
  this.age = arg[0].age;
  this.fullName = function () { console.log('hello'); };
}
// Developer.prototype = Object.create(User.prototype);
// Developer.prototype.constructor = Developer;

const foo1 = new User(person);
const foo2 = new Developer(person);
foo1.fullName();
foo2.fullName();
