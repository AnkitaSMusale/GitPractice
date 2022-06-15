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
        const obj={
            name : name.value,
            email : email.value
        }
        removeUserFromScreen(obj.email);

        axios.post("https://crudcrud.com/api/99be81678918400f91e1f7137f9f1f37/appointmentData",obj)
            .then((Response) => {
                shownewUserOnScreen(Response.data)
                console.log(Response) 
            })
            .catch((err) => {
                document.body.innerHTML += "<h4> Something Went Wrong </h4>"
                console.log(err);
            })

        //localStorage.setItem(obj.email,JSON.stringify(obj))
        li.appendChild(document.createTextNode(`${name.value} - ${email.value}`));  
        //shownewUserOnScreen(obj);
        //userList.appendChild(li);
        name.value='';
        email.value='';

    }
}       
document.addEventListener('DOMContentLoaded',() => {
        console.log("dom has loaded");
        //console.log(Object.keys(localStorage));

        var keysarr = Object.keys(localStorage);
        keysarr.forEach(keys =>{
            const userdetail = JSON.parse(localStorage[keys]);
            shownewUserOnScreen(userdetail);
        })
});
function shownewUserOnScreen(userdetail)
{
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
    removeUserFromScreen(email);
    localStorage.removeItem(email);
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