obj1 = {num:5}

function add(a , b , c){
    return this.num + a + b + c;
}

//console.log(add.call(obj1,10));
var arr = [4,6, 10];
console.log(add.apply(obj1,arr));