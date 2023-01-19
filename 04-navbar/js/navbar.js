//Elegir elementos del DOM
const menuIcon = document.querySelector('.menu-icon');
const links = document.querySelector('.links');

//Escuchar el evento click del botón

menuIcon.addEventListener('click', function(){
    //Condicional: Si tiene la clase show-links, se la saco. Si no la tiene, la agrego.
    links.classList.toggle('show-links');
    menuIcon.classList.toggle('rotation');
})
