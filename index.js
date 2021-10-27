// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project:',
  },
  {
    type: 'input',
    message: 'Provide any installation instructions.',
    name: 'installation',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What tests were used?',
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information for your project:',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter contribution guidelines for your project:',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'What do I do if I have an issue? ',
  },
  {
    type: 'input',
    name: 'GitHub',
    message: 'Enter your GitHub Username:',
  },

  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
  {
    type: 'checkbox',
    message: 'Chose license',
    name: 'license',
    choices: ['Apache License 2.0', 'MIT License', 'GNU General Public License v3.0'],
  },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
      if (err){
          console.error(err)
      } else console.log('Success!')
  })
}
// TODO: Create a function to initialize app
function init() {
  inquirer
      .prompt(questions)
      .then((data) => {
          writeToFile('README.md', data)
      })
}
// Function call to initialize app
init();
