const name = "alamgir Hossain";

function fun(){
    console.log("Hey! vaiya ami in Fun function inside");
}
function fullName(first){
    const full = first +" "+ "Drubo";
    return full;
}
function even(tmp){
    return (tmp.length % 2 == 0);
}
console.log(fullName(name));
console.log(even("Alamgi"));

const arr=[11,20,20,30,40,51];

function arraySum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
function returnEven(arr){
    let evenArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            evenArr.push(arr[i]);
        }
    }
    return evenArr;
}
console.log(arraySum(arr));
console.log(returnEven(arr));