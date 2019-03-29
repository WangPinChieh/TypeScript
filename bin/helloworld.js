var message = "Hello World!";
console.log(message);
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World From Greeting!");
    };
    Greeting.prototype.showName = function (name) {
        console.log("Hey! " + name);
    };
    Greeting.prototype.addNumbers = function () {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        var result = 0;
        for (var i_1 = 0; i_1 < nums.length; i_1++) {
            result += nums[i_1];
        }
        return result;
    };
    return Greeting;
}());
var obj = new Greeting();
//obj.greet();
//obj.showName("Jay");
console.log(obj.addNumbers(1, 2, 3, 4, 5));
//let test: any = "abc";
//console.log(test);
//console.log(typeof message);
var myFunction = new Function("a", "b", "if(a<5) return a*b; else return a+b;");
var result = myFunction(6, 4);
console.log(result);
(function () { console.log("Anonymous function called."); })();
var f = function () {
    console.log('f');
};
f();
var array = [1, 2, 3, 4];
var a = array[0], b = array[1], c = array[2], d = array[3];
console.log(a + '/' + b + '/' + c + '/' + d);
var i;
for (i in array) {
    console.log(array[i]);
}
var tuple = [1, 'abc', 24];
console.log(tuple[0]);
console.log(tuple[1]);
var unionType;
unionType = 123;
console.log(unionType);
unionType = 'magic union type';
console.log(unionType);
