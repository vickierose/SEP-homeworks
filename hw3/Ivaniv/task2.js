
class WorkingPersonClass extends PersonClass {
	constructor(person) {
		super(person);
	}

	getProfessionalNameAndRank = () => {
		const { title, experience } = this.person.job;
		var personJob = `${this.getFullName()}, ${title}, ${title}, job experience ${experience} years`;
		return personJob;
	}
}
  

const sarah1 = new WorkingPersonClass(SarahMay);
console.warn(sarah1.getProfessionalNameAndRank());

const jeremieBrown1 = new WorkingPersonClass(JeremieBrown);
console.warn(jeremieBrown1.getProfessionalNameAndRank());

const elizabeth1 = new WorkingPersonClass(Elizabeth);
console.warn(elizabeth1.getProfessionalNameAndRank());

