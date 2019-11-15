import { SarahMay, JeremieBrown, Elizabeth } from '../people.data.js';

function PersonFunc(person) {
    this.person = person;
}

PersonFunc.prototype.getFullName = function() {
  const fullName = `${this.person.firstName} ${this.person.lastName}`;
  try {
    if (!this.person.firstName) {
        throw new Error('!this.person.firstName');
    } else if (!this.person.lastName) {
        return (
          console.warn('Second name missed'),
          this.person.firstName
        );
    } else {
        return fullName;
    }
  } catch (error) {
      console.log(error, 'this is your error');
  }
}

PersonFunc.prototype.getAge = function() {
  if (!this.person.birthDate) {
      return console.log('You need to enter your birthday.');
  } else {
      const birthday = this.person.birthDate.split('.').reverse().toString().replace(/,/g, '-');
      return console.log(((new Date().getTime() - new Date(birthday)) / (24 * 3600 * 365.25 * 1000)) | 0);
  }  
}

PersonFunc.prototype.getFullAddress = function() {
  const {country, city, street, house, apartment} = this.person.address;
  let fullAddress = `${country}, ${city}, ${street}, ${house}`;
  if (!this.person.address.country || !this.person.address.city || !this.person.address.street || !this.person.address.house) {
      return console.log('You need to complete all the required fields.');
  } else if (this.person.address.apartment) {
      return console.log(fullAddress += `/${apartment}`);
  } else {
      return console.log(fullAddress);
  }
}

const sarah = new PersonFunc(SarahMay);
const jeremieBrown = new PersonFunc(JeremieBrown);
const elizabeth = new PersonFunc(Elizabeth);
console.log(sarah instanceof PersonFunc);

jeremieBrown.getFullName();
sarah.getAge();
elizabeth.getFullAddress();

function WorkingPersonFunc (person) {
  PersonFunc.call(this, person)
}

WorkingPersonFunc.prototype = Object.create(PersonFunc.prototype);
WorkingPersonFunc.prototype.constructor = PersonFunc;

WorkingPersonFunc.prototype.getProfessionalNameAndRank = function() {
  const {title, experience} = this.person.job;
		if (!title || !experience) {
			  return console.log('You need to complete all the required fields.');
		} else if (!this.person.firstName) {
			  return this.getFullName()
		} else {
			  return `${this.getFullName()}, ${title}, job experience ${experience}`;
		}
}

const sarah2 = new WorkingPersonFunc(SarahMay);
const jeremieBrown2 = new WorkingPersonFunc(JeremieBrown);
const elizabeth2 = new WorkingPersonFunc(Elizabeth);
console.log(elizabeth2 instanceof WorkingPersonFunc);

jeremieBrown2.getFullAddress();
sarah2.getProfessionalNameAndRank();