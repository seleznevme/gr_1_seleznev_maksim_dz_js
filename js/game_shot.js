//моя первая игра, версия от 16.11.21
let n_bot = 20; //количество ботов в строке (фактически количество столбцов на всем экране игры)
let h_bot = 5; //высота бота в процентах
let b_bot = 100 / n_bot; //ширина бота в процентах
let h_player = h_bot * 2; // делаю игрока в два раза выше бота
let b_player = b_bot; //делаю одной ширины с ботом, для удобства пересчета по столбцам
let count = 0; //переменная в которой буду хранить набраные очки
let game_over = 0; //индикация конца игры
function add_string_bot () { //функция генерации строки ботов	
	for (let i = 0; i <= n_bot - 1; i++) {
		let indicator = Math.random();
		if (indicator > 0.7) {
			let div_bot = document.createElement('div');
			document.body.append(div_bot);
			div_bot.style.height = (h_bot - 1) + '%';
			div_bot.style.width = (100 / n_bot - 1) + '%';							
			div_bot.style.background = 'red';
			div_bot.style.margin = '0.5%';
			div_bot.style.position = 'absolute';
			div_bot.style.left = (i * (100 / n_bot)) + '%';
			div_bot.style.top = '0%';
			div_bot.className = 'bot';		
		}		
	}			
}
function add_player_ship () {
	let div_ship = document.createElement('div');
	document.body.append(div_ship);
	div_ship.style.height = h_player + '%';
	div_ship.style.width = b_player + '%';	
	div_ship.style.background = 'purple';	
	div_ship.style.position = 'absolute';
	div_ship.style.left = '50%'; //начальная позиция - посредине экрана (со смещением в ближайший столбец за счет ширины корабля)
	div_ship.style.top = (100 - parseInt(div_ship.style.height, 10)) + '%';
	console.log(div_ship.style.top);
	div_ship.id = 'player'; //id по которому потом искать буду
}
function moove_player_ship (key) {
	if (key ==  'ArrowRight') {		
		player.style.left = parseInt(player.style.left, 10) + 100 / n_bot + '%';
		if ((parseInt(player.style.left, 10)) >= (100 - parseInt(player.style.width, 10))) {
			player.style.left = 100 - parseInt(player.style.width, 10) + '%';
		}				
	}
	if (key ==  'ArrowLeft') {				
		player.style.left = parseInt(player.style.left, 10) - 100 / n_bot  + '%';
		if ((parseInt(player.style.left, 10)) <= 0) {
			player.style.left = '0%';
		}			
	}
}	
function gen_shot () { //функция генерации выстрела	
	let div_shot = document.createElement('div');
	document.body.append(div_shot);
	div_shot.style.height = '1%';
	div_shot.style.width = '1%';	//приравниваю к ширине сетки, чтоб удобно было работать с координатами
	div_shot.style.margin = '0 2%'
	div_shot.style.background = 'blue';	
	div_shot.style.position = 'absolute';
	let player;
	player = document.getElementById('player');
	div_shot.style.left = player.style.left;
	let start = 100 - h_player; //длина полета выстрела (все оставшееся пространство без учета высоты корабля игрока)
	div_shot.style.top = start-1 + '%'; //начальное положение выстрела start-1 (1 - один потому, что высота выстрела 1)
	let kill = 0; //переменная индикации убийства
	for (let i = 0; i <= start; i++) {
		setTimeout(function () { //задержка, на каждом положении, чтобы видеть трассер выстрела		
			let arr = document.getElementsByClassName('bot');								
			for (let j = 0; j <= arr.length - 1; j++) {
				let y_bot = parseInt(arr[j].style.top, 10); //преобразование текущей координаты Y бота					
				let x_bot = parseInt(arr[j].style.left, 10); //преобразование текущей координаты X бота
				let y_shot = parseInt(div_shot.style.top, 10); //преобразование текущей координаты Y выстрела					
				let x_shot = parseInt(div_shot.style.left, 10); //преобразование текущей координаты X выстрела
				if ((x_bot == x_shot) && ((y_bot + h_bot) >= y_shot) && kill == 0) { //'&& kill == 0' использую, чтоб сделать только одно убийство в столбце					
					arr[j].remove(); //удаляю убитый бот
					div_shot.remove(); //удаляю сам выстрел									
					kill = 1; //индикация убийства
					count = count + 1; //учет очка за убитого					
					break;					
				}						
			}
			if (kill == 0) {
				div_shot.style.top = (parseInt(div_shot.style.top, 10) - 1) + '%'; //пересчет координаты Y выстрела с шагом
				if (parseInt(div_shot.style.top, 10) <= 0) {
					div_shot.remove(); //чищу мусор (удаляю улетевшие выстрелы
				}
			}							
		}, 20* i);
	}
}
//Основное тело
add_player_ship (); //добавляю корабль игрока
document.addEventListener('keydown', function(event) {	
	moove_player_ship (event.key); //перемещение корабля
	if (event.key == 'Control') {
		gen_shot ();//генерация выстрела
	}
});
//Основной цикл
let j = 0;
while (j < 10000) { //крайнее условие конца игры, задаю, т.к. в цикле есть планировщик функция которого определяет game_over
	if (j == 0) {
		add_string_bot (); //добавляю первую строку ботов
	}
	else {
		setTimeout(function () {
			if (game_over == 0) { //Условие добавлено для того, чтобы выполнить только те setTimeout, которые запланированы до получения game_over = 1
				let arr = document.body.getElementsByClassName('bot');
				for (let i = 0; i <= arr.length - 1; i++) {
					y_bot = parseInt(arr[i].style.top, 10); //преобразование текущей координаты Y				
					if (y_bot < (100 - h_player)) {
						arr[i].style.top = (y_bot + h_bot) + '%'; //пересчет текущей координаты Y					
					}
					else {					
						alert ('Игра окончена, счет: ' + count);
						game_over = 1;					
						break;			
					}				
				}
				add_string_bot (); //добавляю новую строку ботов
			}
					
		}, j * 2000);
	}
	j++;
}