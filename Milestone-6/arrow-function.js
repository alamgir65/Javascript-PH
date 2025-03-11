const add = function(a,b){
    return a+b;
}
console.log(add(2,4));

const sum = (a,b) => a+b;
console.log(sum(2,4));

const double = (a) => {
    return a*2;
}
console.log(double(2)); // undefined

const write = () => "I Love you Fayeza";
console.log(write());


// For single parameter , we can remove the parenthesis

const love = name => `I Love you Forever ${name}, I wish you will be Happy without me`;
console.log(love("Fayeza"));