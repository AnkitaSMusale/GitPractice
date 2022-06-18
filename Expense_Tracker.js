// Rest API - crudcrud.com 
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
        axios.post("https://crudcrud.com/api/bffd9bdd8bb9464a921f98acdbc78076/ExpenseTracker",obj)
            .then((Response) => {
                shownewUserOnScreen(Response.data);
                console.log(Response);
            })
            .catch((err) => {
                document.body.innerHTML += "<h4> Something Went Wrong </h4>";
                console.log(err);
            })
        li.appendChild(document.createTextNode(`${amt.value} - ${descr.value} - ${categ.value}`));  
        
        amt.value='';
        descr.value='';
        categ.value='';
    }
}       
document.addEventListener('DOMContentLoaded',() => {
    console.log("dom has loaded");

    axios.get("https://crudcrud.com/api/bffd9bdd8bb9464a921f98acdbc78076/ExpenseTracker")
        .then((Respose)=> {
            console.log(Respose);
            for(let i=0; i<Respose.data.length; i++)
            {
               shownewUserOnScreen(Respose.data[i]);
            }
    })
            
})
function shownewUserOnScreen(userdetail)
{
    /* //for reference - to get that particular _id
    userdetail = {
        _id : '',
        amt : '',
        descr : '',
        categ : ''
    }*/
    const parentNode = document.getElementById('Users');
    const childHTML = `<li id=${userdetail._id}> ${userdetail.amt} - ${userdetail.descr} - ${userdetail.categ} 
                        <button onclick=EditUser('${userdetail.descr}','${userdetail.amt}','${userdetail.categ}','${userdetail._id}')>Edit</button>
                        <button onclick=deleteUser('${userdetail._id}')>Delete</button></li>`;
    parentNode.innerHTML += childHTML;
}
function EditUser(descr,amt,categ,UserID)
{
    document.getElementById('amt').value = amt;
    document.getElementById('descr').value = descr;
    document.getElementById('categ').value = categ;
    deleteUser(UserID);
    
}
function deleteUser(UserID)
{
    
    axios.delete(`https://crudcrud.com/api/bffd9bdd8bb9464a921f98acdbc78076/ExpenseTracker/${UserID}`)
        .then((Response) => {
          console.log(Response);
          removeUserFromScreen(UserID);
        })
        .catch((err) => {
            document.body.innerHTML += "<h4> Data Not found </h4>";
            console.log(err);
        })
    
}

function removeUserFromScreen(UserID)
{
    const parentNode = document.getElementById('Users');
    const childNodeTobeDeleted = document.getElementById(UserID);

    
    if(childNodeTobeDeleted)
    {
        parentNode.removeChild(childNodeTobeDeleted);
    }
}

/*  //local storage
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
*/
