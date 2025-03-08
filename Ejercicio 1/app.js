const boton = document.getElementById('Boton');
        const parrafo = document.getElementById('Parrafo');
        
        
        boton.addEventListener('click', function() {
            parrafo.textContent = '¡Texto cambiado!';
        });
