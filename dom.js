/*console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title=123;
console.log(document.all);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all[10]);
document.all[10].textContent='Hello';
console.log(document.forms[0]);
console.log(document.links);

console.log(document.images);

//getElementbyID
//console.log(document.getElementById('header-title'));
var headertitle= document.getElementById('header-title');
console.log(headertitle);
headertitle.textContent='Goodbye';
headertitle.innerText='welcome';
console.log(headertitle.innerText);
headertitle.innerHTML='<h3>GM</h3>';
headertitle.style.borderBottom ='solid 3px #000';
var header= document.getElementById('main-header');
console.log(header);
header.style.border ='solid 3px #000';
var heading= document.getElementById('heading');
console.log(heading);
heading.style.color='green';
heading.innerHTML='<b>ADD ITEMS';
*/

//get element by classname
/*var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].textContent='Hello';
items[2].style.fontWeight='bold';
items[2].style.backgroundColor='green';
//items.style.backgroundColor='pink'; //gives error ->hence use a for loop
for(var i=0; i<items.length; i++)
{
    items[i].style.fontWeight='bold';
    //items[i].style.color='red';
}


//get element by tagname
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[2]);
li[2].textContent='Hello';
li[2].style.fontWeight='bold';
li[2].style.backgroundColor='pink';
//items.style.backgroundColor='pink'; //gives error ->hence use a for loop
for(var i=0; i<li.length; i++)
{
    li[i].style.fontWeight='bold';
    //items[i].style.color='red';
}*/

//Queryselector
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px blue';

var input = document.querySelector('input');
input.value='Hello world';

var submit = document.querySelector('input[type="submit"]');
submit.value='Send';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color = 'purple';

var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor = 'green';

//var thirditem = document.querySelector('.list-group-item:nth-child(3)');
//thirditem.style.display = 'none';

//queryselectorall
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor='green';
    even[i].style.backgroundColor='yellow';
}

var secondlistitem = document.querySelectorAll('li');
secondlistitem[1].style.color ='green';

