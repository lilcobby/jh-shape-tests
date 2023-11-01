const { geoSquare, geoCircle, geoTriangle } = require("./class");

test("renders the correct SVG string for triangle", () => {
  const shape = new geoTriangle("abc", "green", "triangle", "blue");
  expect(shape.render()).toEqual(
    `<svg version="1.1" width="300" height="200" style= "background-color: grey"  xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" style="fill:blue" /><text x="150" y="130" font-size="50" text-anchor="middle" fill="green">abc</text></svg>`
  );
});
test("renders the correct SVG string for square", () => {
  const shape = new geoSquare("abc", "green", "square", "blue");
  expect(shape.render()).toEqual(
    `<svg version="1.1" width="300" height="200" style= "background-color: grey"  xmlns="http://www.w3.org/2000/svg"><rect x="75" y="50" width="150" height="150" style="fill:blue" /><text x="150" y="130" font-size="50" text-anchor="middle" fill="green">abc</text></svg>`
  );
});

test("renders the correct SVG string for square", () => {
  const shape = new geoCircle("abc", "green", "circle", "blue");
  expect(shape.render()).toEqual(
    `<svg version="1.1" width="300" height="200" style= "background-color: grey" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="120" r="75" fill="blue" /><text x="150" y="130" font-size="50" text-anchor="middle" fill="green">abc</text></svg>`
  );
});
