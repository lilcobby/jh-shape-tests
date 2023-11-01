// classes
class geometry {
  constructor(text, text_color, shape, shape_color) {
    this.text = text;
    this.text_color = text_color;
    this.shape = shape;
    this.shape_color = shape_color;
  }
}

class geoCircle extends geometry {
  constructor(text, text_color, shape, shape_color) {
    super(text, text_color, shape, shape_color);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" style = "background-color: grey"  xmlns="http://www.w3.org/2000/svg">

        <${this.shape} cx="150" cy="130" r="75" fill="${this.shape_color}" />

      <text x="150" y="130" font-size="50" text-anchor="middle" fill="${this.text_color}">${this.text}</text>
      </svg>`;
  }
}

class geoSquare extends geometry {
  constructor(text, text_color, shape, shape_color) {
    super(text, text_color, shape, shape_color);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" style = "background-color: grey"  xmlns="http://www.w3.org/2000/svg">

      <rect x="75" y="50" width="150" height="150" 
        style="fill:${this.shape_color}" />
    
      <text x="150" y="130" font-size="50" text-anchor="middle" fill="${this.text_color}">${this.text}</text>
      </svg>`;
  }
}

class geoTriangle extends geometry {
  constructor(text, text_color, shape, shape_color) {
    super(text, text_color, shape, shape_color);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" style = "background-color: grey"  xmlns="http://www.w3.org/2000/svg">
    
          <polygon points="150, 18 244, 182 56, 182" style="fill:${this.shape_color}" />
        
          <text x="150" y="130" font-size="50" text-anchor="middle" fill="${this.text_color}">${this.text}</text>
          </svg>`;
  }
}

module.exports = { geoCircle, geoTriangle, geoSquare };
