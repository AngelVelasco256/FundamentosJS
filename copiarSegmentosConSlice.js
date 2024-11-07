//SLICE()
const palabras = ["sol", "luna", "estrella", "cielo", "mar", "montaña", "río", "bosque", "viento", "fuego", "tierra", "nieve", "lluvia", "nube", "trueno"];

//Slice(1 parametro) indica el comienzo a partir del cual copiara el contenido del array original
console.log(palabras.slice(2))

//Slice(1, 2 parametros) señala el indice de inicio y el indice del final de la copia El segundo parametro no incluye el valor del index, si no uno antes, poreso se recomienda calcular i+1
console.log(palabras.slice(4, 9 + 1))

//Slice (-1 parametro) Con los numeros negativos el array comenzara a copiar del ultimo elemento hacia atras y se detendra hasta el numero en negativo que indique el index
console.log(palabras.slice(-3))
//Aqui comienza el index en un numero positivo pero el final se indica en el numero 3 del final del array hacia atras sin olvidar que para que se muestre el final podemos calcular i+1
console.log(palabras.slice(5, -3+1))

//Slice sin parametros copiara todo el array pero en uno nuevo SIN MODIFICAR el original
console.log(palabras.slice())