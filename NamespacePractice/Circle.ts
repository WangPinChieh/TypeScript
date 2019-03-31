/// <reference path = "IShape.ts" />
namespace Drawing {
    export class Circle implements IShape {
        draw(): void {
            console.log('Circle is drawn');
        }  
    }
}