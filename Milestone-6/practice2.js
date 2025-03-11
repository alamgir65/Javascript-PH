// Problem : Write a arrow function where it will do the following : 
// 1. It will take an array where the array elements will be the your friends names.
// 2. Check if the array elements is even, and push those elements into a new array.
// 3. Return the new array.

const evenFriends = (friends)=>{
    let even = [];
    for(const friend of friends){
        if(friend.length % 2 === 0){
            even.push(friend);
        }
    }
    return even;
}

const friends = ['Fayeza','Sathi','Mukta','Zara','Naeem'];
const even = evenFriends(friends);
console.log(even);