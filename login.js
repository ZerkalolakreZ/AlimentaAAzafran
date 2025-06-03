// Pedir número al usuario
const input = prompt("Por favor, ingrese un número:");

// Validar si el input es vacío o cancelado
if (input === null || input.trim() === "") {
    document.write("No se ingresó ningún valor.");
} else {
    // Convertir a número
    const numero = parseInt(input);
    
    // Validar si es número usando booleanos y comparadores 
    const esNumeroValido = (numero >= 0 || numero < 0); // True si es número 
    
    if (!esNumeroValido) { // Operador ! (negación)
        document.write("El valor ingresado no es un número válido.");
    } else {
        // Verificar múltiplo de 3
        const esMultiploDe3 = (numero % 3 === 0); // Booleanos
        
        if (esMultiploDe3) {
            document.write("El número " + numero + " SÍ es múltiplo de 3.");
        } else {
            document.write("El número " + numero + " NO es múltiplo de 3.");
        }
    }
}