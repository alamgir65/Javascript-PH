const products = [
    {name : 'Iphone 11',price:167000,qty: 2},
    {name : 'Smart watch',price:1600,qty: 4},
    {name : 'Macbook pro',price:250000,qty: 1}
];

function productSum(products){
    let sum =0;
    for(let product of products){
        sum += product.price * product.qty;
    }
    return sum;
}
console.log(productSum(products));

const total = products.reduce((sum,product) => sum + product.price * product.qty,0);
console.log(total);