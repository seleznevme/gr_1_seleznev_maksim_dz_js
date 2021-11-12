//Первая часть задания
function add_div (height, width, color) { //функция создания div по заданным параметрам
	if (isNaN(height) || isNaN(width) || typeof(color) != 'string') {
		throw 'ошибка входных параметров';
	}
	else {		
		let div = document.createElement('div');
		document.body.append(div);
		div.style.height = height + 'px';
		div.style.width = width + 'px';
		div.style.background = color;
		div.style.margin = '5px auto';
	}
}
// Задача 1
setTimeout(function () {
	for (let i = 1; i <= 10; i++) {
		add_div (50, 50, 'aqua'); //вызов функции создания div по заданным параметрам
	}
	// Задача 2
	setTimeout(function () {
		let arr = document.body.getElementsByTagName('div');
		for (let i = 0; i <= arr.length - 1; i++) {			
			arr[i].style.height = '100px';
			arr[i].style.width = '100px';
			arr[i].style.background = 'lime';			
		}
		// Задача 3
		setTimeout(function () {			
			for (let i = 0; i <= arr.length - 1; i++) {		
				if ((i+1) % 3 == 0) {
					arr[i].style.background = 'red';
				}
				else {
					arr[i].style.background = 'yellow';	
				}
			}
			// Задача 4
			setTimeout(function () {
				for (let i = arr.length - 1; i >= 0; i--) {		
					arr[i].remove();					
				}
				document.body.style.background = 'black';
			}, 3000);
		}, 3000);
	}, 3000);
}, 3000);

//Последняя часть задания
function print_div_options () { //функция вывода параметров div
	arr = document.body.getElementsByTagName('div');
	for (let i = 0; i <= arr.length - 1; i++) {
		arr[i].onmouseover = function () {
			console.log('высота' + arr[i].style.height);
			console.log('ширина' + arr[i].style.width);
		}
		if (arr[i].style.background == 'blue') {
			arr[i].onclick = function () {
				alert ('Цвет этого прямоугольника - синий');
			}
		}
		else {			
			arr[i].onclick = function () {
				alert ('Цвет этого прямоугольника - розовый');
			}			
		}		
	}
}
setTimeout(function () {
	document.body.style.removeProperty('background'); //удаление фона от предидущего задания
	add_div (150, 230, 'blue'); //вызов функции создания div по заданным параметрам
	add_div (275, 350, 'fuchsia'); //вызов функции создания div по заданным параметрам
	print_div_options (); //вызов функции вывода параметров div
},15000);
