/*
const radius = [3,1,2,4];
const area =  function (radius){ // these are the callback functions that return value
    return Math.PI * radius * radius;
};
const perimeter = function(radius){
    return Math.PI * 2 * radius;
};
const diameter = function(radius){
    return 2 * radius;
};
const calculate = function(radius, logic){ // calculate is a HOFunction
    const output = [];
    for (let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
};
console.log(calculate(radius,area));
console.log(calculate(radius,perimeter));
console.log(calculate(radius,diameter));
// console.log(radius.map(area)); // calculate function did the same thing as that of the map function
*/

const radius = [3,1,2,5,4];
function binary(x){
    return x.toString(2);
}
function even(x){
    return !(x%2);
}
// let output = radius.map(binary); // map function
let output = radius.filter(even); // filter function
console.log(output);
let sum = radius.reduce(function(acc,curr){ //reduce function
    acc=Math.max(acc,curr)
    return acc;
}, Number.MIN_VALUE);
console.log(sum);
