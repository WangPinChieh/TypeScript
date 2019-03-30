
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