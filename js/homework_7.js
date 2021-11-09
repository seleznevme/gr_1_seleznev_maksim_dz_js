function Create_calculator (name) {	
	let history = [];	
	let date = new Date();
	date = '(' + date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear() + ' ' +  date.getHours() + ':' + date.getMinutes() + ')';	
	this.name = name;
	this.sum = function(...arrg) {
		let summ = arrg[0];
		for (let i = 0; i <= arrg.length - 1; i++) {
			if (isNaN(arrg[i])){
				summ = false;
			}
			else {
				summ = summ + arrg[i];
			}
		}
		this.parameters = arrg;
		this.result = summ;
		history.push(name + ' ' + date + ': сумма = ' + summ + ',(' + arrg + ')');
	};
	this.mult = function(...arrg) {
		let mult = arrg[0];
		for (let i = 0; i <= arrg.length - 1; i++) {
			if (isNaN(arrg[i])){
				mult = false;
			}
			else {
				mult = mult * arrg[i];
			}			
		}
		this.parameters = arrg;
		this.result = mult;
		history.push(name + ' ' + date + ': произведение = ' + mult + ',(' + arrg + ')');
	};
	this.subtract = function (a, b) {
		if (isNaN(a) || isNaN(b)){
			this.result = false;
		}
		else {
			this.result = a - b;
			history.push(name + ' ' + date + ': вычитание = ' + this.result + ',(' + a + ',' + b + ')');
		}
	}
	this.divide = function (a, b) {
		if (isNaN(a) || isNaN(b)){
			this.result = false;
		}
		else {
			this.result = a / b;
			history.push(name + ' ' + date + ': деление = ' + this.result + ',(' + a + ',' + b + ')');
		}
	}
	this.history = {		
		console: function () {
			for (let i = 0; i <= history.length-1; i++){
				console.log(history[i]);
			}
			//return ('end of story');		
		},
		clear: function () {
			history = [];
			console.log ('История очищена');
			//return ('history is clean');
		},
	}
}
//проверка
let calc = new Create_calculator ('Мой калькулятор');
calc.sum (2, 3, 4, 7, 11, 17);
calc.mult (2, 3, 4, 7, 11, 17);
calc.subtract (5, 3);
calc.divide (12, 3);
calc.history.console ();
calc.history.clear ();