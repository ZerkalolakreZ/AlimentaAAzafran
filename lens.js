// Ingrese tamaño del lente
const input = prompt("Ingrese la distancia focal del lente");

// Validar si el input es vacío o cancelado
if (input === null || input.trim() === ""){
    alert("No se ingresó ningún valor");
} else {
    // Convertir a número
    const distFocal = parseFloat(input);

    // Validar si es número usando booleanos
    const esNumeroValido = (distFocal >= 3.5 || distFocal <= 1200); // True si es número

    if(!esNumeroValido) { // Operador ! (Negación)
        alert("El número ingresado no es válido");
    
    } else {
        let tipoLente;
        
        if (distFocal >= 3.5 && distFocal <= 14) {
            tipoLente = "Ojo de Pez";
        } else if (distFocal > 14 && distFocal <= 24) {
            tipoLente = "Gran Angular";
        } else if (distFocal > 24 && distFocal <= 65) {
            tipoLente = "Normal";
        } else if (distFocal > 65 && distFocal <= 100) {
            tipoLente = "Teleobjetivo Corto";
        } else if (distFocal > 100 && distFocal <= 160) {
            tipoLente = "Teleobjetivo";
        } else if (distFocal > 160 && distFocal <= 1200) {
            tipoLente = "Súper Teleobjetivo";
        } else {
            tipoLente = "Distancia focal fuera de rango conocido";
        }
        
        document.write(`El lente de ${distFocal}mm es un lente ${tipoLente}`);
    }
}