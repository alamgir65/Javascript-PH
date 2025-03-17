const products = [
    {id : 1, name : 'Lenovo' , price : 48999},
    {id: 2, name: 'Dell', price: 52999},
    {id: 3, name: 'HP', price: 45999},
    {id: 4, name: 'Asus', price: 39999},
    {id: 5, name: 'Acer', price: 34999},
    {id: 6, name: 'Apple', price: 99999}
];

const names = products.map(product => product.name);
console.log(names);

const highPrice = products.filter(product => product.price > 50000);
console.log(highPrice);

const sum = products.reduce((sum,product) => sum+product.price,0);
console.log(sum);

