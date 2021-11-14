//Задача 1
setTimeout(function () {
	for (let i = 0; i <= 1000; i++) {
		let div = $('<div></div>');		
		div.appendTo('body');
		div.css ('display', 'inline-block');
		div.css ('height', '70px');
		div.css ('width', '70px');
		div.css ('background', 'blue');
		div.css ('margin', '2px');
	}	
}, 2000);
//Задача 2
setTimeout(function () {
	let arr = $('div');	
	$('div').css ('height', '100px');
	$('div').css ('width', '100px');
	$('div').css ('background', 'purple');	
}, 4000);
//Задача 3
setTimeout(function () {
	let arr = $('div');	
	for (let i = 0; i <= arr.length-1; i++) {		
		$('<span>'+ (i+1) +'</span>').appendTo(arr[i]);		
		//arr[i].innerHTML = ('<span>'+ (i+1) +'</span>');
		}
		$('span').css ('color', 'white');
		$('span').css ('display', 'block');
		$('span').css ('margin', '5px');
}, 6000);
//Задача 4
setTimeout(function () {
	let arr = $('div');	
	for (let i = 0; i <= arr.length-1; i++) {		
		if ((i+1) % 3 == 0) {
			arr[i].style.background = 'red';
		}
		if ((i+1) % 15 == 0) {
			arr[i].style.width = 0;
			arr[i].style.height = 0;
			arr[i].style.borderLeft = '50px solid transparent';
    		arr[i].style.borderRight = '50px solid transparent';
    		arr[i].style.borderBottom = '100px solid #78866b';
			arr[i].style.background = 'transparent';			
		}
	}	
}, 8000);
//Задача 5
setTimeout(function () {
	let arr = $('div');	
	for (let i = 0; i <= arr.length-1; i++) {		
		if ((i+1) % 3 == 0 && (i+1) % 15 != 0) {
			arr[i].remove();
		}		
	}	
}, 10000);