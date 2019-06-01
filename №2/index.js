function main () {
	const panelsElements = document.querySelector('.wrapper');

	//Получение дочерних элементов узла wrapper
	let elementsChildren = panelsElements.children;

	for(let i = 0; i < elementsChildren.length; i++) {
		//Создание экземпляра panel
		let router = new Panel();
		router.count(elementsChildren[i]);
	}

	// [].slice.call(panelsElements.children).forEach(elem => {
	// 	let router = new Panel();
	// 	router.count(elem);
	// });

	//Тоже рабочий способ, разница лишь в том, что forEach не работает с HTMLCollection
	//и приходится превращать HTMLCollection в Array, а цикл for работает без преобразований.
	//Конструкцию [].slice.call(panelsElements.children) можно заменить
	//на Array.from(elementsChildren) или [...elementsChildren];

	/*
		Вариант 1:
		Array.from(elementsChildren).forEach(elem => {
			let router = new Panel();
			router.count(elem);
	 	});

		Вариант 2:
		[...elementsChildren].forEach(elem => {
			let router = new Panel();
			router.count(elem);
	 	});
	*/
}

window.onload = main;

class Panel {
	constructor() {
		//Счетчик кликов
		this.clickCounters = {
			red: 0,
			green: 0,
			blue: 0 };
	}

	count(element) {
		element.addEventListener('click', e => {

			//Увеличиваем значение счетчика по ключу (red, gree, blue);
			this.clickCounters[e.target.classList.value]++;

			//Получаем элемент по классу и записываем в него значение счетчика
			document.querySelector(`.${e.target.classList.value}-counter`)
				.innerText = this.clickCounters[e.target.classList.value];

			//Запись значения счетчика в блок
			document.querySelector(`.${e.target.classList.value}`)
				.innerText = this.clickCounters[e.target.classList.value];
		});
	}
}


//Варианты реализации задания другими способами
/**************************************************/
//Вариант 1 -  switch
		// //Счетчики кликов
		// let redClickCounter = 0;
		// let greenClickCounter = 0;
		// let blueClickCounter = 0;

	// //Получаем элемент dasboard
	// const dashboard = document.querySelector('.dashboard');

	// //Получаем все вложенные узлы (p)
	// const dashboardChildren = dashboard.querySelectorAll('p')
	// //не использовал document.querySelectorAll('p') на случай,
	// //если в документе будет больше элементов <p>

	// panelsElements.addEventListener('click', e => {
		//Получаем значение класса (red, green, blue);
		// let clickedElem = e.target.classList.value;
		// switch (clickedElem) {
		// 	case 'red'  : {
		// 		//Изменяем значение счетчика и вписываем в значение в элемент
		// 		dashboardChildren[0].children[0].innerText = ++redClickCounter;
		// 		break;
		// 	}
		// 	case 'green': {
		// 		dashboardChildren[1].children[0].innerText = ++greenClickCounter;
		// 		break
		// 	};
		// 	case 'blue' : {
		// 		dashboardChildren[2].children[0].innerText = ++blueClickCounter;
		// 		break;
		// 	}
		// }
	//}

/**************************************************/

/**************************************************/
//Вариант 2 - блоки if

	// //Счетчики кликов
	// let redClickCounter = 0;
	// let greenClickCounter = 0;
	// let blueClickCounter = 0;

	// //Получаем элемент dasboard
	// const dashboard = document.querySelector('.dashboard');

	// //Получаем все вложенные узлы (p)
	// const dashboardChildren = dashboard.querySelectorAll('p')
	// //не использовал document.querySelectorAll('p') на случай,
	// //если в документе будет больше элементов <p>

// panelsElements.addEventListener('click', e => {
// 		//Получаем значение класса (red, green, blue);
// 		let clickedElem = e.target.classList.value;

// 		if(clickedElem === 'red') {
// 			//Изменяем значение счетчика и вписываем в значение в элемент
// 			dashboardChildren[0].children[0].innerText = ++redClickCounter;

// 			//Запись значения счетчика в блок
// 			document.querySelector(`.${clickedElem}`).innerText = redClickCounter;
// 		}
// 		if(clickedElem === 'green') {
// 			dashboardChildren[1].children[0].innerText = ++greenClickCounter;

// 			document.querySelector(`.${clickedElem}`).innerText = greenClickCounter;
// 		}
// 		if(clickedElem === 'blue') {
// 			dashboardChildren[2].children[0].innerText = ++blueClickCounter;

// 			document.querySelector(`.${clickedElem}`).innerText = blueClickCounter;
// 		}
// 	});

/**************************************************/

/**************************************************/
//Вариант 3 - объект

	// let clickCounters = {
	// 	red: 0,
	// 	green: 0,
	// 	blue: 0
	// };

	// panelsElements.addEventListener('click', e => {
	// 	//Получаем значение класса (red, green, blue);
	// 	let clickedItem = e.target.classList.value;

	// 	//Увеличиваем значение счетчика по ключу (red, gree, blue);
	// 	clickCounters[clickedItem]++;

	// 	//Получаем элемент по классу и записываем в него значение счетчика
	// 	document.querySelector(`.${clickedItem}-counter`)
	// 		.innerText = clickCounters[clickedItem];

	//	//Запись значения счетчика в блок
	// 	document.querySelector(`.${clickedItem}`)
	// 		.innerText = clickCounters[clickedItem];
	// });

/**************************************************/