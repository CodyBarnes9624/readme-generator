// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');
const fs = require('fs').promises;

const licenses = [
    { name: 'MIT License', value: 'mit' },
    { name: 'GNU General Public License (GPL) v3.0', value: 'gpl' },
    { name: 'Apache License 2.0', value: 'apache' },
    { name: 'Mozilla Public License 2.0', value: 'mozilla' },
    { name: 'BSD 3-Clause License', value: 'bsd3' },
    { name: 'BSD 2-Clause License', value: 'bsd2' },
    { name: 'Creative Commons Zero v1.0 Universal (CC0)', value: 'cco' },
    { name: 'Eclipse Public License 2.0', value: 'eclipse' },
    { name: 'GNU Affero General Public License (AGPL) v3.0', value: 'agpl' },
    { name: 'GNU Lesser General Public License (LGPL) v3.0', value: 'lgpl' },
    { name: 'Unlicense', value: 'unlicense' },
    { name: 'No license', value: '' }
];

// TODO: Create an array of questions for user input
const questions = () => {
 return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter your title for your ReadMe'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your ReadMe description'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter your installation instructions'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select license type',
        choices: licenses
    },
    {
        type: 'input',
        name: 'command',
        message: 'Enter your start command for your ReadMe'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email'
    }, 
 ])
};

//enter proj titile
//enter proj desc
//enter install instruct
//select license type
//command to run project
//enter email

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data)
    .then(() => console.log('Successfully created ReadMe'))
    .catch((err) => console.log(err));
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((answer) => writeToFile('ReadMe.md' , generateMarkdown(answer, licenses)))
    .then(() => console.log("Answers added to ReadMe"))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();