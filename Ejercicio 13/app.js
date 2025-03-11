document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const correo = document.getElementById('correo').value;

    
    const fila = document.createElement('tr');

    
    const celdaNombre = document.createElement('td');
    celdaNombre.textContent = nombre;

    const celdaEdad = document.createElement('td');
    celdaEdad.textContent = edad;

    const celdaCorreo = document.createElement('td');
    celdaCorreo.textContent = correo;

    
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaEdad);
    fila.appendChild(celdaCorreo);

    document.querySelector('#tablaUsuarios tbody').appendChild(fila);

    
    document.getElementById('formulario').reset();
});
