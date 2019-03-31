import shape = require('./IShape');
import circle = require('./Circle');
import triangle = require('./Triangle');
function drawAllShape(shapeToDraw: shape.IShape): void { 
    shapeToDraw.draw();
}

drawAllShape(new circle.Circle());
drawAllShape(new triangle.Triangle());


/*
tsc --module amd .\TestShape.ts
node .\TestShape.js => Executed with errors
*/

/*
tsc --module commonjs .\TestShape.ts
node .\TestShape.js
*/