for (let i = 0; i <= 5; i++) {
	console.log('Run : ' + i);
}

let foods = ['Pizza', 'Noodle', 'Steak'];

for (let item of foods) {
	console.log(item); //Pizza, Noodle, Steak
}

for (let index in foods) {
	console.log(index); // 0,1,2
	console.log(foods[index]);
}

//for of เข้าถึงข้อมูลใน collection ของเรา
//for in จะreturn element ของ collection

do {} while (true);
