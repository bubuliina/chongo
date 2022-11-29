const nombre= prompt ("Hola Chongo Nuevo! Ingresa tu nombre")
alert ("Bienvenid@" + " " + nombre)
let edad = parseInt(prompt ("Ingrese tu edad"))

if (edad>=25 && edad<=35) { 
    alert ("Edad aprobada. Felicitaciones! sos el chongo nuevo de cami, tu numero es 3626")
    
} else if (edad>35) {
    alert ("Mmm me parece que sos muy grande para Cami, ya no tenes tanto colageno, pero gracias por participar!")
}

else if (edad<25) {
    alert ("Mmmm.. me parece que sos muy chico, para Cami. Mucho colageno pero poca experiencia. Volve el año que viene! Por ahi tenes suerte!")
}

else { 
    alert ("Edad desaprobada")
}


