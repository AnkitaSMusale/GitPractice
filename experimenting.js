/*var a =function(){
    this.val = 2;
    setTimeout(() => {
        this.val += 2;
        console.log(this.val);
    } , 1)
};
var y = new a();*/
//Take the student class which you made up and write a function called egligible
// for placements which basically takes the minimum board marks required by a 
//candidate to sit for the company coming for placement and it returns a fat arrow function.
//The fat arrow function takes age as an argument and returns true if the given student
// has board marks greater than minimum
// board marks required by company and is above the required age set by the company.
class Student {
    constructor(name,age,phone,marks){
       this.name = name;
       this.marks = marks;
       this.age = age;
       this.phone = phone;
       this.min = '50' ;
       this.minage = '20' ;
    }
    show()
    {
         console.log(`name is ${this.name}, age is ${this.age} , contact details: ${this.phone}, board marks : ${this.marks}`);   
    }
    eligibility = (age) => {
        if(this.marks > this.min && this.age > this.minage)
            return `${this.name} is eligible`;
        else
           return `${this.name} is not eligible`;
        }  
}
const john = new Student('john',21,909889876,70);
const bob = new Student('bob',12,909889876,80);
const nick = new Student('nick',13,909889876,30);
const angelina = new Student('angelina',24,909889876,90);
const rock = new Student('rock',25,909889876,60);
console.log(john.eligibility());
console.log(bob.eligibility());
console.log(nick.eligibility());
console.log(angelina.eligibility());
console.log(rock.eligibility());



//this.table = 'table'; 

/*
class Student {

   constructor(name,age,phone,marks){

        console.log(`name is ${name}, age is ${age} , contact details: ${phone}, board marks : ${marks}`);

    }

}
*/
//How will you design a Student class which stores the name , age , phone number, board marks of each student. Make a constructor to initialize the values.
//Write a function to check whether the student is egligible or not for college.
// If board marks > 40 -> egligible , if less than 40 -> not egligible
//.Write a function to check this.
/*class Student {
    static count = 0;
    constructor(name,age,phone,marks){
       // console.log(`name is ${name}, age is ${age} , contact details: ${phone}, board marks : ${marks}`);
       this.name = name;
       this.marks = marks;
       this.age = age;
       this.phone = phone;
       
       Student.studcount();
    
    }
    show()
    {
         console.log(`name is ${this.name}, age is ${this.age} , contact details: ${this.phone}, board marks : ${this.marks}`);   
    }
    static studcount(){
        return (Student.count++); 
    }
    eligibility(marks) {
        if(this.marks > 40)
            console.log(`${this.name} is eligible`);
        else
            console.log(`${this.name} is not eligible`);
        }  
}
const john = new Student('john',21,909889876,30);
const bob = new Student('bob',22,909889876,30);
const nick = new Student('nick',23,909889876,30);
const angelina = new Student('angelina',24,909889876,30);
const rock = new Student('rock',25,909889876,30);
//john.show();

console.log(Student.studcount());

//console.log(Student.show());
//john.eligibility();
//const Bob = new Student('bob',21,9559889876,80); */


