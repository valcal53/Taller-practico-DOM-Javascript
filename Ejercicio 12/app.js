document.getElementById('selectorColor').addEventListener('change', function() {
    const colorSeleccionado = this.value; 
    document.body.style.backgroundColor = colorSeleccionado;  
});
