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

        axios.post("https://crudcrud.com/api/e1da42a596e841049bb54d5bc3afb5ae/appointmentData",obj)
            .then((Response) => {
                shownewUserOnScreen(Response.data)
                console.log(Response) 
            })
            .catch((err) => {
                document.body.innerHTML += "<h4> Something Went Wrong </h4>";
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
        axios.get("https://crudcrud.com/api/e1da42a596e841049bb54d5bc3afb5ae/appointmentData")
            .then((Response) => {
                console.log(Response);
                for(let i=0 ; i<Response.data.length; i++)
                {
                    shownewUserOnScreen(Response.data[i]);
                }
            })
});
function shownewUserOnScreen(userdetail)
{
    /* //for reference - to get that particular _id
    userdetail = {
        _id : '',
        name : '',
        email : ''
    }*/
    const parentNode = document.getElementById('Users');
    const childHTML = `<li id=${userdetail._id}> ${userdetail.name} - ${userdetail.email} <button onclick=EditUser('${userdetail.email}','${userdetail.name}','${userdetail._id}')>Edit</button><button onclick=deleteUser('${userdetail._id}')>Delete</button></li>`;
    parentNode.innerHTML += childHTML;
}
function EditUser(email,name,UserID)
{
    /*document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    axios.put(`https://crudcrud.com/api/e1da42a596e841049bb54d5bc3afb5ae/appointmentData`)
        .then((Response) => {
            console.log(Response);
            
            deleteUser(UserID);
            //shownewUserOnScreen(Response.data)
            
        })
        .catch(err => console.log(err));*/
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    deleteUser(UserID);
}
function deleteUser(UserID)
{
    axios.delete(`https://crudcrud.com/api/e1da42a596e841049bb54d5bc3afb5ae/appointmentData/${UserID}`)
            .then((Response) => {
                console.log(Response);
                removeUserFromScreen(UserID);
            })
            .catch((err) => {
                document.body.innerHTML += "<h4> Cannot be Deleted </h4>"
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