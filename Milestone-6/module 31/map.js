const numbers = [1, 2, 3, 4, 5];
// 1. process 1
// function doubleIt(number) {
//     return number*2;
// }

// 2. Process 2 
const doubleIt = (number) => number*2;
const doubled = numbers.map(doubleIt);

// 3. Process 3
const multiplied = numbers.map((number) => number*10);


console.log(doubled);
console.log(multiplied);

const names = ['fayeza','Sathi','Mukta','Jara','Naeem','Sabina'];
const lenths = names.map(name => ({[name] : name.length}));
// const copy = names.map(name=>name);
console.log(lenths);
