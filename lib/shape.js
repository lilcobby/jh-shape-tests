// const colorObj= require("./lib/colorsObj")

const { geoSquare, geoCircle, geoTriangle } = require("./class");

// make a function that generates objects from the answers data. and export

function generateShape(data) {
  // creates circle,triangle,or square svg

  // need to change the switch so it produces classes
  switch (data.shape) {
    case "circle":
      // construct new object then return the resolve method from circle object
      const pizza = new geoCircle(
        data.text,
        data.text_color,
        data.shape,
        data.shape_color
      );
      return pizza.render();
    //   console.log("you have selected circle");

    //   return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    //   <${data.shape} cx="50" cy="50" r="40" fill="${data.shape_color}" />

    // <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text_color}">${data.text}</text>
    // </svg>`;

    case "triangle":
      const pyramid = new geoTriangle(
        data.text,
        data.text_color,
        data.shape,
        data.shape_color
      );
      return pyramid.render();
    //   console.log("you have selected triangle");
    //   return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    // <polygon points="25,25 75,25 50,100" style="fill:${data.shape_color}" />

    // <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text_color}">${data.text}</text>
    // </svg>`;

    case "square":
      const box = new geoSquare(
        data.text,
        data.text_color,
        data.shape,
        data.shape_color
      );
      return box.render();
    //   console.log("good choice, square");
    //   return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    // <rect x="50" y="20" width="150" height="150"
    //   style="fill:${data.shape_color}" />

    // <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text_color}">${data.text}</text>
    // </svg>`;

    default:
      console.log("no shape selected");
  }
}

module.exports = generateShape;
