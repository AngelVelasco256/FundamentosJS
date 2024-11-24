//SLICE()
const palabras = ["sol", "luna", "estrella", "cielo", "mar", "montaña", "río", "bosque", "viento", "fuego", "tierra", "nieve", "lluvia", "nube", "trueno"];
console.log(palabras.length)

//Slice(1 parámetro) indica el comienzo a partir del cual copiara el contenido del array original
console.log(palabras.slice(2))

//Slice(1, 2 parámetros) señala el indice de inicio y el indice del final de la copia El segundo parámetro no incluye el valor del index, si no uno antes, por eso se recomienda calcular i+1
console.log(palabras.slice(1, 4))
console.log(palabras.slice(1, 4 + 1))

//Slice (-1 parámetro) Con un parámetro indicado como negativo tomara el ultimo valor del array original como -1 y comenzara a contar hasta el valor -i indicado como parámetro y comenzara a copiar a partir de ahi y hasta el final
console.log(palabras.slice(-3))

//Aquí comienza el index en un numero positivo pero 6el final se indica en el numero 3 del final del array hacia atrás sin olvidar que para que se muestre el final podemos calcular i+1
console.log(palabras.slice(5, -3+1))

//Slice sin parámetros copiara todo el array pero en uno nuevo SIN MODIFICAR el original
console.log(palabras.slice())