// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

//  An array of questions for user input
const questions = [
    "What is your title?",
    "What is your Description?",
    "What is your Table Of Contents?",
    "What is your Installation?",
    "What is your Usage?",
    "What is your License?",
    "What is your Contributing?",
    "What is your Tests?",
    "What is your Questions?",
];

// TODO: Create a function to write README file
function writeFile(fileName, content) {

    fs.writeFile(fileName, content, (err) =>
    err ? console.log(err) : console.log(`Successfully Created ${fileName}`)
  );
  }

// Function to initialize app
function init() {

// inquirer prompt
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your title for your project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'We will now go over your description with the following four questions, respond with anything to continue'
    },
    {
      type: 'input',
      name: 'description1',
      message: 'What was your motivation?'
    },
    {
      type: 'input',
      name: 'description2',
      message: 'Why did you build this project'
    },
    {
      type: 'input',
      name: 'description3',
      message: 'What problem does it solve?'
    },
    {
      type: 'input',
      name: 'description4',
      message: 'What did you learn?'
    },
    {
      type: 'editor',
      name: 'Installation',
      message: 'What are the steps required to install your project in a step-by-step format? When finsihed hit <esc> and then type ":x"'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'The following two questions go over your alt text and image location to add you screenshot. (Make sure to have image in your repository)',
    },
    {
      type: 'input',
      name: 'altText',
      message: 'Enter alt text for your image',
    },
    {
      type: 'input',
      name: 'image',
      message: 'Enter your image location (ex: assets/image/screenshot.png)',
    },
    {
      type: 'editor',
      name: 'collaborators',
      message: 'Who were your collaborators on this project? When finsihed hit <esc> and then type ":x"',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license would you like to use? (Use arrow keys)',
      choices: ['MIT', 'Apache 2.0', 'BSD 3-Clause'],
    },
    {
      type: 'editor',
      name: 'test',
      message: 'Describe how to run tests for your project. When finsihed hit <esc> and then type ":x".',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email.',
    },
    {
      type: 'input',
      name: 'name',
      message: 'Enter your First and Last.',
    },
    {
      type: 'input',
      name: 'year',
      message: 'Enter the current year.',
    },
  ])
  .then((answers) => {
    const markdown = generateMarkdown(answers);

    // write file function
    writeFile("README.md", markdown);
  });
};

// Function call to initialize app
init();