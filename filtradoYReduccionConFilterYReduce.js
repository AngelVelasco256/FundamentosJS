//FILTER()
//Itera sobre los elementos del array original y evalua una condicion, si el elemento es verdadero, se pasa ese elemento a un nuevo array
const numeros = [1, 2, 3, 4, 5, 6]
const numerosInpares = numeros.filter(numeroInpar => numeroInpar % 2 !== 0)
console.log(numerosInpares)

//REDUCE()
//Caso 1
const numeros = [1, 2, 3, 4, 5]
const sumaNumeros = numeros.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sumaNumeros)

//Partes de un metodo reduce
const numeros= [1, 2, 3, 4, 5];

const newNumeros = numeros.reduce((accumulator, currentValue) => {
    console.log(`${accumulator}: este es el valor del acumulador en cada iteración`);
    console.log(`${currentValue}: este es el valor del elemento`);
    return accumulator + currentValue;
}, 15);
console.log(newNumeros)

//Practica Promedio de un array de numeros
const numeros = [1, 2, 3, 4, 5];
const sumNumeros = numeros.reduce((accumulator, currentValue) => accumulator + currentValue)
const promNumeros = sumNumeros / numeros.length
console.log(promNumeros)

//Caso 2
const palabras = ["sol", "luna", "estrella", "luna", "cielo", "mar", "luna"]
const frecuencia = palabras.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue] ++
  } else {
    accumulator[currentValue] = 1
  }
  return accumulator
}, {})
console.log(frecuencia)
