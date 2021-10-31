//Задача №1
const DIVIDER = 6;
let a = prompt('Введите первое число', 0);
let b = prompt('Введите второе число', 0);
a = Number(a);
b = Number(b);
let min;
let max;
let result_quantity = 0;
let result_sum = 0;
if (isNaN(a) || isNaN(b)) { //проверка корректности ввода
	alert('Данные введены не корректно, чтобы попробовать снова - обновите страницу')
}
else {
	a = a.toFixed(0); //округление возможных дробных значений
	b = b.toFixed(0); //округление возможных дробных значений
	a = Number(a); //востановление типа
	b = Number(b); //востановление типа
//определение минимума и максимума
	if (a < b) {
		min = a;
		max = b;
	}
	else {
		max = a;
		min = b;
	}
//цикл перебора значений
	for (; min <= max; min++) {
		if (min % DIVIDER == 0 && min != 0)  {
			result_quantity = result_quantity + 1; //накопление количества
			result_sum = result_sum + min; //накопление суммы			
		}
	}
	//корректировка переменных для вывода
	result_quantity = 'количество: ' + result_quantity;
	result_sum = '\nсумма: ' + result_sum;
	//вывод переменных
	alert(`${result_quantity} ${result_sum}`);
}

//Задача 2

alert('загадайте число от 0 до 100');
const PRECISION = 0.4; //точность определения
min = 0; //переобозначаю
max = 100; //переобозначаю
step = 7; //максимальное число шагов
let value;
let check;
do {
	value = (min+max)/2; //промежуточное значение
	check = confirm('Ваше число больше ' + value); //ответ пользователя
	//корректировка границ поиска в зависимости от ответа
	if (check) {
		min = value;		
	}
	else {
		max = value;
	}
	step--;
}
while ((max - min) >= PRECISION && step != 0);
//вывод результата
alert('Ваше число: ' + value.toFixed(0));