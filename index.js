const inquirer = require("inquirer");
const fs = require("fs");
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
];
function prompts() {
  inquirer.prompt(questions).then((answers) => {});
}
function init() {
  prompts();
}
init();
