const shapeScript = require('../shapes')

const Triangle = shapeScript.Triangle


describe ('Triangle', () => {
    describe('render', () => {
      it('should create an svg polygon with a color of blue', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render(shapeColor)).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});
