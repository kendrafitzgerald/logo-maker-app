const inquirer = require("inquirer");
const fs = require('fs');

const questions  =
inquirer
.prompt ([
    {
        type: 'input',
        message: 'Start creating your SVG logo! Please enter your text, only 3 characters are permitted.',
        name: 'text'
    },
    {
        type: 'input',
        message: 'What color would you like your text? Enter a color keyword or hexidecimal value.',
        name:'textColor',
    },
    {
        type: 'list',
        message: 'What shape would you like your logo to be?',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square'],

    },
    {
        type: 'input',
        message: 'What color would you like your shape? Enter a color keyword or hexidecimal value.',
        name: 'shapeColor',
    }



])
