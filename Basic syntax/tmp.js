const number = 13.2547858872;
console.log(number.toFixed(4));

var num = 20;
num >= 10 ? console.log('Ami tomarke onek valobashi janu') : console.log('Ami tomarke valobashi na janu');


const name = "Alamgir Hossain";
console.log(name.slice(2,7)); // amgir

console.log(name.split('a')); // [ 'Al', 'mgir Hoss', 'in' ]

const fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];
console.log(fruits.join('/')); // apple/banana/mango/orange/grapes

const firstName = 'Alamgir', lastName = 'Hossain';
// const fullName = `${firstName} ${lastName}`;
const fullName = firstName.concat(' ').concat(lastName);
console.log(fullName); // Alamgir Hossain


console.log(name.includes('a'));

const nameReverse = name.split('').reverse().join('');
console.log(nameReverse); // niassoH rigmalA


// Play with Objects 

const student = {
    name: 'Alamgir Hossain',
    age: 25,
    job: 'Web Developer',
    address: 'Dhaka, Bangladesh'
}
console.log('-------------');
for(const x in student){
    console.log(x);
}