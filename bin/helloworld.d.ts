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
declare let customer: IPerson;
interface IMusician extends IPerson {
    instrument: string;
}
declare let musician: IMusician;
