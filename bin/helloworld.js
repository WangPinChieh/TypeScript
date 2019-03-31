var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = 'Real Person First Name';
        this.lastName = 'Real Person Last Name';
        this.age = 123;
    }
    Person.prototype.sayHi = function () { return 'Hi from Person class;'; };
    ;
    return Person;
}());
var aPerson = new Person();
console.log(aPerson.firstName + ' ' + aPerson.lastName + ' ' + aPerson.age + ' ' + aPerson.sayHi());
var customer = {
    firstName: 'Jay',
    lastName: 'Wang',
    age: 30,
    sayHi: function () { return 'Hi there!'; }
};
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.age);
console.log(customer.sayHi());
var musician = {
    firstName: 'Yvonne',
    lastName: 'Shao',
    age: 30,
    sayHi: function () { return "Hi, I'm Yvonne."; },
    instrument: 'Drums'
};
console.log(musician.sayHi());
console.log(musician.firstName + " " + musician.lastName + " " + musician.age + " " + musician.instrument);
var Shape = /** @class */ (function () {
    function Shape(area) {
        this.Area = area;
    }
    Shape.prototype.DoJob = function () {
        console.log('Parent does job!');
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.Display = function () {
        console.log(this.Area);
    };
    Circle.prototype.DoJob = function () {
        _super.prototype.DoJob.call(this);
        console.log('Child does job!');
    };
    return Circle;
}(Shape));
var _Circle = new Circle(100);
_Circle.Display();
_Circle.DoJob();
var StaticClass = /** @class */ (function () {
    function StaticClass() {
    }
    StaticClass.Display = function () {
        console.log('Number from static class is ' + StaticClass.Num);
    };
    return StaticClass;
}());
StaticClass.Num = 333;
StaticClass.Display();
var isCircle = _Circle instanceof Circle;
console.log('is _Circle an instance of Circle? ' + isCircle);
var ModifierClass = /** @class */ (function () {
    function ModifierClass() {
        this.firstString = 'First';
        this.secondString = 'Secod';
    }
    return ModifierClass;
}());
var modifierClass = new ModifierClass();
//Compiler error. Can't access private members;
//console.log(modifierClass.firstString + ' ' + modifierClass.secondString); 
var ParentClass = /** @class */ (function () {
    function ParentClass() {
    }
    ParentClass.prototype.Display = function () {
        console.log(this.ParentMember);
    };
    return ParentClass;
}());
var ChildrenClass = /** @class */ (function (_super) {
    __extends(ChildrenClass, _super);
    function ChildrenClass() {
        var _this = _super.call(this) || this;
        _this.ParentMember = 'value set from ChildrenClass';
        return _this;
    }
    return ChildrenClass;
}(ParentClass));
var instanceOfChildrenClass = new ChildrenClass();
instanceOfChildrenClass.Display();
var personParameter = {
    firstName: 'Jay',
    lastName: 'Wang'
};
function CallObjAsParameters(obj) {
    console.log('FirstName: ' + obj.firstName + ', LastName: ' + obj.lastName);
}
CallObjAsParameters(personParameter);
function addPoints(point1, point2) {
    var x = point1.x + point2.x;
    var y = point2.y + point2.y;
    return { x: x, y: y };
}
var point = addPoints({ x: 10, y: 20 }, { x: 30, y: 40 });
console.log(point.x + ' ' + point.y);
