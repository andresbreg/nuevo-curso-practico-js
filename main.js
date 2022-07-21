const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const pConClase = document.getElementsByClassName('clase');
const pConID = document.getElementById('id');
const input = document.querySelector('input');

console.log(input.value);

console.log ({
    h1,
    p,
    pConClase,
    id,
    input
});

h1.innerText = 'Nuevo Título';
h1.innerHTML = 'Nuevo<br>Título';

console.log(h1.getAttribute('class'));

h1.setAttribute('class', 'mititulo');
console.log(h1.getAttribute('class'));

h1.classList.add('titulo');
console.log(h1.getAttribute('class'));

h1.classList.remove('mititulo');
console.log(h1.getAttribute('class'));

// h1.classList.toggle('mititulo');
// h1.classList.contains('mititulo');

input.value = "";

const img = document.createElement('img');
img.setAttribute('src', 'https://conceptodefinicion.de/wp-content/uploads/2020/03/Cielo3.jpg');
console.log(img);

id.innerHTML = "";
id.appendChild(img);