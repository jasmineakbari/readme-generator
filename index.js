// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your project name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a description for your project!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Would you like to provide installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Would you like to add helpful images and more instrcutions for use?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Would you like to add information for people who would like to contribute to your project?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Do you have any licenses to list? (Check all that apply)',
        choices: ['MIT', 'Apache', 'GPL', 'BSD']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Do you have any conducted test results to share?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'would you like to add your email to receive questions?'
    }
];

// TODO: Create a function to write README file
const writeFile = (fileName, data => {
    
})

// function to initialize app
const init = (questions)

// Function call to initialize app
init();
