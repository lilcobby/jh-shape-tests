const { geoSquare, geoCircle, geoTriangle } = require("./class");

// make a function that generates objects from the answers data. and export

function generateShape(data) {
  // creates circle,triangle,or square svg

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

    case "triangle":
      const pyramid = new geoTriangle(
        data.text,
        data.text_color,
        data.shape,
        data.shape_color
      );
      return pyramid.render();

    case "square":
      const box = new geoSquare(
        data.text,
        data.text_color,
        data.shape,
        data.shape_color
      );
      return box.render();

    default:
      console.log("no shape selected");
  }
}

module.exports = generateShape;
