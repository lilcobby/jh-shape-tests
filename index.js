const inquirer = require("inquirer");
const fs = require("fs");
const generateShape = require("./lib/shape");
const questions = [
  {
    type: "input",
    name: "text",
    message:
      "Please input at most three characters to represent your logo text",
  },
  {
    type: "input",
    name: "text-color",
    message: "Please enter a text color",
  },
  {
    type: "list",
    name: "shape",
    message: "Please select a shape for your logo",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shape-color",
    message: "Please enter a shape color",
  },
];
// runs prompt
function prompts() {
  inquirer.prompt(questions).then((answers) => {
    const test = generateShape(answers);
    fs.writeFile(`./examples/${answers.shape}.svg`, test, (err) =>
      err ? console.log(err) : console.log("file created")
    );
  });
}
function init() {
  prompts();
}
init();
