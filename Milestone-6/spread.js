const nums = [1, 2, 3, 4, 5];
console.log(Math.max(nums)); // NaN
console.log(Math.max(...nums)); // 5

const polapains = ['Fayeza','Sathi','Mukta','Zara','Naeem'];
const maiyas = [polapains]; // [['Fayeza','Sathi','Mukta','Zara','Naeem']]
console.log(maiyas);

const maiyas2 = [...polapains,'Adiba']; // ['Fayeza','Sathi','Mukta','Zara','Naeem','Adiba']
console.log(maiyas2);

