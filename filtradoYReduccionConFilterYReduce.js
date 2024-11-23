//FILTER()
//Itera sobre los elementos del array original y evalúa una condición, si el elemento es verdadero, se pasa ese elemento a un nuevo array
const numeros = [1, 2, 3, 4, 5, 6]
const numerosInpares = numeros.filter(numeroInpar => numeroInpar % 2 !== 0)
console.log(numerosInpares)

//REDUCE()
//Es el método por el cual podemos iterar y reducir el array original a un solo resultado (en casos específicos) o crear un nuevo array u objeto como mejor convenga el cual sea el resultado de la función callback
//Caso 1
const numeros = [1, 2, 3, 4, 5]
const sumaNumeros = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0) //Para la función callback, los parámetros se definirán en el orden de (Acumulador => En la primera iteración contendrá el valor del primer elemento del array y en las siguiente, contendrá el valor de retorno de la función callback), (valorActual => Sera el siguiente elemento del array inmediato al acumulador, también llamado valor actual por ser el que se evalúa en función del acumulador)
console.log(sumaNumeros)

//Partes de un método reduce
const numeros= [1, 2, 3, 4, 5];
const newNumeros = numeros.reduce((accumulator, currentValue) => {
    console.log(`${accumulator}: este es el valor del acumulador en cada iteración`);
    console.log(`${currentValue}: este es el valor del elemento actual por el cual esta pasando la function callback`);
    return accumulator + currentValue;
}, 0);
console.log(numeros) //El método REDUCE es INMUTABLE, puesto que no altera el array original
console.log(newNumeros)

//Practica Promedio de un array de números
const numeros = [1, 2, 3, 4, 5];
const sumNumeros = numeros.reduce((accumulator, currentValue) => accumulator + currentValue)
const promNumeros = sumNumeros / numeros.length
console.log(promNumeros)

//Caso 2
const palabras = ["sol", "luna", "estrella", "luna", "cielo", "mar", "luna"]
const frecuencia = palabras.reduce((acumulador, valorActual) => {
  if (acumulador[valorActual]) { //Objeto[propiedad] es la evaluación que lleva a cabo el método reduce (pq en el final de la función callback especificamos que comience como un objeto vació) si es true entonces agrega una unidad a la propiedad
    acumulador[valorActual] ++
  } else {
    acumulador[valorActual] = 1 //Si la propiedad dada por valor actual no se encuentra en el objeto acumulador, se agrega con el valor de 1
  }
  return acumulador
}, {}) //El valor inicial del acumulador es un objeto vació, por eso se consulta si la propiedad que es asignada por valor actual existe en el objeto acumulador existe, se agregara una unidad a esa propiedad, si no, se asignara una propiedad con nombre de valorActual y con el valor 1
console.log(frecuencia)