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
}

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
*/

/*
//traversing dom
var itemlist = document.querySelector('#items');
//parentnode
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor = 'grey';
console.log(itemlist.parentNode.parentNode);

//parentelement
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = 'grey';
console.log(itemlist.parentElement.parentElement);

//childnodes
//console.log(itemlist.childNodes);
console.log(itemlist.children);
console.log(itemlist.children[3]);
itemlist.children[3].style.backgroundColor='pink';

//firstchild
console.log(itemlist.firstChild);

//first element child
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent='Welcome';

//lastchild
console.log(itemlist.lastChild);

//first element child
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent='goodbye';

//next sibling
console.log(itemlist.nextSibling);
//nextElementSibling
console.log(itemlist.nextElementSibling);

//previous sibling
console.log(itemlist.previousSibling);
//previousElementSibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color = 'red';

//create element(creating a div)
var newDiv = document.createElement('div');
//console.log(newDiv);
newDiv.className='hello';  //adding class
newDiv.id='hello1'; //adding id
newDiv.setAttribute('title','hello div'); //adding attribute
//console.log(newDiv);

//create text node
var newDivText = document.createTextNode('Hello world');
newDiv.appendChild(newDivText); //adding text to div
//console.log(newDiv);

//add HEllo word before Item Lister
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);

//add HEllo word before Item 1
var newDiv1 = document.createElement('div');
var newDiv1Text = document.createTextNode('Hello world');
newDiv1.appendChild(newDiv1Text);
var listgroup = document.querySelector('div .list-group');
var li = document.querySelector('div li');
console.log(newDiv1);
newDiv1.style.fontSize='18px';
listgroup.insertBefore(newDiv1,li);*/


var form = document.getElementById('addform');
var itemlist = document.getElementById('items');

//for submit event
form.addEventListener('submit', addItem);
//delete event
itemlist.addEventListener('click', removeitem);

//function to add items
function addItem(e)
{
    e.preventDefault();

    //to get input value
    var newitem = document.getElementById("item").value;

    //create new li element
    var li = document.createElement('li');

    //add class
    li.className='list-group-item';

    //add text node with input value
    li.appendChild(document.createTextNode(newitem));

    //create edit button
    var editbtn = document.createElement('button');

    //add classes to edit btn
    editbtn.className ='btn-danger btn-sm float-right delete';

    //append texxt node
    editbtn.appendChild(document.createTextNode('Edit'));
    
    //append button to li
    li.appendChild(editbtn);
    
    //create delete button
    var deletebtn = document.createElement('button');

    //add classes to del btn
    deletebtn.className ='btn-danger btn-sm float-right delete';

    //append texxt node
    deletebtn.appendChild(document.createTextNode('X'));
    
    //append button to li
    li.appendChild(deletebtn);
    
    //append li to list
    itemlist.appendChild(li);
}
//removing list element
function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}