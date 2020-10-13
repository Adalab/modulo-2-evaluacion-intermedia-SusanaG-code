'use strict';


//constantes a usar

const submit = document.querySelector('.js-submit');
let userNumber = document.querySelector('.js-input').value;
const tip = document.querySelector('.js-tip');
const trycounter = document.querySelector('.js-counter');


//funcion para generar un número aleatorio

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log('Your random numer is', randomNumber);


//función para adivinar el númeor y sus supuestos

function guessNumber() {
    let userNumber = document.querySelector('.js-input').value;
    const randomNumber = getRandomNumber(100);


    if (userNumber > randomNumber && userNumber <= 100) {
        tip.innerHTML = 'Demasiado alto';

    } else if (userNumber < randomNumber) {
        tip.innerHTML = 'Demasiado bajo';
        console.log('number bajo');

    } else if (userNumber === randomNumber) {
        tip.innerHTML = 'Has ganado campeona';
        console.log('has ganado');

    } else if ((userNumber > 100 || userNumber === 0)) {
        tip.innerHTML = 'El número debe estar entre 1 y 100';
    }


    //contar los intentos

    trycounter.innerHTML = parseInt(trycounter.innerHTML) + 1;
}

//evento
submit.addEventListener('click', guessNumber);