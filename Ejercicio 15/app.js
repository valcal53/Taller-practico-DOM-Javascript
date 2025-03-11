const botonIrArriba = document.getElementById('irArriba');


window.addEventListener('scroll', function() {
    
    if (window.scrollY > 200) {
       
        botonIrArriba.style.display = 'block';
    } else {
        
        botonIrArriba.style.display = 'none';
    }
});


botonIrArriba.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
