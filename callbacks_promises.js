//promises
const posts = [
    {title : 'Post one' , body : 'This is post one',lastActivity : new Date().getTime()},
    {title : 'Post Two' , body : 'This is post two',lastActivity : new Date().getTime()} 
]
function getpost(){
    setTimeout(() => {
        let output = '';
        for(let i=0; i<posts.length; i++) {
            output += `<li> ${posts[i].title} - last activity ${(new Date().getTime()-posts[i].lastActivity)/1000} sec ago</li>`
        };
        document.body.innerHTML = output;
    },1000);
}
function createpost(post){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            posts.push(post);
            const error =false;
            if(!error)
                resolve();
            else
                reject('Error : Something went wrong');
        },1000);
    });
}  
createpost({title : 'Post Three' , body : 'This is post Three',lastActivity : new Date().getTime()}) 
.then(getpost); 
createpost({title : 'Post Four' , body : 'This is post four',lastActivity : new Date().getTime()}) 
.then(getpost); 

function deletePost(post)
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.pop(post);
            resolve();
           /*if(posts.length!==0)
            {
                for(let i=posts.length-1; i>=0; i--)
                {
                    posts.pop(post);
                } 
                 resolve();
            }
            else{
                reject('Error : Array is Empty Now');
            }    */     
        },1000);
    });
}

//deletePost().then(getpost).catch(err => console.log(err));
//deletePost().then(getpost).catch(err => console.log(err));
/*createpost({title : 'Post Five' , body : 'This is post Five'}) 
.then(() => {
    getpost()
    console.log(posts)
    deletePost().then(() => {
        //console.log(posts);
        getpost();
        console.log(posts)
    }) ;
})*/


/*const promise1 = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => setTimeout(resolve,3000,'goodbye'));
Promise.all([promise1,promise2,promise3]).then(values => console.log(values));
*/

function updateLastUserActivityTime(time)
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
               posts.lastActivity = new Date().getTime();
               resolve(posts.lastActivity);
        },1000);
    });
}
function updateuser(post)
{
    Promise.all([createpost,updateLastUserActivityTime])
    .then(() => {
        //console.log(data,values);
        for(let i=0; i<posts.length; i++)
        {
            console.log(posts[i].title+' '+posts[i].body+' '+(new Date().getTime()-posts[i].lastActivity)/1000+'sec ago');
        }
  })
    .catch(err => console.log(err));
}
//updateuser();
createpost({title : 'Post Six' , body : 'This is post Six',lastActivity : new Date().getTime()}) 
.then(() => {
    updateuser() 
    deletePost().then(()=>{
        getpost()
        /*createpost({title : 'Post Seven' , body : 'This is post Seven',lastActivity : new Date().getTime()})
        .then(() => {
            updateuser();
            getpost();

        })*/
    })
})
.then(() => {
    createpost({title : 'Post 8' , body : 'This is post 8',lastActivity : new Date().getTime()}) 
    .then(() => {
        createpost({title : 'Post 9' , body : 'This is post 9',lastActivity : new Date().getTime()}) 
        .then(updateuser).then(getpost);
    });
})




//callbacks
/*const posts = [
    {title : 'Post one' , body : 'This is post one',CreatedAt : new Date().getTime()},
    {title : 'Post Two' , body : 'This is post two',CreatedAt : new Date().getTime()}
    
]
let intervalId = 0;
function getpost(){
    clearInterval(intervalId)
    intervalId = setInterval(() => {

        let output = '';
        for(let i=0; i<posts.length; i++) {
            output += `<li> ${posts[i].title} - last updated ${(new Date().getTime()-posts[i].CreatedAt)/1000} sec ago</li>`
        };
        document.body.innerHTML = output;
    },1000);
}
function createpost(post , callback){
    setTimeout( () => {
        posts.push({...post,CreatedAt : new Date().getTime()});
        callback();
    },2000);
}
function create4post(post , callback){
    setTimeout( () => {
        posts.push({...post,CreatedAt : new Date().getTime()});
        callback();
       
    },3000);
}

getpost();
createpost({title : 'Post Three' , body : 'This is post three'},getpost);
create4post({title : 'Post Four' , body : 'This is post four'},getpost);

let timer;
var count = 0;
function lastEditedInSecondsAgo()
{
    count = 0;
    clearInterval(timer) ;
    timer = setInterval(() => {
        count ++;
        console.log(count +'sec ago');
       
    },1000);
}
lastEditedInSecondsAgo();
*/