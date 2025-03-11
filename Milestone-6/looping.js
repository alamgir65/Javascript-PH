const nums = [1, 42, 3, 4, 55];
const name = 'Fayeza';

// for(const num of nums){
//     console.log(num);
// }
// for(const char of name){
//     console.log(char);
// }

// for(const num in nums){
//     console.log(num);
// }


// for(const char in name){
//     console.log(char);
// }

const student = {
    name: 'John Doe',
    age: 23,
    marks: 90,
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

for(const key in student){
    console.log(key, '=> ' , student[key]);
}