// Problem : Write a arrow function where it will do the following :
// 1. It will take two array inputs 
// 2. Combine the two array and assign them into a new array
// 3. Find the maximum number from the new array and return it.

const maxNum = (nums1,nums2) => {
    const combined = [...nums1,...nums2];
    const max = Math.max(...combined);
    return max;
}

const nums1 = [1, 2, 3, 4, 5];
const nums2 = [6, 7, 8, 9, 10];

const max = maxNum(nums1,nums2);
console.log(max); // 10