import shape = require('./IShape');
export class Circle implements shape.IShape {
    draw(): void {
        console.log('Circle is drawn.');
    }

}