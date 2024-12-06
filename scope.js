//global scope
let car = 'corolla';
console.log(car);

/* 
! curly braces er moddhe jekono content nile setake amra boli block scope
*/
if(true){
    console.log(car);
    let bike='r15';
}

//console.log(bike); // this can not detect this is global scope

//local scope
/* 
! function er vetore scope nile setake boli functon scope
*/
function name(){
    let mobile='samsung';
    console.log(mobile);
    console.log(car);
    //console.log(bike);
}

name();

let x = 100;
console.log(x);
function main(){
    let x = 10;
    console.log(x);
}
main();
console.log(x);
//hoisting
/* 
! hoisting is 2 types variable hoisting & functional hoisting
 */
/* 
! var  as hoisting because
! i can get code by this formating, 
*/

people = 'Toma';
console.log(people);
var people;


/* 
! but let and const can not do this, thats why there is no hoisting, 
!hoistinh means js understand the declaration part on the top of the line 
 */

/*
 freeze = 'MyOne';
console.log(freeze);
let freeze;

!this can not occure also in const because there have no hoisting
 */

/*
 javascript strick mode
 */
'use strict';
let y = 5;
console.log(y);

function pName(p1, p2){
    let z= 5;
    console.log(p1,p2);
}
pName(3,5);

// javascript this

console.log(this);

var firstName= 'Ali';
function myFunction(){
    return this;
}
console.log(myFunction());

const myBtn = document.querySelector('button');
myBtn.addEventListener('click', function(){
    console.log(this);
}); 
  var fName = 'shubho';
const student ={
    fName: 'toma',
    sInfo: function(){
        return`${this.fName} love to read`
    },
    arrowFunction:() => {
        return`${this.fName} loves to read`
    }
}; // this is not a function, this is a method

console.log(student.sInfo());
console.log(student.arrowFunction());

/* 
function(when function is a method) er this ta refer kore object ke 
*/

function myFunction(){
    return this;
}

const game ={
    gName: 'Nfs',
    gInfo: function(){
        console.log(`Love to play ${this.gName}`);
    },
};

const aGame={
    gName: 'car Game',
}
const bindGame = game.gInfo.bind(aGame);
console.log(game.gInfo());
console.log(bindGame());

function square(num){
    return num*num;
}
console.log(square(4));
// javascripts memorization 25 lecture 24 inutes full code
//higher order array

const fruits = ['Mango', 'Banana', 'Orange', 'Graps'];
for (let fruit= 0; fruit<fruits.length; fruit++){
    console.log(fruits[fruit]);
}

// same code in simple way
for (const fruit of fruits) {
    console.log(fruit);
}
const myname ='Toma Begum';
for (const name of myname) {
    console.log(`Each char is ${name}`);
}

const country = new Map([
    ['Bn', 'Bangladesh'],
['pk', 'pakistan'],
['In', 'India'],
]);

country.set('vu', 'vutan');
for (const[key,value] of country){
    console.log(key, ':', value);
};

// for (const key of country) {
//     console.log(key); 
// }
for (const key in country) {
 console.log(key, ':', country[key]);
}

for (const key of Object.keys(country)) {
    console.log(key);
}

for (const key in fruits) {
 console.log(fruits[key]);
}
//call back
fruits.forEach(function(fruit){
console.log(fruit);
})
fruits.forEach(function (fruit){
    console.log(fruit);
})

fruits.forEach(fruit => {
    console.log(fruit);
})

function myFruit(fruit){
 console.log(fruit);
}

fruits.forEach(myFruit)

const mobile =['samsung', 'redmi', 'poco', 'realmi', 'oppo']
mobile.forEach((mbl => console.log(mbl)));

const stack = [
  {
    name: 'MERN Stack',
    property: 'Mongo, Express, React, Node',
    foundation: 'Javascript',
    tranding: false,
    price: 3000,
  },
  
  {
    name: 'Mean Stack',
    property: 'Mongo, Express, Angular, Node', 
    foundation: 'Javascript',
    tranding: false,
    price: 3000,
  },
{
    name: 'Laravel',
    property: 'Javascript, Vue, PHP, Laravel, MySQL',
    foundnation: 'PHP',
    tranding: true,
    price: 4000,

}
];

fruits.forEach((fruit)=> console.log(fruit));

const fruitCapB = fruits.filter((fruit)=> 
    fruit.toLowerCase().startsWith('b'));

const fruitsLen5= fruits.filter(fruit=>fruit.length===5)
console.log(fruitsLen5);

const fruitStartG= fruits.filter(fruit=>fruit.toLocaleLowerCase().includes('g'));
console.log(fruitStartG);
const numbers= [1,2,3,4,5,6,7,8];
const big5= numbers.filter(num => num > 5);
console.log(big5);

let userStack = stack.filter(sk=> sk.foundation ==='javascript');
console.log(userStack);

const numb= numbers
.map(num=> num+5)
.map(num=> num*5)
.filter(num=> num>= 50);
console.log(numb);

//reduce
const myTotal = numbers.reduce((accu, currentValue)=>{ console.log(`Accumulator ${accu} and currentValue ${currentValue}`); return accu+currentValue},0);//accu=accumulator
console.log(myTotal);

const courseTotalprice =stack.reduce((acc, course)=> acc+ course.price, 15);
console.log(courseTotalprice);

//javascript call and apply method

const greenLine ={
    bus: 'Green line per paaribahan',
    bCode: 'GL',
    ticket: [],
    book (sitNumber,name){
        console.log(`${name} booked a seat on ${this.bus} ticket ${this.bCode}-${sitNumber}`);
        this.ticket.push({ticketInfo: `${this.bCode} ${sitNumber}, name`});
    }
}

const library={
    lName: 'amin library',
    cName: 'shafin',
    price: '30$',

    book(bookPNum, warrenty){
        console.log(`pin number of ${bookPNum} from ${this.lName}, the customer - ${this.cName},which price is ${this.price} & warrenty is ${warrenty}`);
    }
}

const books = library.book;

const pin ={
    bookPin:'6df6ifg9',
    cName: 'Tamanna',
};
books.call(pin, '53fd5e7w', '4 month');

library.book('53fd5e7w', '4 month')

greenLine.book('C1', 'Ali hossaain');
greenLine.book('c2', 'Toma');
console.log(greenLine);

const salsabil= {
   bus: 'Salsabil per paribahan',
   cCode: 'ML',
   ticket: [],
   book (sNumber,names) {
    console.log(`${names} booked a seat on ${this.bus}, ticket ${this.cCode}-${sNumber}`);
   }
}

salsabil.book('F1','parvin Akter');

const book = greenLine.book;
const shiuly={
    bus: 'Shiuly Paribahan',
    bCode: 'sh',
    ticket: [],
};

book.call (shiuly, 'G1', 'Rose');

//apply method
const dim=['shuruj', 'G1', 'Rose'];
book.apply(greenLine,dim);