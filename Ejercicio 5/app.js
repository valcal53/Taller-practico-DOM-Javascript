const boton = document.getElementById('botonCambio');
const cuerpo = document.body;

let esModoOscuro = false;  

function alternarTema() {
    if (esModoOscuro) {
       
        cuerpo.classList.remove('modo-oscuro');
        cuerpo.classList.add('modo-claro');
        boton.textContent = 'Activar Modo Oscuro';
    } else {

        cuerpo.classList.remove('modo-claro');
        cuerpo.classList.add('modo-oscuro');
        boton.textContent = 'Activar Modo Claro';
    }

    esModoOscuro = !esModoOscuro;
}

boton.addEventListener('click', alternarTema);

cuerpo.classList.add('modo-claro');
