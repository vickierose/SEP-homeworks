/* 1. write a constructor function PersonFunc which accepts the person data like in file people.data.js and implements next methods:
getFullName() => returns string in format "[FirstName] [LastName]", e.g. 'Viktoriia Chernyshuk';
getAge() => returns age of person in format "[number] years", e.g. "25 years";
getFullAddress() => returns address string in format "[country], [city], [street], [house]/[apartment]". Field apartment is optional. E.g. "Ukraine, Lviv, Doroshenka street, 5/8" and "Ukraine, Lviv, Muchna street, 7".
Please implement error handling in case if some fields are not available.
*/
import { SarahMay, JeremieBrown, Elizabeth } from './people.data.js';

console.log('------ QUESTION: 1 ------')

function PersonFunc(prs) {
    this.person = prs
    this.fullName = function () {
        if (!this.person.firstName || !this.person.lastName) {
            return `Unknown first/last name.`
        }
        return `${this.person.firstName} ${this.person.lastName}`;
    }

    this.getAge = function () {
        let date = new Date()
        let currentYear = date.getFullYear();
        if (!this.person.birthDate || this.person.birthDate.length != 10) {
            return `Unknown birth date.`
        }
        let yearOfBirth = parseInt(this.person.birthDate.slice(6, 10));
        return `${currentYear - yearOfBirth} years.`
    }

    this.getFullAddress = function () {
        return `${this.person.address.country}, ${this.person.address.city}, ${this.person.address.street}, ${this.person.address.house}/${this.person.address.apartment}`
    }
}

let sarahCons = new PersonFunc(SarahMay);
let jeremieCons = new PersonFunc(JeremieBrown);
let elizabethCons = new PersonFunc(Elizabeth);

console.log(sarahCons.fullName());
console.log(jeremieCons.getAge());
console.log(elizabethCons.getFullAddress());

/* 2.write a constructor function WorkingPersonFunc which inherits from PersonFunc and implements additional method:
getProfessionalNameAndRank() => returns string in format "[FirstName] [LastName], [job title], job experience [job experience duration] years", e.g. "Viktoriia Chernyshuk, Front-end developer, job experience 2.5 years".
Please implement error handling in case if some fields are not available.
*/
console.log('------ QUESTION: 2 ------')

function WorkingPersonFunc(person) {
    PersonFunc.call(this, person);
    this.getProfessionalNameAndRank = function () {
        return `${this.person.firstName} ${this.person.lastName}, ${this.person.job.title}, job experience ${this.person.job.experience} years.`
    }
}

let sarahConsJob = new WorkingPersonFunc(SarahMay);
let jeremieConsJob = new WorkingPersonFunc(JeremieBrown);
console.log(sarahConsJob.getProfessionalNameAndRank());
console.log(jeremieConsJob.getProfessionalNameAndRank());

// 3.write a class PersonClass which has the same functionality as PersonFunc constructor function. Don't forget to implement error handling in case if some fields are not available here as well.
console.log('------ QUESTION 3 ------')

class PersonClass {
    constructor(person) {
        this.person = person
    }
    fullName = function () {
        if (!this.person.firstName || !this.person.lastName) {
            return `Unknown first/last name.`
        }
        return `${this.person.firstName} ${this.person.lastName}`;
    }

    getAge = function () {
        let date = new Date()
        let currentYear = date.getFullYear();
        if (!this.person.birthDate || this.person.birthDate.length != 10) {
            return `Unknown birth date.`
        }
        let yearOfBirth = parseInt(this.person.birthDate.slice(6, 10));
        return `${currentYear - yearOfBirth} years.`
    }

    getFullAddress = function () {
        if (!this.person.address.country || !this.person.address.city || !this.person.address.street || !this.person.address.house || !this.person.address.apartment) {
            return `Please fill all the fields.`
        }
        return `${this.person.address.country}, ${this.person.address.city}, ${this.person.address.street}, ${this.person.address.house}/${this.person.address.apartment}`
    }
}

let sarahClass = new PersonClass(SarahMay);
let jeremieClass = new PersonClass(JeremieBrown);
let elizabethClass = new PersonClass(Elizabeth);
console.log(sarahClass.fullName());
console.log(jeremieClass.getAge());
console.log(elizabethClass.getFullAddress());

// 4.write a class WorkingPersonClass which inherits from PersonClass and has the same functionality as WorkingPersonFunc. Don't forget to implement error handling in case if some fields are not available here as well.
console.log('------ QUESTION 4 ------')

class WorkingPersonClass extends PersonClass {
    constructor(person) {
        super(person);
    }

    getProfessionalNameAndRank = function () {
        if (!this.person.firstName || !this.person.lastName || !this.person.job.title || !this.person.job.experience) {
            return `Please fill all the fields.`
        }
        return `${this.person.firstName} ${this.person.lastName}, ${this.person.job.title}, job experience ${this.person.job.experience} years.`
    }
}
let sarahClassJob = new WorkingPersonClass(SarahMay);
let jeremieClassJob = new WorkingPersonClass(JeremieBrown);
console.log(sarahClassJob.getProfessionalNameAndRank());
console.log(jeremieClassJob.getProfessionalNameAndRank())