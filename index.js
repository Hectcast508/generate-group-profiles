const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/generatePage');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

teamArr = [];

const managerQ = () => {
  return inquirer.prompt([
    {
      type:'input',
      name:'name',
      message:'What is the name of the manager?'
    },
    {
      type:'input',
      name:'id',
      message:'What is your employee ID number?'
    },
    {
      type:'input',
      name:'email',
      message:'What is your email address?'
    },
    {
      type:'input',
      name:'officeNumber',
      message:'What is your office number?'
    }
  ])
  .then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamArr.push(manager);
    promptTeamQ();
  });
}

const promptTeamQ = () => {
  inquirer.prompt([
    {
      type:'list',
      name:'addEmployee',
      message:'Would you like to add employee to your team?',
      choices: ['Engineer', 'Intern', 'No more employees.']
    },
  ])
  .then(userInput => {
    switch(userInput.addEmployee) {
      case 'Engineer':
        engineerQ();
        break;
      case 'Intern':
        internQ();
        break;
      default:
        teamCreate();
    }
  })
}