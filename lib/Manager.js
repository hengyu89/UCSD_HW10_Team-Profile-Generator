 const Employee = require('./Employee');

 class Manager extends Employee {
     constructor(name, id, email, officeNumber) {
         super(name, id, email);
         this.officeNumber = officeNumber;
         this.job = 'Manager';
     }

     getRole() {
         console.log(`\nAimed employee:\nName: ${this.name}. \nEmail Address: ${this.email} \nID: ${this.id}\nOffice Number: ${this.officeNumber}`);
     }
 }

 module.exports = Manager;