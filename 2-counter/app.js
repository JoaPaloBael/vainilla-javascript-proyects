//Inicio el contador en 0
 let count = 0;

 //Selecciono los elementos del DOM
 const value = document.querySelector("#value");
 const btns = document.querySelectorAll(".btn");

 //Utilizo un forEach para recorrer el querySelectorAll

 btns.forEach(function(btn){
    //Escucho el evento click
    btn.addEventListener("click", function(e){
        //Guardo en la variable las clases de cada boton
        const style = e.currentTarget.classList;

        //Con un condicional le agrego la funcionalidad de contador segun las clases
        if(style.contains("decrease")){
            count--;
        } else if (style.contains("increase")){
            count++;
        } else if (style.contains("reset")){
            count = 0;
        }

        //Con un segundo condicional, le cambio el color al contador
        if(count > 0){
            value.style.color = "greenyellow";
        } else if (count < 0) {
            value.style.color = "red";
        } else if (count == 0) {
            value.style.color = "white";
        }

        // Cambio el valor del contador
        value.textContent = count;

    })
 })
























// //Set initial count
// let count = 0;

// //Select value and buttons
// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const styles = e.currentTarget.classList;
//         if (styles.contains('decrease')) {
//             count--;
//         } else if(styles.contains('increase')){
//             count++;
//         } else if (styles.contains('reset')){
//             count = 0;
//         }

//         if(count > 0 ){
//             value.style.color = "green";
//         } else if (count === 0) {
//             value.style.color = "#222222";
//         } else if (count < 0 ){
//             value.style.color = "red";
//         }


//         value.textContent = count;
//     })
// })