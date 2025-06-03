// Variables para almacenar los conteos (inicializadas en 0)
let cantidadDiafragmasDos = 0;
let cantidadDiafragmasCuatro = 0;
let cantidadDiafragmasOcho = 0;
let cantidadDiafragmasOnce = 0;
let cantidadIncorrectos = 0;

// Bucle para solicitar 6 valores al usuario
for (let i = 0; i <= 6; i++) {
    let valor = prompt(`Ingrese el valor de diafragma #${i} (Valores válidos: 2, 4, 8, 11):`);
    
    // Convertir el valor a número (por si el usuario ingresa texto)
    valor = Number(valor);
    
    // Evaluar valor ingresado
    if (valor === 2) {
        cantidadDiafragmasDos++;
    } else if (valor === 4) {
        cantidadDiafragmasCuatro++;
    } else if (valor === 8) {
        cantidadDiafragmasOcho++;
    } else if (valor === 11) {
        cantidadDiafragmasOnce++;
    } else {
        cantidadIncorrectos++;
    }
}


// Mostrar resultados
document.write('<h2>Resultados:</h2>');
document.write('<p>La cantidad de diafragmas de 2 es de: ' + cantidadDiafragmasDos + '</p>');
document.write('<p>La cantidad de diafragmas de 4 es de: ' + cantidadDiafragmasCuatro + '</p>');
document.write('<p>La cantidad de diafragmas de 8 es de: ' + cantidadDiafragmasOcho + '</p>');
document.write('<p>La cantidad de diafragmas de 11 es de: ' + cantidadDiafragmasOnce + '</p>');
document.write('<p>La cantidad de datos ingresados incorrectamente es de: ' + cantidadIncorrectos + '</p>');