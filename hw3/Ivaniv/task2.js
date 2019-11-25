function WorkingPersonClass(person) {
	this.person = person;
}

WorkingPersonClass.prototype = Object.create(PersonFunc);

WorkingPersonClass.prototype.getProfessionalNameAndRank = function () {
	const personName = PersonFunc.prototype.getFullName.call(this);
	const { title, experience } = this.person.job;
	var personJob = `${personName},  ${title}, job experience ${experience} years`;
	return personJob;
}

const sarah1 = new WorkingPersonClass(SarahMay);
console.warn(sarah1.getProfessionalNameAndRank());

const jeremieBrown1 = new WorkingPersonClass(JeremieBrown);
console.warn(jeremieBrown1.getProfessionalNameAndRank());

const elizabeth1 = new WorkingPersonClass(Elizabeth);
console.warn(elizabeth1.getProfessionalNameAndRank());

