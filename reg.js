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
const name=document.querySelector('#name');
const email=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#Users');
my_form.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();

    if(name.value==='' || email.value===''){
        msg.classList.add('error');
        msg.innerHTML='please enter all fields';

        setTimeout(()=>msg.remove(),3000);
    }
    else{
        const li=document.createElement('li');
        //li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
        //li.appendChild(document.createTextNode(localStorage.setItem(nameInput.value,emailInput.value)));
        //li.appendChild(document.createTextNode(localStorage.setItem("userdetails",JSON.stringify(obj))));
        //localStorage.setItem("name",name.value);
        //localStorage.setItem("email",email.value);
        const obj={
            name : name.value,
            email : email.value
        }
        removeUserFromScreen(obj.email);
        localStorage.setItem(obj.email,JSON.stringify(obj))
        li.appendChild(document.createTextNode(`${name.value} - ${email.value}`));  
        shownewUserOnScreen(obj);
        //userList.appendChild(li);
        name.value='';
        email.value='';

}
}       
document.addEventListener('DOMContentLoaded',() => {
        console.log("dom has loaded",localStorage);
        console.log(Object.keys(localStorage));

        var keysarr = Object.keys(localStorage);
        keysarr.forEach(keys =>{
            const userdetail = JSON.parse(localStorage[keys]);
            shownewUserOnScreen(userdetail);
        })
});
function shownewUserOnScreen(userdetail)
{
    //console.log(localStorage.getItem(userdetail.email));
    if(localStorage.getItem(userdetail.email) !== null)
    {
        removeUserFromScreen(userdetail.email);
    }
    const parentNode = document.getElementById('Users');
    const childHTML = `<li id=${userdetail.email}> ${userdetail.name} - ${userdetail.email} <button onclick=EditUser('${userdetail.email}','${userdetail.name}')>Edit</button><button onclick=deleteUser('${userdetail.email}')>Delete</button></li>`;
    parentNode.innerHTML += childHTML;
}
function EditUser(email,name)
{
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    deleteUser(email);
}
function deleteUser(email)
{
    console.log(email);
    localStorage.removeItem(email);
    removeUserFromScreen(email);
}

function removeUserFromScreen(email)
{
    const parentNode = document.getElementById('Users');
    const childNodeTobeDeleted = document.getElementById(email);

    
    if(childNodeTobeDeleted)
    {
        parentNode.removeChild(childNodeTobeDeleted);
    }
}

/*  //manually storing values 1 by 1 in localstorage
localStorage.setItem('name','Ankita');
console.log(localStorage.getItem('name'));
localStorage.setItem('name1','John');
console.log(localStorage.getItem('name1'));
localStorage.removeItem('name');*/