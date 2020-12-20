// packages needed for this application
const inquirer = require('inquirer');
const writeFile = require('./utils/generateReadme');
const generateMarkdown = require("./utils/generateMarkdown.js")

// function to initialize app
const init = () => {
    return inquirer.prompt([
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
            message: 'Provide any installation instruction or press enter to decline.'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide any instructions for contributors or press enter to decline.'
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
            message: 'Provide any conducted test results or press enter if none.'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Provide your email if you are ok with people contacting you regarding your project Provide any conducted test results or press enter to decline.'
        }
    ])
}

// Function CALL to initialize app
init()
    .then(projectData => {
        return generateMarkdown(projectData)
    })
    .then(pageMarkdown => {
        return writeFile(pageMarkdown);
    })
    .catch(err => {
        console.log(err);
    });