function checkDigitsInName(name){
    if(typeof name !== 'string'){
        return 'Invalid input';
    }
    for(let char of name){
        return !(char >= '0' && char <= '9');
    }
}
console.log(checkDigitsInName(["Raj"]));