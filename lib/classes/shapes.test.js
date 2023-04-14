const shapeScript = require('../shapes')

const Triangle = shapeScript.Triangle


describe ('Triangle', () => {
    describe('render', () => {
      it('should create a triangle with a color of blue, text color of white, and text of Hello World', () => {
        const shape = new Triangle();
        const shapeColor1 = "blue";
        const textColor1= "white";
        const text1= "Hello World";
        expect(shape.render(text1, textColor1, shapeColor1)).toEqual(
          `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 18 244, 182 56, 182" fill="blue" /> <text x="150" y="125" text-anchor="middle" font-family="sans-serif" font-size="40" fill= "white">Hello World</text></svg>`);
        });
    });
});
