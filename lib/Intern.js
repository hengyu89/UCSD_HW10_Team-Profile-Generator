const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.job = 'Intern';
    }

    getSchool() {
        console.log(`The Intern's school is: ${this.school}.`);
    }

    getRole() {
        console.log(`\nAimed employee:\nName: ${this.name}. \nEmail Address: ${this.email} \nID: ${this.id}\nschool: ${this.school}`);
    }
}

module.exports = Intern;