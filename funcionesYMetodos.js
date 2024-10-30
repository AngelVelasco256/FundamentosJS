//Funciones y métodos
//1. Incluir funciones como argumentos => CALLBACKS
function modify (array, callback) {
  array.push('+1')
  callback()
}

const numeros = [1, 2, 3, 4];

modify(numeros, function () {
  console.log(`Se modifico el array numeros, ahora tiene ${numeros.length}`)
  console.log(numeros)
})



function procesarNumeros (num1, num2, callback) {
  let resultado = callback(num1, num2)
  console.log(`El resultado de la operacion es ${resultado}`)
}

function suma (a, b) {
  return a + b;
}

function resta (a, b) {
  return a - b;
}

procesarNumeros (8, 5, suma)


function doble (num1) {
  return num1 * 2;
}

function triple (num2) {
  return num1 * 3;
}

function aplicarCallback (num1, callback) {
  let result = callback (num1);
  console.log(`el resultado es: ${result}`)
}

aplicarCallback (80, doble)



/*Filtrar números pares: Crea una función filterEvenNumbers que reciba un array de números y una función callback. La callback debe determinar si un número es par. La función principal debe retornar un nuevo array con los números pares.*/

function filterEvenNumbers (array, callback) {
  let pares = callback(array)
  console.log(pares);
}

function numbersProcess (numeros) {
  for (i = numeros; i >= 0; i--) {
    if (i % 2 === 0) {
      let newNumbers
      newNumbers += newNumbers.push(i)
    }
  }
}
let numeritos = [1, 2, 3, 4, 5, 6, 7]
filterEvenNumbers (numeritos, numbersProcess)

/*Manipulación de strings: Crea una función processStrings que reciba un array de strings y una función callback. La callback debe transformar cada string (por ejemplo, pasarlo a mayúsculas). La función principal debe retornar un nuevo array con las strings transformadas.*/

function processStrings (palabras, callback) {
  return mayusculas = callback(palabras);
}

function toLowerCase () {

}
let arrayPalabras = ['hola', 'adios']
processStrings(arrayPalabras, toLowerCase)
/*Sumar elementos de un array: Crea una función sumArray que reciba un array de números y una función callback. La callback debe sumar dos números. La función principal debe usar la callback para retornar la suma de todos los elementos del array.**/

const palabras = ["hola", "mundo"];
const palabrasMayusculas = convertir(palabras, function(palabra) {
    return palabra.toUpperCase();
});
console.log(palabrasMayusculas); // ["HOLA", "MUNDO"]
