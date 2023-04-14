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
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape= shape;
    }
}

class Triangle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape= shape;
    }
}

class Square extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape- shape;
    }
}