const boton = document.getElementById('Boton');
        const parrafo = document.getElementById('Parrafo');
        
        // Asignar evento al hacer clic en el botón
        boton.addEventListener('click', function() {
            // Cambiar el contenido del parrafo
            parrafo.textContent = '¡Texto cambiado!';
        });
