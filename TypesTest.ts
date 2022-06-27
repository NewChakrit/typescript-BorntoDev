// var myName: string;
// console.log(myName);
// console.log(typeof myName);

var money: number = 100;
console.log(money);
console.log(typeof money);

console.log(null === undefined); // false
console.log(null == undefined); // true
console.log(null === null); // true

// void = function ที่ไม่มีการ return อะไรกลับมา

var myAge: number;
var canVote: true;
var k;

const myArray: number[] = [1, 2, 3];
let myArray2: any[] = ["I'm", 23, 'yesrs old'];

console.log(myArray);
console.log(myArray2[2]);
console.log(myArray2.pop());
console.log(myArray2);
console.log(myArray.push(4));
console.log(myArray);

// tuple
let employee: [number, string, boolean] = [1, 'Chakrit', true];
console.log(employee);
console.log(employee[0]); //1

let employee2: [number, string, boolean][] = [
	[1, 'Chakrit', true],
	[2, 'Pearploy', true],
];

console.log(employee2);
console.log(employee2[1]);

employee2.push([3, 'Eye', true]);
console.log(employee2);
