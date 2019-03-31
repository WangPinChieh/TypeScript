import shape = require('./IShape');
export class Triangle implements shape.IShape {
    draw(): void {
        console.log('Triangle is drawn.');
    }
}