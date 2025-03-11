// 2. Object Destructuring


const student = {
    name: 'John Doe',
    age: 23,
    marks: 90,
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

const {name,marks} = student;
console.log(name,marks);
// Output: John Doe 90

const {address: {city,country}} = student;
console.log(city,country);
// Output: Dhaka Bangladesh


// 2. Array Destructuring 

const nums = [1, 2, 3, 4, 5];
const [a, b] = nums;
console.log(a,b);   // 1 2

const [c,,,d] = nums;
console.log(c,d);   // 1 4

function double(x,y){
    return [x*2,y*2];
}
const [m,n] = double(2,3);
console.log(m,n);