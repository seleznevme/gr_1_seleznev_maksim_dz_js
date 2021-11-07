//Задача 1

function  get_count_work_days(date1, date2) {
	//проверка корректности ввода
	if (typeof(date1) != 'string' || typeof(date1) != 'string' || date1.length != 10 || date2.length != 10) {
		return false;
	}
	date1 = date1.split('.');	
	date2 = date2.split('.');	
	date1 = new Date (Number(date1[2]), Number(date1[1])-1, Number(date1[0]));
	date2 = new Date (Number(date2[2]), Number(date2[1])-1, Number(date2[0]));
	date1 = date1.valueOf();
	date2 = date2.valueOf();
	day_ms = 1000 * 3600 * 24;
	let count = 0;
	let temp;
	for (date1; date1 <= date2; date1 = date1 + day_ms) {
		temp = new Date (date1);		
		if ((temp.getDay() != 0) && (temp.getDay() != 6)) {
			count = count + 1;
		}
	}
	return count;
}
//проверка
let check_date1 = prompt('Задача 1\n\nВведите первую дату в формате: ДД.ММ.ГГГГ', '08.11.2021');
let check_date2 = prompt('Задача 1\n\nВведите вторую дату в формате: ДД.ММ.ГГГГ', '22.11.2021');
let count_day = get_count_work_days(check_date1, check_date2);
alert ('Между ' + check_date1 + ' и ' + check_date2 + ' (включительно)' + '\n' + count_day + ' рабочих дней');

//Задача 2
function get_count_days () {
	let date =  new Date();
	let date_default = [date.getDate(), date.getMonth()+1, date.getFullYear()]
	date_default = date_default.join('.');
	date = prompt('Задача 2\n\nВведите дату ДО Нового Года\nв формате: ДД.ММ.ГГГГ', date_default);
	//проверка корректности ввода
	if (typeof(date) != 'string') {
		return false;
	}
	date = date.split('.');
	date = new Date (Number(date[2]), Number(date[1])-1, Number(date[0]));	
	date_New_Year = new Date (date.getFullYear(), 11, 31);
	day_ms = 1000 * 3600 * 24;
	delta_day = Math.floor((date_New_Year - date) / day_ms);
	if (((delta_day % 10 > 1) && (delta_day % 10 < 5)) || ((delta_day % 100 > 1) && (delta_day % 100 < 5))) {
		delta_day = delta_day + ' дня';	
	}
	else {
		if ((delta_day % 10 == 1) || (delta_day % 100 == 1)) {
			delta_day = delta_day + ' день';
		}
		else {
			delta_day = delta_day + ' дней';
		}
	}
	return (delta_day);
}
//проверка
alert('Задача 2\n\nДо нового года осталось: ' + get_count_days ());

//Задача 3

function get_day (date) {
	//проверка корректности ввода
	if (typeof(date) != 'string' || date.length != 10) {
		return false;
	}
	date = date.split('-');
	date = new Date (Number(date[2]), Number(date[1])-1, Number(date[0]));
	let temp = new Date(date);
	switch (temp.getDay()) {
		case 0:
			return 'Воскресенье';
		case 1:
			return 'Понедельник';
		case 2:
			return 'Вторник';
		case 3:
			return 'Среда';
		case 4:
			return 'Четверг';
		case 5:
			return 'Пятница';
		case 6:
			return 'Суббота';
	}
}
//проверка
let date_day = prompt('Задача 3\n\nВведите дату в формате: ДД-ММ-ГГГГ', '27-11-1988')
check = get_day (date_day);
alert ('Задача 3\n\n' + date_day + ' это ' + check);