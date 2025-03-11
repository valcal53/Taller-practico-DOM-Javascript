document.getElementById('inputBusqueda').addEventListener('input', function() {
    const textoBusqueda = this.value.toLowerCase();  
    const productos = document.querySelectorAll('.producto');  

    productos.forEach(producto => {
        const nombreProducto = producto.textContent.toLowerCase();  
        
        if (nombreProducto.includes(textoBusqueda)) {
            producto.classList.remove('oculto');
        } else {
            producto.classList.add('oculto'); 
        }
    });
});
