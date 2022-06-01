class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`Aimed member's name: ${this.name}`);
    }

    getEmail() {
        console.log(`Aimed member's email address: ${this.email}`);
    }

    getId() {
        console.log(`Aimed member's working ID: ${this.id}`);
    }

    getRole() {
        console.log(`\nAimed employee:\nName: ${this.name}. \nEmail Address: ${this.email} \nID: ${this.id}`);
    }

}
// const test = new Employee("Aloha", "Bloha", "Cloha");
// test.getRole();
module.exports = Employee;