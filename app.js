const botonAgregar = document.getElementById('agregarTarea');
const inputTarea = document.getElementById('nuevaTarea');
const listaTareas = document.getElementById('listaTareas');

function agregarTarea() {
    const tareaTexto = inputTarea.value.trim();

    if (tareaTexto !== '') {
        const tareaElemento = document.createElement('li');

        const textoTarea = document.createElement('span');
        textoTarea.textContent = tareaTexto;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('eliminar');
        
        botonEliminar.addEventListener('click', function() {
            listaTareas.removeChild(tareaElemento);
        });

        tareaElemento.appendChild(textoTarea);
        tareaElemento.appendChild(botonEliminar);

        listaTareas.appendChild(tareaElemento);

        inputTarea.value = '';
    } else {
        alert('Por favor ingresa una tarea.');
    }
}

botonAgregar.addEventListener('click', agregarTarea);

inputTarea.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarTarea();
    }
});
