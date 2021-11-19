let h_wall = 10;
let diametr_ball = 20;
let racket_width = 100;
let time_step = 3;
let delta_x = 1; //смещение шара по x
let delta_y = 1; //смещение шара по y
let n_string_skittles = 4;
let h_skittle = 20;
let n_skittle = 10; //максимальное количество кеглей в строке
let width_skittle = (window.innerWidth - 2 * h_wall) / (2 * n_skittle);
let game_obgects = [];
//Функция-конструктор создания обьектов
function New_obgect (name, height, width, x, y, color, direction) {
	this.name = name;
	this.height = height;
	this.width = width;
	this.x = x;
	this.y = y;
	this.color = color;	
	this.direction = direction;
}
let ball = new New_obgect ('ball', diametr_ball, diametr_ball, (window.innerHeight - racket_width) / 2 , window.innerHeight - h_wall - diametr_ball - 1, 'blue', 1);
game_obgects.push(ball);
let wall = new New_obgect ('wall', h_wall, window.innerWidth, 0, 0, 'black');
game_obgects.push(wall);
let wall1 = new New_obgect ('wall', window.innerHeight - h_wall, h_wall, 0, h_wall, 'black');
game_obgects.push(wall1);
let wall2 = new New_obgect ('wall', window.innerHeight - h_wall, h_wall, window.innerWidth - h_wall, h_wall, 'black');
game_obgects.push(wall2);
let racket = new New_obgect ('racket', h_wall, racket_width,(window.innerHeight - racket_width) / 2 , window.innerHeight - h_wall, 'red');
game_obgects.push(racket);
function gen_skittles () {		
	for (let i = 1; i <= n_string_skittles; i++) {		
		let x_skittle;		
		for (let j = 1; j <= n_skittle; j++) {
		if ((i % 2) != 0) {
			x_skittle = h_wall + width_skittle * 2 * (j - 1);			
		}
		else {			
			x_skittle = h_wall + width_skittle + width_skittle * 2 * (j-1);		
		}				
			let skittle = new New_obgect ('skittle', h_skittle, width_skittle, x_skittle, h_skittle * i, 'green');
			game_obgects.push(skittle);
		}
	}
}
function render () {
	let cover_old = document.getElementById('cover');
	if (cover_old != null) {
		cover_old.remove();
	}	
	let cover = document.createElement('div');
	document.body.append(cover);
	cover.id = 'cover';
	for (let i = 0; i <= game_obgects.length-1; i++) {
		let div = document.createElement('div');
		cover.appendChild(div);
		div.style.width = game_obgects[i].width + 'px';
		div.style.height = game_obgects[i].height + 'px';
		div.style.position = 'absolute';
		div.style.left = game_obgects[i].x + 'px';
		div.style.top = game_obgects[i].y + 'px';
		div.style.background = game_obgects[i].color;
		if (game_obgects[i].name == 'ball') {
			div.style.borderRadius = '50%';
		}
	}
}
function check_collision () {
	for (let i = 0; i <= game_obgects.length-1; i++) {	
		for (let j = i + 1; j <= game_obgects.length-1; j++) {
			let criterion1 = game_obgects[i].x + game_obgects[i].width == game_obgects[j].x;
			let criterion2 = (game_obgects[i].y + (game_obgects[i].height / 2)) > game_obgects[j].y;
			let criterion3 = (game_obgects[i].y + (game_obgects[i].height / 2)) < (game_obgects[j].y + game_obgects[j].height);
			let criterion4 = game_obgects[i].x == game_obgects[j].x + game_obgects[j].width;
			if ((criterion1 || criterion4) && criterion2 && criterion3) {
				delta_x = delta_x * -1;			
			}
			let criterion5 = game_obgects[i].y + game_obgects[i].height == game_obgects[j].y;
			let criterion6 = game_obgects[i].y == game_obgects[j].y + game_obgects[j].height;
			let criterion7 = (game_obgects[i].x + game_obgects[i].width / 2) >= game_obgects[j].x;
			let criterion8 = (game_obgects[i].x + game_obgects[i].width / 2) <= game_obgects[j].x + game_obgects[j].width;
			if ((criterion5 || criterion6) && criterion7 && criterion8) {
				delta_y = delta_y * -1;								
				if (game_obgects[j].name == 'skittle') {
					game_obgects.splice(j, 1);
				}
				if (game_obgects[j].name == 'racket') {
					delta_x = delta_x * game_obgects[i].direction;
					game_obgects[i].direction = 1;					
				}
			}							
		}
	}	
}
document.addEventListener('mousemove', function(event) {
	for (let i = 0; i <= game_obgects.length-1; i++) {
		if (game_obgects[i].name == 'racket') {			
			if (event.clientX >= window.innerWidth - h_wall - game_obgects[i].width) {
				game_obgects[i].x = window.innerWidth - h_wall - game_obgects[i].width;
			}
			else {
				if (event.clientX <= h_wall) {
					game_obgects[i].x = h_wall;
				}
				else {
					game_obgects[i].x = event.clientX - game_obgects[i].width / 2;
				}	
			}		
		}
	}
});
document.addEventListener('keydown', function(event) {
	console.log(event.key);
	if (event.key == 'Alt') {		
		for (let i = 0; i <= game_obgects.length-1; i++) {
			if (game_obgects[i].name == 'ball') {			
				game_obgects[i].direction = game_obgects[i].direction * -1;
				console.log (game_obgects[i].direction);
			}
		}
	}
});
gen_skittles ();
function game_time () {
	for (let i = 0; i <= game_obgects.length-1; i++) {
		if (game_obgects[i].name == 'ball') {
			game_obgects[i].x = game_obgects[i].x + delta_x;
			game_obgects[i].y = game_obgects[i].y + delta_y;
			if (game_obgects[i].y > (window.innerHeight - game_obgects[i].height)) {
				alert ('Игра окончена');
				break;
				return;
			}		
		}		
	}	
	check_collision ()	
	render ();
	setTimeout(game_time, time_step);
}
game_time ();