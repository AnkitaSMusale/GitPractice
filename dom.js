console.dir(document);
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

