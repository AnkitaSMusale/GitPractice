Student = {age : 20}

function print(){
    return this.age;
}
var bound = print.bind(Student);
console.log(bound());


/*obj1 = {num:5}
function add(a , b , c){
    return this.num + a + b + c;
}

//console.log(add.call(obj1,10));
//console.log(add.apply(obj1,arr));
var arr = [4,6,10];
//console.log(add.bind(obj1,arr));
var bound = add.bind(obj1);
console.log(bound(4,6,10));*/