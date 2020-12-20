// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your project name? (Required)',
        validate: nameInput =>{
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
        name: 'description',
        message: 'Please enter a description for your project (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a description for your project!')
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
const writeFile = (fileName, data => {

})

// function to initialize app
const init = (questions)

// Function call to initialize app
init();
