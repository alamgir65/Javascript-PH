const persons = [
    {name: 'Alamgir', age: 26, position: 'Senior'},
    {name: 'John', age: 22, position: 'Junior'},
    {name: 'Jane', age: 28, position: 'Senior'},
    {name: 'Doe', age: 24, position: 'Junior'},
    {name: 'Smith', age: 30, position: 'Senior'},
    {name: 'Emily', age: 23, position: 'Junior'},
    {name: 'Michael', age: 27, position: 'Senior'},
    {name: 'Sarah', age: 25, position: 'Junior'}
];

const Seniors = persons.filter(person => person.position === 'Senior');

const ageSum = persons.reduce((sum,person)=> sum+person.age,0);

let sum = 0;

for(person of persons){
    sum += person.age;
}

console.log(Seniors);
console.log(ageSum);
console.log(sum);