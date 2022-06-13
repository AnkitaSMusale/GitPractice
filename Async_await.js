//3) create and delete post using promises
const posts = [
    {title : 'Post one' , body : 'This is post one',lastActivity : new Date().getTime()},
    {title : 'Post Two' , body : 'This is post two',lastActivity : new Date().getTime()}, 
    {title : 'Post three' , body : 'This is post three',lastActivity : new Date().getTime()} 
]

function getpost(){
    setTimeout(() => {
        let output = '';
        for(let i=0; i<posts.length; i++) {
            output += `<li> ${posts[i].title} - last activity ${(new Date().getTime()-posts[i].lastActivity)/1000} sec ago</li>`
        };
        document.body.innerHTML = output;
    },1000);
};
   
const promises = async() => {
    const createpost =  new Promise((resolve,reject) => {
        setTimeout( (post) => {
            posts.push(post);
            console.log(posts);
            const error =false;
            if(!error)
                resolve('created');
            else
                reject('Error : Something went wrong');
        },1000);
       
    });

    const deletePost = new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.pop();
            resolve('deleted');
            console.log(posts.pop());
        },3000);
        
    });

    let create = await createpost;
    console.log(`posts ${create} successfully`)
    let delete1 = await deletePost;
    console.log(`posts ${delete1} successfully`)
}
//user().then((m) => console.log(`posts ${m}`));
getpost(); 
promises().then(getpost).then(() => console.log(`posts updated`)); 
 


/* // 2)how to deal with promises
console.log('person1 : shows ticket');
console.log('person2 : shows ticket');

//const preMovie = async() => 'preMovieTime';
//preMovie().then((m) => console.log(m));
const preMovie = async() => {
    
    const promiseWifeBringTicket = new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket'),3000);
    });

    const getPopcorn = new Promise((resolve,reject) => resolve('popCorn'));
    const getButter = new Promise((resolve,reject) => resolve('butter'));
    const getColdDrinks  = new Promise((resolve,reject) => resolve('ColdDrinks'));

    let ticket = await promiseWifeBringTicket;
    console.log(`husband : we should go in,give me the ${ticket}`);
    console.log('wife : no i am hungry');

    let popcorn = await getPopcorn;
    console.log('husband : what you want?');
    console.log('wife : I want popcorn');

    let butter = await getButter;
    console.log(`husband : Okay , I got some ${popcorn}`);
    console.log(`wife : I need ${butter} on my popcorn`);

    let drinks = await getColdDrinks;
    console.log(`husband : Okay , I'll get some ${drinks} also`);
    console.log(`wife : Ohh, thats great then`);

      //using promise.all ,instead creating await for all
    //let [popcorn,butter,drinks] = await Promise.all([getPopcorn,getButter,getColdDrinks])
    //console.log(`${popcorn} , ${butter} , ${drinks}`)
    //return ticket;
}
preMovie().then((m) => console.log(`person5 : shows ${m}`));
console.log('person3 : shows ticket');
console.log('person4 : shows ticket');
*/

/*
//1)simple structure
console.log('person1 : shows ticket');
console.log('person2 : shows ticket');

const promiseWifeBringTicket = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('ticket');
    },3000)
});

const getPopcorn = promiseWifeBringTicket.then((t) => {
    console.log('husband : we should go in');
    console.log('wife : no i am hungry');
    return new Promise((resolve,reject) => resolve(`${t} popcorn`));
    //console.log('husband : we should go in');
});
const getButter = getPopcorn.then((t) => {
    console.log('husband : we should go in');
    console.log('wife : I need butter on my popcorn');
    return new Promise((resolve,reject) => resolve(`${t} butter`));
    
});
getButter.then((t) => console.log(t));
console.log('person13 : shows ticket');
console.log('person4 : shows ticket');*/