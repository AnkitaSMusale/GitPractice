/*const ul=document.querySelector('.items');
ul.firstElementChild.textContent='Hello';
ul.children[1].innerText='Brand';
ul.lastElementChild.innerHTML='<h3>Hello</h3>';

ul.firstElementChild.style.background='green';
ul.children[1].style.background='yellow';*/

/* btn=document.querySelector('.btn');
btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
    document.querySelector('#my_form').style.background='yellow';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>'
});*/
const my_form=document.querySelector('#my_form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#Users');

my_form.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();

    if(nameInput.value==='' || emailInput.emailInput===''){
        msg.classList.add('error');
        msg.innerHTML='please enter all fields';

        setTimeout(()=>msg.remove(),3000);
    }
    else{
        const li=document.createElement('li');
        //li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
        li.appendChild(document.createTextNode(localStorage.setItem(nameInput.value,emailInput.value)));

        /*userList.appendChild(li);
        nameInput.value='';
        emailInput.value='';*/
}
}
/*localStorage.setItem('name','Ankita');
console.log(localStorage.getItem('name'));
localStorage.setItem('name1','John');
console.log(localStorage.getItem('name1'));
localStorage.removeItem('name');*/