const numbers = [1,30,5,70,11,22,101,200];
const ans = numbers.map(number => {
    if(number%2) return number+1;
    else return number;
});

const divisible = numbers.filter(number => number%10===0);

const found = numbers.find(number=> number%10==0);

console.log(ans);
console.log(divisible);
console.log(found);