obj1 = {num:5}

function add(a){
    return this.num + a ;
}

console.log(add.call(obj1,10));