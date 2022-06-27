class Human {
	name: string = '';
	lastName: string = '';
	age: number = 0;

	sayHello() {
		return "Hello !I'm " + this.name + ' and ' + this.age + ' years old.';
	}
}

const user1: any = new Human();
user1.name = 'Chakrit Tnasinpaibool';
user1.age = 25;
console.log(user1.sayHello());
