function copyObject(object) {
	let newObject = object;

		//Проверка на то, является ли переданный параметр объектом
		if (typeof object  === 'object') {

			//Получение типа данных [object Array] или [object Object]
			//для того, чтобы создать новое свойство объект/массив
			let type = Object.prototype.toString.apply(object);

			if(type === '[object Array]') newObject = [];
			else newObject = {};

	//Идентично верхней конструкции if else
	// newObject = Object.prototype.toString.apply(newObject) === '[object Array]' ? [] : {};

			//Проход по свойствам объекта, если свойство является объектом, то
			//идем внутрь объекта/массива
			for(let key in object) {
				//console.log(object[key]);
				newObject[key] = copyObject(object[key]);
			}
		}

	return newObject;
}

let obj1 = {
	a: 1,
	b: 2,
	c: {
		q: 3,
		y: [1, 2, {
			p: 10,
			j: 11
		}],
		g: {
			h: 8,
			v: 9
		}
	},
	'duck': 'quack-quack',
	'str': {
		m: 9,
		q: 10,
		'object': {
			a: 1,
			'pc': 'hp',
			'core': 7
		}
	}
};

let obj2;

//obj2 = JSON.parse(JSON.stringify(obj1));
obj2 = copyObject(obj1);

obj2.a = 'QQQQ'
obj2.c.q = 'AAAA';
obj2.c.y[1] = 10;
obj2.c.y[2].p = 'GGGG';
obj2.duck = 'кря';
obj2.str.object.core = 9;

console.log(obj1);
console.log(obj2);

// window.onload = function () {
// 	let one = document.getElementById('one');
// 	let two = document.getElementById('two');

// 	one.innerText = JSON.stringify(obj1);
// 	two.innerText = JSON.stringify(obj2);
// }