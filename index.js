// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [ 
    {
    type: 'input',
    name: 'title',
    message: "What's the Title",
  },
  {
    type: 'input',
    name: 'description',
    message: "Please describe your project",
  },
  {
    type: 'input',
    name: 'installation',
    message: "how do you install your project",
  },
  {
    type: 'input',
    name: 'usage',
    message: "how do i use this",
  },
  {
    type: 'input',
    name: 'contributing',
    message: "What are the contribution guide lines",
  },
  {
    type: 'input',
    name: 'tests',
    message: "What's are the tests instructions",
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license are you using?',
    choices: [
      'MIT',
      'APACHE',
      'GPL',
    ],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: "What is your github username",
  },
  {
    type: 'input',
    name: 'emailAdress',
    message: "What is your email address",
  },

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf-8", function () {})

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        
        const md = generateMarkdown(answers)
        console.log("\n\n\n",md)
        writeToFile("readme.md",md)
      });
      
}

// Function call to initialize app
init();
