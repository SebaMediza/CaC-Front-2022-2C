// CALCULADORA PARA TOTAL A PAGAR POR TICKETS EN FORM


function total(categoria, cantidad) {
    // debugger;
    cantidad = document.getElementById("cantidad").value;
    categoria = document.getElementById("categoria").value;

    switch(categoria){
        case 'Estudiante':
            document.getElementById('montoTotal').innerHTML = `$${(cantidad * 40)}`;
            break;
        case 'Trainee':
            document.getElementById('montoTotal').innerHTML = `$${(cantidad * 100)}`;
            break;
        case 'Junior':
            document.getElementById('montoTotal').innerHTML = `$${(cantidad * 170)}`;
            break;
    }
}