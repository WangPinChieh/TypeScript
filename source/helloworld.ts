
let message: string = "Hello World!";
console.log(message);

class Greeting {
    greet(): void {
        console.log("Hello World From Greeting!");
    }
    showName(name: string): void {
        console.log("Hey! " + name);
    }
    addNumbers(...nums: number[]): number {
        let result: number = 0;
        for (let i = 0; i < nums.length; i++) {
            result += nums[i];
        }
        return result;
    }
}

let obj = new Greeting();
//obj.greet();
//obj.showName("Jay");
console.log(obj.addNumbers(1, 2, 3, 4, 5));
//let test: any = "abc";
//console.log(test);
//console.log(typeof message);

let myFunction = new Function("a", "b", "if(a<5) return a*b; else return a+b;");
let result: number = myFunction(6, 4);
console.log(result);

(function () { console.log("Anonymous function called.") })();


var f = () => {
    console.log('f');
}

f();


let array: number[] = [1, 2, 3, 4]
let [a, b, c, d] = array;
console.log(a + '/' + b + '/' + c + '/' + d);
let i: any;
for (i in array) {
    console.log(array[i]);
}

let tuple = [1, 'abc', 24];
console.log(tuple[0]);
console.log(tuple[1]);


let unionType: number | string;

unionType = 123;
console.log(unionType);
unionType = 'magic union type';
console.log(unionType);



interface IPerson {
    firstName: string,
    lastName: string,
    age: number,
    sayHi: () => string
}

class Person implements IPerson {
    firstName: string = 'Real Person First Name';
    lastName: string = 'Real Person Last Name';
    age: number = 123;
    sayHi(): string { return 'Hi from Person class;'; };
}

let aPerson = new Person();
console.log(aPerson.firstName + ' ' + aPerson.lastName + ' ' + aPerson.age + ' ' + aPerson.sayHi());

let customer: IPerson = {
    firstName: 'Jay',
    lastName: 'Wang',
    age: 30,
    sayHi: (): string => { return 'Hi there!'; }
}

console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.age);
console.log(customer.sayHi());


interface IMusician extends IPerson {
    instrument: string
}

let musician: IMusician = {
    firstName: 'Yvonne',
    lastName: 'Shao',
    age: 30,
    sayHi: () => { return "Hi, I'm Yvonne."; },
    instrument: 'Drums'
}

console.log(musician.sayHi());
console.log(musician.firstName + " " + musician.lastName + " " + musician.age + " " + musician.instrument);



class Shape {
    Area: number;
    constructor(area: number) {
        this.Area = area;
    }
    DoJob(): void {
        console.log('Parent does job!');
    }
}
class Circle extends Shape {
    Display(): void {
        console.log(this.Area);
    }
    DoJob(): void {
        super.DoJob();
        console.log('Child does job!');
    }
}

let _Circle = new Circle(100);
_Circle.Display();
_Circle.DoJob();


class StaticClass {
    static Num: number;
    static Display(): void {
        console.log('Number from static class is ' + StaticClass.Num);

    }
}
StaticClass.Num = 333;
StaticClass.Display();

let isCircle = _Circle instanceof Circle;
console.log('is _Circle an instance of Circle? ' + isCircle);



class ModifierClass {
    public firstString: string;
    private secondString: string;

    constructor() {
        this.firstString = 'First';
        this.secondString = 'Secod';
    }
}

let modifierClass = new ModifierClass();
//Compiler error. Can't access private members;
//console.log(modifierClass.firstString + ' ' + modifierClass.secondString); 

class ParentClass {
    protected ParentMember: string;
    public Display(): void {
        console.log(this.ParentMember);
    }
}
class ChildrenClass extends ParentClass {
    constructor() {
        super();
        this.ParentMember = 'value set from ChildrenClass';
    }
}

let instanceOfChildrenClass = new ChildrenClass();
instanceOfChildrenClass.Display();


let personParameter = {
    firstName: 'Jay',
    lastName: 'Wang'
};

function CallObjAsParameters(obj: { firstName: string, lastName: string }) {
    console.log('FirstName: ' + obj.firstName + ', LastName: ' + obj.lastName);
}
CallObjAsParameters(personParameter);

/*
Duck-Typing
When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck.
*/

interface IPoint {
    x: number,
    y: number
}
function addPoints(point1: IPoint, point2: IPoint): IPoint {
    let x = point1.x + point2.x;
    let y = point2.y + point2.y;

    return { x: x, y: y };
}

let point = addPoints({ x: 10, y: 20 }, { x: 30, y: 40 });
console.log(point.x + ' ' + point.y);