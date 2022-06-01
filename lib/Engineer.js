const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.job = 'Engineer';
    }

    getGithub() {
        console.log(`The engineer's GitHub account: ${this.GitHub}`);
    }

    getRole() {
        console.log(`\nAimed employee:\nName: ${this.name}. \nEmail Address: ${this.email} \nID: ${this.id}\nGithub: ${this.github}`);
    }
}

module.exports = Engineer;