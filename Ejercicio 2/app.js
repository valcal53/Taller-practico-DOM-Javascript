const boton = document.getElementById('boton');

let contador = 0;

boton.onclick = function() {
    
    contador++;

    boton.textContent = 'Clics: ' + contador;
};
