"use strict";
exports.__esModule = true;
var circle = require("./Circle");
var triangle = require("./Triangle");
function drawAllShape(shapeToDraw) {
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
