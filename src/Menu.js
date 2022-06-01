const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const inquirer = require("inquirer");

class Menu {
    constructor() {
        this.list = [];
    }

    startWritten() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'As a manager, please type in your name: \n',
            },
            {
                type: 'input',
                name: 'managerID',
                message: 'And your working ID: \n',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email address: \n',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter your Office number: \n',
            }
            // {
            //     type: 'list',
            //     name: 'menu',
            //     message: "Choose your project License: ",
            //     choices: ['MIT', 'GNU'],
            // }
        ])
        .then(val => {
            const managerInfo = new Manager(val.managerName, val.managerID, val.email, val.officeNumber);
            this.list.push(managerInfo);
            console.log("**List", this.list);
            this.chooseMember();
        });
    }

    chooseMember() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'job',
                message: "Please choose a worker categorized by jobs into your team:",
                choices: ['Engineer', 'Intern', 'Finish building team'],
            }
        ])
        .then(val => {
            console.log("** job is:", val.job );
            switch (val.job) {
                case "Engineer":
                    this.addEngineer();
                    break;
                case "Manager":
                    this.addManager();
                    break;
                case "Intern":
                    this.addIntern();
                    break;
                case "Finish building team":
                    this.fillHTML(this.list);
                    break;
            };
        });
    }

    addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "Please type in your Engineer's name: \n",
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "And your Engineer's working ID: \n",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter your Engineer's email address: \n",
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: "Please enter your Engineer's Github username: \n",
            }
        ])
        .then(val => {
            const engineerInfo = new Engineer(val.engineerName, val.engineerID, val.email, val.githubUsername);
            this.list.push(engineerInfo);
            console.log("**engineer list", this.list);
            this.chooseMember();
        })
    }

    addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "Please type in your Intern's name: \n",
            },
            {
                type: 'input',
                name: 'internID',
                message: "And your Intern's working ID: \n",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter your Intern's email address: \n",
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: "Please enter your Intern's Github username: \n",
            }
        ])
        .then(val => {
            const internInfo = new Intern(val.internName, val.internID, val.email, val.githubUsername);
            this.list.push(internInfo);
            console.log("**intern list", this.list);
            this.chooseMember();
        })
    }

    fillHTML(listInfo) {
        // console.log("================");
        // console.log(listInfo);
        
    }
}

module.exports = Menu;