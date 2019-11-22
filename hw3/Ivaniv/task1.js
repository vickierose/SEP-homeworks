const SarahMay = {
	firstName: "Sarah",
	lastName: "May",
	birthDate: "13.03.1990",
	address: {
		country: "Spain",
		city: "Seville",
		street: "calle Verde",
		house: "5",
		apartment: "2A",
	},
	job: {
		title: "teacher",
		experience: 5
	}
}

const JeremieBrown = {
	firstName: "Jeremie",
	lastName: "Brown",
	birthDate: "10.11.1983",
	address: {
		country: "Great Britain",
		city: "Bristol",
		street: "Park street",
		house: "14"
	},
	job: {
		title: "sale manager",
		experience: 10
	}
}

const Elizabeth = {
	firstName: "Elizabeth",
	birthDate: "27.02.1998",
	address: {
		country: "Italy",
		city: "Verona",
		street: "via Calchirelli",
		house: "9F",
		apartment: "49",
	},
	job: {
		title: "fitness coach",
		experience: 1.5
	}
}

class PersonClass {
	constructor(person) {
		this.person = person;
	}

	getFullName = () => {
		var fullName;
		for (const key in this.person) {
			if (this.person.hasOwnProperty(key)) {
				if (key === 'firstName') {
					fullName = this.person[key];
				}
				if (key === 'lastName') {
					fullName += ' ' + this.person[key];
				}
			}
		}
		return fullName;
	}

	getAge = () => {
		let todayYear = new Date().getFullYear();
		let yearBirth = parseInt(this.person.birthDate.slice(6, 10));
		let age = `${todayYear - yearBirth} years.`
		return age;
	}


	getFullAddress = () => {
		const { country, city, street, house } = this.person.address;
		let fullAddress = `${country}, ${city}, ${street}, ${house}`;
		if (!this.person.address.country || !this.person.address.city || !this.person.address.street || !this.person.address.house) {
			return console.log('You need to complete all the required fields.');
		}
		return fullAddress;
	}
}


var eliza = new PersonClass(Elizabeth);
console.warn(eliza.getFullName());
console.warn(eliza.getAge());
console.warn(eliza.getFullAddress());

var sarah = new PersonClass(SarahMay);
console.warn(sarah.getFullName());
console.warn(sarah.getAge());
console.warn(sarah.getFullAddress());

var jeremieBrown = new PersonClass(JeremieBrown);
console.warn(jeremieBrown.getFullName());
console.warn(jeremieBrown.getAge());
console.warn(jeremieBrown.getFullAddress());




