document.getElementById('colorFondo').addEventListener('change', function() {
    const colorSeleccionado = this.value;  
    document.body.style.backgroundColor = colorSeleccionado;  
});
