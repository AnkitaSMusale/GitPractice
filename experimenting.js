/*  
//one way to impelenting currying
let multiply = function(x,y){
    console.log(x*y);
}

//let multiplyby2 = multiply.bind(this , 2);  // by default set x = 2
//multiplyby2(6);

let multiplyby2 = multiply.bind(this , 2 , 5);  // by default set x = 2 & y =5 ,ignores 6
multiplyby2(6);

let multiplyby3 = multiply.bind(this , 3);   // by default set x = 3
multiplyby3(6);
*/

//another way to impelenting currying
let multiply = function(x){
    return function(y){
        console.log(x*y);
    } 
}
let multiplyby2 = multiply(2);
multiplyby2(6);

let multiplyby3 = multiply(3);
multiplyby3(6);