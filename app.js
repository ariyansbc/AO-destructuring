//array destructuring
const numbers = [21,51,25,35,60,100,90];

// const x = numbers[0];
// const y = numbers[1];
// const [x,y] = [50,30];
const [x,y] = numbers;


function boxify(num1) {
    return [num1, num1+5]
}

const [box1, box2] = boxify(15);
console.log([box1,box2]);
console.log(x,y);

//Object destructuring
const person = {id: 1, money: 2300, age: 25, name: "ariyan"}
const {money} = person;
const {name,age}= {
     id : 1,
     money: 25000,
     name : "jalal",
     age : "25"
 }
console.log(name);
console.log(age);
console.log(money);
//create object shortcut
const p = 25;
const q = 35;

const obj = {p: p, q:q}
const obj2 = {p,q};
console.log(obj);
console.log(obj2);

//creating three dots
numbers.push(11)
const numbers2 = [...numbers,200,300];
console.log(numbers2);
