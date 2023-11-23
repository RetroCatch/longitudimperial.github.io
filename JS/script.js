function convertir() {
    // Obtener el valor, la unidad de entrada y la unidad de salida
    var valor = parseFloat(document.getElementById('inputValue').value);
    var unidadEntrada = document.getElementById('inputUnit').value;
    var unidadSalida = document.getElementById('outputUnit').value;

    // Realizar la conversión basada en las unidades seleccionadas
    var resultado;

    switch (unidadEntrada) {
        case 'inches':
            resultado = convertirDesdePulgadas(valor, unidadSalida);
            break;
        case 'feet':
            resultado = convertirDesdePies(valor, unidadSalida);
            break;
        case 'yards':
            resultado = convertirDesdeYardas(valor, unidadSalida);
            break;
        case 'miles':
            resultado = convertirDesdeMillas(valor, unidadSalida);
            break;
        default:
            alert('Seleccione una unidad de medida de entrada válida.');
            return;
    }

    // Mostrar el resultado en el campo de salida
    document.getElementById('result').value = resultado.toFixed(2) + ' ' + unidadSalida;
}

// Funciones de conversión específicas para cada unidad de medida
function convertirDesdePulgadas(valor, unidadSalida) {
    switch (unidadSalida) {
        case 'inches':
            return valor;
        case 'feet':
            return valor / 12;
        case 'yards':
            return valor / 36;
        case 'miles':
            return valor / 63360; // 1 milla = 63,360 pulgadas
        default:
            alert('Seleccione una unidad de medida de salida válida.');
            return 0;
    }
}

function convertirDesdePies(valor, unidadSalida) {
    switch (unidadSalida) {
        case 'inches':
            return valor * 12;
        case 'feet':
            return valor;
        case 'yards':
            return valor / 3;
        case 'miles':
            return valor / 5280; // 1 milla = 5,280 pies
        default:
            alert('Seleccione una unidad de medida de salida válida.');
            return 0;
    }
}

function convertirDesdeYardas(valor, unidadSalida) {
    switch (unidadSalida) {
        case 'inches':
            return valor * 36;
        case 'feet':
            return valor * 3;
        case 'yards':
            return valor;
        case 'miles':
            return valor / 1760; // 1 milla = 1,760 yardas
        default:
            alert('Seleccione una unidad de medida de salida válida.');
            return 0;
    }
}

function convertirDesdeMillas(valor, unidadSalida) {
    switch (unidadSalida) {
        case 'inches':
            return valor * 63360; // 1 milla = 63,360 pulgadas
        case 'feet':
            return valor * 5280; // 1 milla = 5,280 pies
        case 'yards':
            return valor * 1760; // 1 milla = 1,760 yardas
        case 'miles':
            return valor;
        default:
            alert('Seleccione una unidad de medida de salida válida.');
            return 0;
    }
}
