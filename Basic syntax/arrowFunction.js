const hello = (name,age) => {
    console.log(`Hello ${name}`);
    console.log(`Your age is ${age}`);
}
hello('Alamgir Hossain',22);


// setTimeout(fun,3000);

function fun(){
    console.log('Valobashe');
}

// setTimeout(function(){
//     console.log('Valobashe');
// },3000);

setTimeout(()=>(console.log('Fayeza')),3000);