//Задача 1

//функция сортировки слов в предложнии в алфавитном порядке
function get_order(string) {
	if (typeof(string) != 'string') {
		return false;
	}
	let arr = string.split(' ')
	arr = arr.sort();
	arr = arr.join(' ')
	return (arr);
}
//проверка
let a = get_order('акустика гитара ноты');
console.log('Задача 1\n'+a);

//Задача 2

//функция случайного элемента из массива
function get_random(arr) {
	if (Array.isArray(arr) != true) {
		return false;
	}
	let i = Math.floor(Math.random()*arr.length);
	return (arr[i]);
}
//проверка
let b = get_random(['первый','второй','третий','четвертый','пятый']);
console.log('Задача 2\nrandom element = '+b);

//Задача 3

//функция поиска максимального значения в массиве
function  get_max(arr) {
	if (Array.isArray(arr) != true) {
		return false;
	}
	let max = arr[0];
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return (max);
}
//проверка
let c = get_max([1,2,3,4,5]);
console.log('Задача 3\nmax = '+c);

//Задача 4

let points = {
"Вася": 200,
"Петя": 300,
"Даша": 250,
"Андрей": 150,
"Сергей": 450,
};
let summ = 0;
let min = points[Object.keys(points)[0]];
let max = points[Object.keys(points)[0]];
let name_min;
let name_max;
for(let i in points){
	summ = summ + points[i];
	if (points[i] < min) {
		min = points[i];
		name_min = i;
	}
	if (points[i] > max) {
		max = points[i];
		name_max = i;
	}
}
console.log('Задача 4')
console.log('сумма всех оценок: ' + summ);
console.log('минимальную оценку ' + min + ' получил '+ name_min);
console.log('максимальную оценку ' + max + ' получил '+ name_max);