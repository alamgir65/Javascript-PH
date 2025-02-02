const hello = (name,age) => {
    console.log(`Hello ${name}`);
    console.log(`Your age is ${age}`);
}
hello('Alamgir Hossain',22);


// setTimeout(fun,3000);

function fun(){
    console.log('Valobashe');
}

// setTimeout(function(){
//     console.log('Valobashe');
// },3000);

setTimeout(()=>(console.log('Fayeza')),3000);


const numbers = [1,2,3,4,5,6,7,8,9];
const squares = numbers.map(element => (Math.pow(element,2)));
const even = numbers.filter((element) => element%2 === 0);
const evens = numbers.filter((item) => !(item%2));
const odds = numbers.filter((element) => element%2);
numbers.map(element => console.log(element));

const total = numbers.reduce((sum,item) => sum+item);
console.log(squares);
console.log(even);
console.log(evens);
console.log(odds);
console.log(total);