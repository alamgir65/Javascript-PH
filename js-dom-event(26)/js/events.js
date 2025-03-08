console.log('Hello, I am from events.js');

// Option 1 

function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// Option 2 

const changeHeadline = document.getElementById('changeHeadline');
changeHeadline.onclick = function(){
    const headline = document.querySelector('h1');
    headline.innerText = 'I am changed by events';
    headline.style.color = 'white';
    document.body.style.backgroundColor = 'green';
}

// Option 3 

const makeBlue = document.getElementById('make-blue');
makeBlue.addEventListener('click',function(){
    document.body.style.backgroundColor = 'blue';
})

// Option 4 

document.getElementById('make-pink').addEventListener('click',function(){
    document.body.style.backgroundColor = 'pink';
})

