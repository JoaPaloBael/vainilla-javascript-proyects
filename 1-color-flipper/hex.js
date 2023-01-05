const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//Selecciono los elementos a utilizar del DOM
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

// Escucho el evento del click
btn.addEventListener('click', function(){
    //Creo una variable que guarde solo el '#'.
    let colorHex = '#';
    //Creo un bucle que a colorHex le agregue 6 digitos detrás
    for (let i=0; i<6; i++){
        colorHex += hex[getRandomNumber()];
    }

    //Cambio el color de fondo
    document.body.style.backgroundColor = colorHex;
    //Cambio el valor del texto
    color.textContent = colorHex;

})

//Creo una función que genere un número random
function getRandomNumber(){
    return (Math.floor(Math.random()*hex.length));
}
