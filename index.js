// TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your README Title?",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description of the project:",
    },
    {
      type: "input",
      name: "install",
      message:
        "Enter install instructions for the project (I.E. NPM commands):",
    },
    {
      type: "input",
      name: "usage",
      message: "Please explain how to use the application:",
    },
    {
      type: "list",
      message: "Please select a license to display for the README: ",
      name: "license",
      choices: ["MIT", "GPL", "Apache", "BSD", "MIT/Apache-2.0"],
    },
    {
      type: "input",
      name: "contributions",
      message: "Enter any other contributions to this project:",
    },
    {
      type: "input",
      name: "tests",
      message: "Please enter any testing instructions:",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your github username:",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address:",
    },
  ]);
};

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((data) => writeFileAsync("README.md", generateMarkdown(data)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
};

init();
