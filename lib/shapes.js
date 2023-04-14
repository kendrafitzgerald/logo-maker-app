class Shapes {
    constructor(text, textColor, shapeColor) {
    this.text= text,
    this.textColor= textColor,
    this.shapeColor= shapeColor
    }
    render() {
        
    }
}

class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
       
    }
    render() {
        return `<svg version="1.1"
             height="100" width="100"
             xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="${shapeColor}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif"
             font-size="50" fill= "${textColor}">${text}</text>

            </svg>`
    }
}

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);

    }
    render () {
        return `<svg version="1.1"
            width="200" height="450"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif"
            font-size="50" fill= "${textColor}">${text}</text>

        </svg>
        `
    }
}

class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);

    }
    render() {
        return `<svg version="1.1" 
            width="400" height="180"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="20" width="150" height="150" fill=${shapeColor};" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif"
             font-size="50" fill= "${textColor}">${text}</text>
      </svg>`
    }
}

module.exports = {
    Shapes,
    Circle,
    Triangle,
    Square,
}