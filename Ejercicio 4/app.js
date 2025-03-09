const botonesEliminar = document.querySelectorAll('#lista button');

        // Agregar un evento a cada botón para eliminar la tarea
        botonesEliminar.forEach(function(boton) {
            // Usamos addEventListener para escuchar el evento 'click'
            boton.addEventListener('click', function() {
                // Obtener el elemento <li> que contiene el botón
                const tarea = boton.parentElement;
                
                // Eliminar el <li> (la tarea)
                tarea.remove();
            });
        });