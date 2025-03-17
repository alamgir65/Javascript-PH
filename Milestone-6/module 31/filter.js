const numbers = [58,47,238,3487,308,347];
const odd = numbers.filter(number => number%2);
const multi = numbers.filter(number => {
    return number>100;
})
console.log(odd);
console.log(multi);