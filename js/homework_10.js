fetch('https://jsonplaceholder.typicode.com/users')
.then(function (response) {
  return (response.json());  
})
.then(function (json) {
  console.log(json);
  for(let i = 0; i <= json.length-1; i++){
    let div_main = document.getElementById(String(i));    
    let photo = div_main.getElementsByTagName('img');    
    photo[0].src = 'img\/' + (i + 1) + '.png';
    let div_name = div_main.getElementsByClassName('title');
    let name = div_name[0].getElementsByTagName('span');
    name[0].textContent = json[i].name;
    let username = div_main.getElementsByClassName('username');   
    username[0].textContent = username[0].textContent + ' ' + json[i].username;    
    let company = div_main.getElementsByClassName('company');   
    company[0].textContent = company[0].textContent + ' ' + json[i].company.name;
    let mail = div_main.getElementsByClassName('mail');   
    mail[0].textContent = mail[0].textContent + ' ' + json[i].email;
    let site = div_main.getElementsByClassName('site');   
    site[0].textContent = site[0].textContent + ' ' + json[i].website;
    let phone = div_main.getElementsByClassName('phone');   
    phone[0].textContent = phone[0].textContent + ' ' + json[i].phone;
    let button = div_main.getElementsByClassName('more');    
    button[0].setAttribute ('onclick', 'alert('+ '\'' + 'city: ' + json[i].address.city + '\'' +')');
  }
})
// функция создания заготовки карточки пользователя
function gen_card (number) {
  let div = document.createElement('div');
  document.body.append(div_main);    
  let div_main = document.createElement('div');  
  div.appendChild(div_main);
  div_main.className = 'main';
  div_main.id = String(number);

  let div_photo = document.createElement('div');
  div_photo.className = 'photo';
  div_main.appendChild(div_photo);

  let photo = document.createElement('img');
  photo.src = 'img\/0.png';
  div_photo.appendChild(photo);

  let div_title = document.createElement('div');
  div_title.className = 'title';
  div_main.appendChild(div_title);

  let div_info = document.createElement('div');
  div_info.className = 'info';
  div_main.appendChild(div_info);

  let div_buttons = document.createElement('div');
  div_buttons.className = 'buttons';
  div_main.appendChild(div_buttons);

  let span_name = document.createElement('span');
  div_title.appendChild(span_name);  
  span_name.textContent = 'Name'

  let span_username = document.createElement('span');
  div_info.appendChild(span_username);  
  span_username.textContent = 'Username:';
  span_username.className = 'username';

  let span_company = document.createElement('span');
  div_info.appendChild(span_company);  
  span_company.textContent = 'Company:';
  span_company.className = 'company';

  let span_mail = document.createElement('span');
  div_info.appendChild(span_mail);  
  span_mail.textContent = 'Mail:';
  span_mail.className = 'mail';

  let a_site = document.createElement('a');
  let a_span_site = document.createElement('span');
  div_info.appendChild(a_span_site);
  div_info.appendChild(a_site);  
  a_span_site.textContent = 'Site:';
  a_span_site.style.display = 'inline-block';
  a_site.href = 'Site:';
  a_site.className = 'site';

  let span_phone = document.createElement('span');
  div_info.appendChild(span_phone);  
  span_phone.textContent = 'Phone: ';
  span_phone.className = 'phone';

  let button_rem = document.createElement('button');
  div_buttons.appendChild(button_rem);
  button_rem.textContent = 'Delete';
  button_rem.setAttribute ('onclick', 'document.getElementById(' + number + ').remove()');
  let button_inf = document.createElement('button');
  div_buttons.appendChild(button_inf);
  button_inf.textContent = 'More';
  button_inf.className = 'more';
}
for(let i = 0; i <= 9; i++){
  gen_card (i);
}
