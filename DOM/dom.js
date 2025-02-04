const sections = document.querySelectorAll('section');
for(let section of sections){
    section.style.backgroundColor = 'lightgray';
    section.style.border = '2px solid steelblue';
    section.style.margin = '10px';
}

const fruits = document.getElementsByClassName('fruits-container');
for(let fruit of fruits){
    fruit.classList.add('change-style');
    fruit.classList.remove('fayeza');
}



const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Favourite Food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Kacchi';
// ul.appendChild(li1,li2,li3,li4);
ul.appendChild(li1);
section.appendChild(ul);
// ul.appendChild(li1);
mainContainer.appendChild(section);





const sectionDress = document.createElement('section');

sectionDress.innerHTML = `
        <h1>My Most Favorite Dress <h1/>
        <ul>
            <li>Panjabi<li/>
            <li>Panjabi<li/>
            <li>Panjabi<li/>
        <ul/>
`;

mainContainer.appendChild(sectionDress);