function calculateTax(income,expense){
    if((income < 0 || expense < 0) || expense > income){
        return 'Invalid Input';
    }
    const tax = (income - expense) * 0.2;
    return tax;
}

console.log(calculateTax(10000,3000));
console.log(calculateTax(34000, 1753));