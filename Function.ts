//void function = function ที่ไม่ return อะไรออกมาเลย

function sayHello(): number {
	console.log('Hello Ts');

	return 1;
}
sayHello();

console.log(sayHello());

function sayHello2(): string {
	return 'Chakrit';
}
console.log(sayHello2());

function myName(name: string): string {
	return name + 'Sudlhor';
}

console.log(myName('New'));

function myFullName(name: string, lname: string = 'Null'): string {
	// = set Default
	return name + 'Sudlhor' + lname;
}

console.log(myFullName('New ', ' makmak'));

function sum(a: number, b: number, ...rest: number[]): number {
	return a + b + rest.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function add({ a, b }: { a: number; b: number }): number {
	return a + b;
}

console.log(add({ b: 6, a: 10 }));
