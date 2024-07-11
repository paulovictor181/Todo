function trocarClasse() {
    var elemento = document.body;
    var elementoTable = document.getElementById('table-todos');
    var elementoNav = document.getElementById('nav-bar');
    var elementoNavTitle = document.getElementById('nav-bar-title');

    if(elemento.className == 'p-3 mb-2 bg-dark text-white') {
        elemento.className = 'p-3 mb-2 bg-light text-black';        
    } else {
        elemento.className = 'p-3 mb-2 bg-dark text-white';        
    }

    if(elementoNav.className == 'navbar bg-dark border-bottom border-body mb-4') {
        elementoNav.className = 'navbar bg-light border-bottom border-body mb-4';
        elementoNav.setAttribute('data-bs-theme', 'light');        
    } else {
        elementoNav.className = 'navbar bg-dark border-bottom border-body mb-4';   
        elementoNav.setAttribute('data-bs-theme', 'dark');     
    }

    if(elementoTable.className == 'table table-dark table-hover') {
        elementoTable.className = 'table table-light table-hover';        
    } else {
        elementoTable.className = 'table table-dark table-hover';        
    }

    

}