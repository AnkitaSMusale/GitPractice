
/* //syntax error : a is already declared
let a=10;
{
    var a = 100;
    console.log(a);
}
console.log(a);
*/

/*var a=10;
{
    let a = 100;
    console.log(a);
}
console.log(a);
*/
 //****************************************************************************8
/* //reference error : a is not defined
function y(){
    function x()
    {
        var a =10;
    }
    x();
}
y();
console.log(a);
*/
//****************************************************************************8

/*function y(){
    for(var i=0; i<6; i++){
        setTimeout(()=>console.log(i),1000)
    }
}
y();
*/

/*function y(){
    for(let i=0; i<6; i++){
        setTimeout(()=>console.log(i),1000)
    }
}
y();
*/
//****************************************************************************8
/*console.log('a');
console.log('b');
setTimeout(() => console.log('c'),2000);
setTimeout(() => console.log('d'),0);
console.log('e');
*/
let promise = new Promise((res,rej)=>{
    setTimeout(()=> {
        res(console.log('buy a car'))
    },2000)
})
promise.then(()=> console.log('plan a goa trip')).catch(()=> console.log('book a cab'))