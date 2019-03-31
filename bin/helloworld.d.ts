declare let message: string;
declare class Greeting {
    greet(): void;
    showName(name: string): void;
    addNumbers(...nums: number[]): number;
}
declare let obj: Greeting;
declare let myFunction: Function;
declare let result: number;
declare var f: () => void;
declare let array: number[];
declare let a: number, b: number, c: number, d: number;
declare let i: any;
declare let tuple: (string | number)[];
declare let unionType: number | string;
interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
    sayHi: () => string;
}
declare class Person implements IPerson {
    firstName: string;
    lastName: string;
    age: number;
    sayHi(): string;
}
declare let aPerson: Person;
declare let customer: IPerson;
interface IMusician extends IPerson {
    instrument: string;
}
declare let musician: IMusician;
declare class Shape {
    Area: number;
    constructor(area: number);
    DoJob(): void;
}
declare class Circle extends Shape {
    Display(): void;
    DoJob(): void;
}
declare let _Circle: Circle;
declare class StaticClass {
    static Num: number;
    static Display(): void;
}
declare let isCircle: boolean;
declare class ModifierClass {
    firstString: string;
    private secondString;
    constructor();
}
declare let modifierClass: ModifierClass;
declare class ParentClass {
    protected ParentMember: string;
    Display(): void;
}
declare class ChildrenClass extends ParentClass {
    constructor();
}
declare let instanceOfChildrenClass: ChildrenClass;
declare let personParameter: {
    firstName: string;
    lastName: string;
};
declare function CallObjAsParameters(obj: {
    firstName: string;
    lastName: string;
}): void;
interface IPoint {
    x: number;
    y: number;
}
declare function addPoints(point1: IPoint, point2: IPoint): IPoint;
declare let point: IPoint;
