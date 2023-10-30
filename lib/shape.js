// const colorObj= require("./lib/colorsObj")

function generateShape(data) {
  // creates circle,triangle,or square svg
  // maybe make this a new promise?
  if (data.text.length > 3 || data.text.length == 0) {
    throw console.log(
      "Please enter a text length of at most 3 characters and at least 1 character."
    );
  } else {



    
    switch (data.shape) {
      case "circle":
        console.log("you have selected circle");
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${data.shape} cx="50" cy="50" r="40" fill="${data.shape_color}" />
      
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text_color}">${data.text}</text>
      </svg>`;

      case "triangle":
        console.log("you have selected triangle");
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <polygon points="25,25 75,25 50,100" style="fill:${data.shape_color}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text_color}">${data.text}</text>
      </svg>`;

      case "square":
        console.log("good choice, square");
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <rect x="50" y="20" width="150" height="150" 
        style="fill:${data.shape_color}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text_color}">${data.text}</text>
      </svg>`;

      default:
        console.log("no shape selected");
    }
  }

  //   return `
  //   <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  //   <${data.shape} cx="50" cy="50" r="40" fill="${data.shape_color}" />

  //   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text_color}">${data.text}</text>

  // </svg>`;
  // this function will create the shapes and the svg file need to write the function
}

module.exports = generateShape;
