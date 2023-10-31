const inquirer = require("inquirer");
const fs = require("fs");
const generateShape = require("./lib/shape");

const questions = [
  {
    type: "input",
    name: "text",
    message:
      "Please input at most three characters to represent your logo text",
    validate: function (choice){ 
      var done = this.async();
      if(choice.length > 3){
        done(" Please only pick 3 character")
        return;
      }
      if(choice.length === 0){
        done("Please enter 3 characters")
        return;
      }
      done(null,  true)
      return;

      //return choice.length <= 3 || "please only pick 3 letters"
    }
  
  },
  {
    type: "input",
    name: "text_color",
    message: "Please enter a text color",
  },
  {
    type: "list",
    name: "shape",
    message: "Please select a shape for your logo",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shape_color",
    message: "Please enter a shape color",
  },
];
// runs prompt
function prompts() {
  // conditionals go here?
  inquirer.prompt(questions).then((answers) => {
    const test = generateShape(answers);
    
    // if (answers.text.length > 3 || answers.text.length == 0) {
    //   return console.log(
    //     "Please enter a text length of at most 3 characters and at least 1 character."
    //   );
    // } else if (answers.shape_color !== "blue") {
    //   return console.log("your color input is not a color, run program again");
    // } else {
    fs.writeFile(`./examples/${answers.shape}.svg`, test, (err) =>
      err ? console.log(err) : console.log("file created")
    );
      
  });
}
function init() {
  prompts();
}
init();
