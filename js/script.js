

//Alert ('Este es un cotizador automatico. La idea es que tengas una referencia de precio');
//Quise poner este cartel de alert al principio y no me lo abre. No logro que quede.

let ancho = parseFloat(prompt('Ingresa el ancho de tu patio'));
let largo = parseFloat(prompt('Ingresa el largo de tu patio'));

let item = prompt ('Seleccione el tipo de pasto: \n1- Bermuda. \n2- Tifway. \n3- Grama Bahiana. \n4- Zoysia \n Presiona x para salir.');


while (item != 'X' && item != 'x') {
    switch (item) {

        case '1':
            alert('El costo aproximado es de' +  500 * ancho * largo);
            break;
        case '2':
            alert('El costo aproximado es de' +  300 * ancho * largo);
            break;
        case '3':
            alert('El costo aproximado es de' +  600 * ancho * largo);
            break;
        case '4':
            alert('Producto fuera de stock');
            break;
        default:
            alert('Opción incorrecta');
            break;
    }
    item = prompt ('Seleccione el tipo de pasto: \n1- Bermuda. \n2- Tifway. \n3- Grama Bahiana. \n4- Zoysia \n Presiona x para salir.');

}

