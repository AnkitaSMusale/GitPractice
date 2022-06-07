const my_form=document.querySelector('#my_form');
const amt=document.querySelector('#amt');
const descr=document.querySelector('#descr');
const categ=document.querySelector('#categ');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#Users');
my_form.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();

    if(amt.value==='' || descr.value==='' || categ.value==='none'){
        msg.classList.add('error');
        msg.innerHTML='please enter all fields';

        setTimeout(()=>msg.remove(),3000);
    }
    else{
        const li=document.createElement('li');
        const obj={
            amt : amt.value,
            descr : descr.value,
            categ : categ.value
        }
        removeUserFromScreen(obj.descr);
        localStorage.setItem(obj.descr,JSON.stringify(obj))
        li.appendChild(document.createTextNode(`${amt.value} - ${descr.value} - ${categ.value}`));  
        shownewUserOnScreen(obj);
        //userList.appendChild(li);
        amt.value='';
        descr.value=''

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
    if(localStorage.getItem(userdetail.descr) !== null)
    {
        removeUserFromScreen(userdetail.descr);
    }
    const parentNode = document.getElementById('Users');
    const childHTML = `<li id=${userdetail.descr}> ${userdetail.amt} - ${userdetail.descr} - ${userdetail.categ} <button onclick=EditUser('${userdetail.descr}','${userdetail.amt}','${userdetail.categ}')>Edit</button><button onclick=deleteUser('${userdetail.descr}')>Delete</button></li>`;
    parentNode.innerHTML += childHTML;
}
function EditUser(descr,amt,categ)
{
    document.getElementById('amt').value = amt;
    document.getElementById('descr').value = descr;
    document.getElementById('categ').value = categ;
    deleteUser(descr);
}
function deleteUser(descr)
{
    console.log(descr);
    localStorage.removeItem(descr);
    removeUserFromScreen(descr);
}

function removeUserFromScreen(descr)
{
    const parentNode = document.getElementById('Users');
    const childNodeTobeDeleted = document.getElementById(descr);

    
    if(childNodeTobeDeleted)
    {
        parentNode.removeChild(childNodeTobeDeleted);
    }
}
