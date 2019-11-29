import { SarahMay, JeremieBrown, Elizabeth } from '../people.data.js';

class PersonClass {
	constructor (person) {
		this.person = person;
	}

	getFullName = () => {
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

	getAge = () => {
		try {
			if (!this.person.birthDate) {
					throw new Error('!this.person.birthDate');
			} else {
					const birthday = this.person.birthDate.split('.').reverse().toString().replace(/,/g, '-');
					return console.log(((new Date().getTime() - new Date(birthday)) / (24 * 3600 * 365.25 * 1000)) | 0);
			}
		} catch (error) {
				console.log(error, 'this is your error');
		}
	}

	getFullAddress = () => {
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
}

const sarah = new PersonClass(SarahMay);
const jeremieBrown = new PersonClass(JeremieBrown);
const elizabeth = new PersonClass(Elizabeth);
console.log(sarah instanceof PersonClass);

jeremieBrown.getFullName();
sarah.getAge();
elizabeth.getFullAddress();

class WorkingPersonClass extends PersonClass {
  constructor (person) {
		super(person);
	}

	getProfessionalNameAndRank = () => {
		const {title, experience} = this.person.job;
		if (!title || !experience) {
				return console.log('You need to complete all the required fields.');
		} else if (!this.person.firstName) {
				return this.getFullName()
		} else {
				return `${this.getFullName()}, ${title}, job experience ${experience}`;
		}
	}
}

const sarah2 = new WorkingPersonClass(SarahMay);
const jeremieBrown2 = new WorkingPersonClass(JeremieBrown);
const elizabeth2 = new WorkingPersonClass(Elizabeth);
console.log(elizabeth2 instanceof WorkingPersonClass);

jeremieBrown2.getFullAddress();
sarah2.getProfessionalNameAndRank();