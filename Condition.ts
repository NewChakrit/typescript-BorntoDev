if (true && true) {
	console.log('Always executed.');
}

if (false || true) {
	console.log('Never executed.');
}

let x2 = 10;
let y2 = 20;

//or  let x:number = 10, y = 20

if (x2 < y2) {
	console.log('x2 < y2');
} else if (true) {
	console.log('else');
}

let selectMenu: number = 1;

switch (selectMenu) {
	case 0:
		console.log('Hello');
		break;
	case 1:
		console.log('World');

	case 2:
		console.log('Hello Chakrit');
		break;
}

// World ,Hello World
