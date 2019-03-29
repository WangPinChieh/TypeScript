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
let  [a, b, c, d] = array;
console.log(a + '/' + b + '/' + c + '/' + d);
let i: any;
for(i in array)
{
    console.log(array[i]);
}