const student = {
    name: 'John Doe',
    age: 23,
    marks: 90,
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

console.log(Object.keys(student)); // ['name', 'age', 'marks', 'address']
console.log(Object.values(student)); // ['John Doe', 23, 90, { city: 'Dhaka', country: 'Bangladesh' }]
console.log(Object.entries(student)); // [['name', 'John Doe'], ['age', 23], ['marks', 90], ['address', { city: 'Dhaka', country: 'Bangladesh' }]]

// Object.freeze(student); // Object k freeze kore dile kono property add, delete, update kora jabe na
student.tk = 1000;
Object.seal(student); // Object k seal kore dile kono property add, delete kora jabe na, but update kora jabe
student.age = 24;
console.log(student);