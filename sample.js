// console.log('Hello World')

// let x=123; // variables
// console.log(x);

// for (let i=1;i<=10;i++) // loops
// {
//     console.log(x*i);
// }

// objects
// let person = { 
//     name: 'Joel',
//     age: 22,
//     height: 175
// };
// person.height = 178
// console.log(person);

let array = ['red', 'blue', 'green']; // arrays here are completely dynamic 
array[3] = 123
console.log(array);

function greet(name){
    console.log('Hello '+name);
}
greet("Joel");

function square(num){
    return num*num;
}

let res = square(3);
console.log(res);
