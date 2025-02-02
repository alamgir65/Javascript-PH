const today = new Date();
console.log(today.getFullYear());

const date = new Date('2028-03-25');
console.log(date.getMonth());
console.log(date.getDate());

const specificDate = new Date(2062,3,28);
console.log(specificDate);

specificDate.setMonth(11);
console.log(specificDate);

console.log(specificDate.toLocaleString('en-GB'));


// Swaping in JS 
let a = 100, b = 200;
[a,b] = [b,a];
console.log(a,b);

const arr = [1,2,3,4,5,6,7,8,9];
console.log(arr);
[arr[0],arr[8]] = [arr[8],arr[0]];
console.log(arr);


// Arrow function 
const sum = (a,b) => a+b;
console.log(sum(10,20));

