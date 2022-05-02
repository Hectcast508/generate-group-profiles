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
    }
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
        writeToFile();

    }
  })
}

const engineerQ = () => {
  return inquirer.prompt([
    {
      type:'input',
      name:'name',
      message:'What is the name of the engineer?'
    },
    {
      type:'input',
      name:'id',
      message:'What is the employee ID number of the engineer?'
    },
    {
      type:'input',
      name:'email',
      message:'What is the email of the engineer?'
    },
    {
      type:'input',
      name:'github',
      message:'What is the GitHub username of the engineer?'
    }
  ])
  .then(answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamArr.push(engineer);
    promptTeamQ();
  });
}

const internQ = () => {
  return inquirer.prompt([
    {
      type:'input',
      name:'name',
      message:'What is the name of the intern?'
    },
    {
      type:'input',
      name:'id',
      message:'What is the employee ID number of the intern?'
    },
    {
      type:'input',
      name:'email',
      message:'What is the email address of the intern?'
    },
    {
      type:'input',
      name:'school',
      message:'What school is the intern attending?'
    }
  ])
  .then(answers => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.github);
    teamArr.push(intern);
    promptTeamQ();
  });
}

function writeToFile(data) {
  fs.writeFile('./dist/index.html', generatePage(data), err => {
    if (err) throw err;
    console.log('Index file complete!');
  });
};

function init() {
  managerQ()
  
}

init();
