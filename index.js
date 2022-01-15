// TODO: Include packages needed for this application
// require filesystem
const fs = require('fs');
// require inquirer
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [{
    // Project Name
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
    // Description of Project
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
    // Installation instructions
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
    // Instruction on how to use the application
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
    // Selecting licenses associated with project
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license.',
    choices: ['Mozilla Public License 2.0',
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
    // Contribution instructions
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
    // How to test project
    type: 'input',
    name: 'confirm',
    message: 'How can other test your project?',
    when: ({ testConfirm }) => {
        if (testConfirm) {
            return true;
        } else false;
    }
},
// Beginnning of 'questions'
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username? (REQUIRED)',
    validate: userInput => {
        if (userInput) {
            return true;
        } else {
            console.log('Please enter your GitHub user name.');
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'What is a good email to reach you at? (REQUIRED)',
    validate: userInput => {
        if (userInput) {
            return true;
        } else {
            console.log('Please enter your email address.');
        }
    }
}];
// End of questions array

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      return console.log('Sorry there was an error with creating your README.md' + error);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput) 
        writeToFile('userREADME.md' , generateMarkdown(userInput));
    });
};

const createReadMe = util.promisify(writeToFile);
// TODO: Create a function to initialize app

async function init() {
    // try allows us to define a block of code to be tested for errors
  try {
    const userAnswers = await inquirer.prompt(questions);
    console.log('Thank you for using Professional README Generator your userREADME.md is now begin generated! ', userAnswers);
    // get markdown template from generateMarkdown.js passing the answers as parameter
    const userMarkdown = generateMarkdown(userAnswers);
    console.log(userMarkdown);
    //write the readme file after the markdown is made
    await createReadMe('userREADME.md', userMarkdown);
    // catch will catch any error that did occur in the code 
  } catch (error) {
    console.log('Sorry there was an error with creating your README.md' + error);
  }
};

// Function call to initialize app
init();