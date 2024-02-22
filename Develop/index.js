const inquirer = require("inquirer");
const fs = require("fs");
const mdGen = require("./utils/generateMarkdown.js");
const questions = [
    {type: 'input',
    name: 'title',
    message: 'What title would you like to have?',},
    {type: 'input',
    name: 'description',
    message: 'Describe your project?',},
    {type: 'input',
    name: 'install',
    message: 'What is installation method?',},
    {type: 'input',
    name: 'usage',
    message: 'Describe its usage.',},
    {type: 'input',
    name: 'contrib',
    message: 'what contribution information would you like to include?',},
    {type: 'input',
    name: 'tests',
    message: 'what info about tests would you like to include?',},
    {type: 'list',
    name: 'license',
    message: 'which license are you using?',
    choices:["MIT", "Apache 2.0", "GNU general public v3.0", "BSD 2-Clause", "BSD 3-Clause", "Boost Software 1.0", "Creative Commons Zero v1.0", "Eclipse Public 2.0", "Mozilla Public 2.0", " The Unilicense", "none"]
    },
    {type: 'input',
    name: 'github',
    message: 'what is your github username?',
    },
    {type: 'input',
    name: 'email',
    message: 'what is your email address?'
    }
];

function writeToFile(data){
    let contentREADME = mdGen(data);
    fs.writeFile("README.md", contentREADME, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
}
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(data);
    })
    
}
init();
