/* 1. write a constructor function PersonFunc which accepts the person data like in file people.data.js and implements next methods:
getFullName() => returns string in format "[FirstName] [LastName]", e.g. 'Viktoriia Chernyshuk';
getAge() => returns age of person in format "[number] years", e.g. "25 years";
getFullAddress() => returns address string in format "[country], [city], [street], [house]/[apartment]". Field apartment is optional. E.g. "Ukraine, Lviv, Doroshenka street, 5/8" and "Ukraine, Lviv, Muchna street, 7".
Please implement error handling in case if some fields are not available.
*/
import { SarahMay, JeremieBrown, Elizabeth } from '../people.data.js';
console.log('------ QUESTION: 1 ------')

function PersonFunc(prs) {
    this.person = prs
}

PersonFunc.prototype.getFullName = function () {
    let person = this.person;
    if (!person.firstName) {
        return `Unknown name.`
    }
    let result = `${person.firstName} ${person.lastName}`;
    if (person.lastName) {
        return result
    }
    return person.firstName
}

PersonFunc.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    if (!this.person.birthDate || this.person.birthDate.length != 10) {
        return `Unknown birth date.`
    }
    let yearOfBirth = parseInt(this.person.birthDate.slice(6, 10));
    return `${currentYear - yearOfBirth} years.`
}

PersonFunc.prototype.getFullAddress = function () {
    const { country, city, street, apartment, house } = this.person.address;
    if (!country || !city || !street || !house) {
        return `Please fill all the fields.`
    }
    let result = `${country}, ${city}, ${street}, ${house}`
    if (apartment) {
        result = `${result} / ${apartment}`
    }
    return result
}

let sarahCons = new PersonFunc(SarahMay);
let jeremieCons = new PersonFunc(JeremieBrown);
let elizabethCons = new PersonFunc(Elizabeth);

console.log(sarahCons.getFullName());
console.log(jeremieCons.getAge());
console.log(elizabethCons.getFullAddress());

/* 2.write a constructor function WorkingPersonFunc which inherits from PersonFunc and implements additional method:
getProfessionalNameAndRank() => returns string in format "[FirstName] [LastName], [job title], job experience [job experience duration] years", e.g. "Viktoriia Chernyshuk, Front-end developer, job experience 2.5 years".
Please implement error handling in case if some fields are not available.
*/
console.log('------ QUESTION: 2 ------')

function WorkingPersonFunc(person) {
    PersonFunc.call(this, person);
}

WorkingPersonFunc.prototype.getProfessionalNameAndRank = function () {
    const fullName = PersonFunc.prototype.getFullName.call(this);
    let job = this.person.job;
    let result = `${fullName}, ${job.title}, job experience ${job.experience} years.`
    if (!job.title || !job.experience) {
        return `Unknown job title or experience`
    }
    return result
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
    getFullName() {
        let person = this.person;
        if (!person.firstName) {
            return `Unknown name.`
        }
        let result = `${person.firstName} ${person.lastName}`;
        if (person.lastName) {
            return result
        }
        return person.firstName
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        if (!this.person.birthDate || this.person.birthDate.length != 10) {
            return `Unknown birth date.`
        }
        let yearOfBirth = parseInt(this.person.birthDate.slice(6, 10));
        return `${currentYear - yearOfBirth} years.`
    }

    getFullAddress() {
        const { country, city, street, apartment, house } = this.person.address;
        if (!country || !city || !street || !house) {
            return `Please fill all the fields.`
        }
        let result = `${country}, ${city}, ${street}, ${house}`
        if (apartment) {
            result = `${result} / ${apartment}`
        }
        return result
    }
}

let sarahClass = new PersonClass(SarahMay);
let jeremieClass = new PersonClass(JeremieBrown);
let elizabethClass = new PersonClass(Elizabeth);
console.log(sarahClass.getFullName());
console.log(jeremieClass.getAge());
console.log(elizabethClass.getFullAddress());

// 4.write a class WorkingPersonClass which inherits from PersonClass and has the same functionality as WorkingPersonFunc. Don't forget to implement error handling in case if some fields are not available here as well.
console.log('------ QUESTION 4 ------')

class WorkingPersonClass extends PersonClass {
    constructor(person) {
        super(person);
    }

    getProfessionalNameAndRank() {
        const fullName = this.getFullName();
        let job = this.person.job;
        let result = `${fullName}, ${job.title}, job experience ${job.experience} years.`
        if (!job.title || !job.experience) {
            return `Unknown job title or experience`
        }
        return result
    }
}

let sarahClassJob = new WorkingPersonClass(SarahMay);
let jeremieClassJob = new WorkingPersonClass(JeremieBrown);
console.log(sarahClassJob.getProfessionalNameAndRank());
console.log(jeremieClassJob.getProfessionalNameAndRank())