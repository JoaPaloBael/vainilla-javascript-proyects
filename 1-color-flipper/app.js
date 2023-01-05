const colors = ["red","orangered", "yellow", "limegreen", "dodgerblue", "darkslateblue", "darkmagenta"];

// Selecciono los elementos del DOM
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Escucho el click del botón
btn.addEventListener('click', function(){
    console.log("You've clicked me ;) ");
    // Conseguir un número random entre el 0 y el 4 (es el largo del array);
    const randomNumber = getRandomNumber ();
    console.log(colors[randomNumber]);
    // Cambio el color de fondo
    document.body.style.backgroundColor = colors[randomNumber];
    // Cambio el valor del texto
    color.textContent = colors[randomNumber];
});

//Creo la función getRandomNumber para guardar en la constante randomNumber
function getRandomNumber (){
    return( Math.floor(Math.random() * colors.length));
}

