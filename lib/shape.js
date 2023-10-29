function generateShape(data) {
  return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${data.shape} cx="50" cy="50" r="40" fill="${data.shape_color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text_color}">${data.text}</text>

</svg>`;
  // this function will create the shapes and the svg file need to write the function
}

module.exports = generateShape;
