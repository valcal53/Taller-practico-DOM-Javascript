document.addEventListener("DOMContentLoaded", function() {
    let imagen = document.getElementById("imagen");
    let prevBtn = document.getElementById("prevBtn");
    let nextBtn = document.getElementById("nextBtn");
    let imagenInput = document.getElementById("imagenInput");
    let irBtn = document.getElementById("irBtn");

    
    let imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg","imagen5.jpg"];
    let index = 0; 

    function actualizarImagen() {
        imagen.src = imagenes[index];
        imagenInput.value = index + 1; 
    }

    prevBtn.addEventListener("click", function() {
        index = (index - 1 + imagenes.length) % imagenes.length; 
        actualizarImagen();
    });

    nextBtn.addEventListener("click", function() {
        index = (index + 1) % imagenes.length; 
        actualizarImagen();
    });

    irBtn.addEventListener("click", function() {
        let numero = parseInt(imagenInput.value);
        if (numero >= 1 && numero <= imagenes.length) {
            index = numero - 1;
            actualizarImagen();
        } else {
            alert("Número fuera de rango");
        }
    });
});
