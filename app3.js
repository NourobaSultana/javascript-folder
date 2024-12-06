const x= 0.6;
const y= 0.7;
const l = (x+y).toFixed(2);
console.log((x*10 + y*10)/10);

const a = 10;
const b= 20;
const c= 30;

console.log(b+a + l +c);
console.log(c-l);
console.log(c*l);
console.log(c/l);

let num = 2;
let value ="";
while (num != Infinity){
    num = num*num;
    value= value + num + '<br>';
}

document.getElementById('title').innerHTML= value;

//variable cer binary
console.log(c.toString(2));// 2 means binary value
console.log(c.toString(8));// 0ctal value
console.log(c.toString(16));// hexadecimal value
console.log(c.toString(10));// decimal value

// string react as number 
const g= 300;
const h= new Number("300");
const j = 7687686876
console.log(g==h);
console.log(g===h);

console.log(g.toPrecision(4));// koto ghore dekhabe number seta define kore
console.log(j.toPrecision(4));

// js number method
let newNum = Number.EPSILON;
newNum = Number.MAX_VALUE;
newNum = Number.MIN_VALUE;
newNum = Number.POSITIVE_INFINITY;
newNum = Number.NEGATIVE_INFINITY;
newNum = Number.NaN;
console.log(newNum);

//javascript Date
const myDate= new Date();
console.log(myDate);
console.log(myDate.toLocaleString());//11/17/24
console.log(myDate.toDateString()); //sun nov 17 2024
console.log(myDate.toLocaleString('default', {
    weekday: 'long',
}));

let updateDate = new Date(2024, 3, 5, 11,30,45,0); // hour,minute, second, milisecond
console.log(updateDate);// date er mash suru hoy 0 theke  thats mean 3 = april

let myTime = Date.now();
// function simpleTask(){
//     for (let step= 0; step < 5; step++){
//         console.log('walking', step);
//     }
   
// }
// execution time lets count
// let startTime = Date.now(); //start time start from start program
// simpleTask();
// let endTime = Date.now();// end time end at last line of our program
// console.log(`the task took ${endTime-startTime} milisecond to complete`); //1 january 1970 theke start

console.log(myTime/1000); // = second  or /60= minute
console.log(myDate.getDate());
console.log(myDate.getFullYear());

//javascript Memory

/*
? call stack
! Premitive Data Type
* String, Number Boolean, Undefine, Null, Symb, BigInt
*/

let fulName ='Toma akter';
let webDeveloper= fulName;
webDeveloper='Shuvo';

console.log(fulName);
console.log(webDeveloper);

/*
? Heap
! Non Premitive Data Type
* Object, Array
 !shift + alt + a multcomment
*/ 

let student = {
    name: 'Toma',
    age: 27,
};
let peoples= student;
peoples={
    name:'Shuvo',
    age: 31,
}
console.log(student);
console.log(peoples);