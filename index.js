// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your GitHub repository? (REQUIRED)',
    // validate answer
    validate: userInput => {
        if (userInput) {
            return true;
        } else {
            console.log('Please enter your repository title!');
            return false;
        }
    }
},
{ 
    type: 'input', 
    name: 'description',
    message: 'Please enter a description of your GitHub repository. (REQUIRED)',
    // validate answer
    validate: userInput => {
        if (userInput) {
            return true;
        } else {
            console.log('Please enter a brief description of your project.');
        } return false;
    }
},
{
    type: 'confirm',
    name: 'confirmInstall',
    message: 'Is there any installation instructions?',
},
{
    type: 'input',
    name: 'installation',
    message: 'Please list your installation instructions here.',
    when: ({ confirmInstall }) => {
        if (confirmInstall) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmUsage',
    message: 'Would you like to give instructions on how to use your application?'
},
{
    type: 'input',
    name: 'instructions',
    message: 'Please enter instructions on how to use your application here.',
    when: ({ confirmUsage }) => {
        if (confirmUsage) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license.',
    choices: ['GNU AGPLv3', 'GNU GPLv3',
    'GNU LGPLv3', 'Mozilla Public License 2.0',
    'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
    'The Unlicense'],
    // validate selection
    validate: userInput => {
        if (userInput) {
            return true;
        } else {
            console.log('Please select a license.');
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmContribution',
    message: 'Would you like for other developers to be able to contribute to your project?'
},
{
    type: 'input',
    name: 'contribution',
    message: 'Please let other developers know how they can contribute to your project.',
    when: ({ confirmContribution }) => {
        if (confirmContribution) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'testConfirm',
    message: 'Can others test your project?'
},
{
    type: 'input',
    name: 'confirm',
    message: 'How can other test your project?',
    when: ({ testConfirm }) => {
        if (testConfirm) {
            return true;
        } else false;
    }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log('Error : ' + error);
        }
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
