//My parameters
const my_name = 'Max';
let my_age = 32;
const my_gender = 'male';
let my_height = 182;
let my_weight = 95;
//My dog`s parametrs
let dog = {
	name: 'Lada',
	age: 1,
	gender: 'female',
	height: 30,
	weight: 1.5,
}
document.querySelector('.my_name').textContent = my_name;
document.querySelector('.my_age').textContent = my_age;
document.querySelector('.my_gender').textContent = my_gender;
document.querySelector('.my_height').textContent = my_height;
document.querySelector('.my_weight').textContent = my_weight;

document.querySelector('.dog_name').textContent = dog.name;
document.querySelector('.dog_age').textContent = dog.age;
document.querySelector('.dog_gender').textContent = dog.gender;
document.querySelector('.dog_height').textContent = dog.height;
document.querySelector('.dog_weight').textContent = dog.weight;

let a = prompt('введите а', 0);
a = Number(a);
let b = prompt('введите b', 0);
b = Number(b);
let c = (a % b);
console.log(c)
