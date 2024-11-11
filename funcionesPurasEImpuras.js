//Funciones Puras
//Determinismo
//Dada la misma entrada, el resultado siempre sera el mismo (inputs y outputs)
function add (a, b) {
  return a + b;
}

function square (x) {
  return x * x;
}

function addTen (y) {
  return y + 10
}

//Funciones impuras
//Side Effects
//1. Modificar variables globales
//2. Modificar parametros
//3. Solicitudes HTTP
//4. Imprimir mensajes en pantalla o consola
//5. Manipulacion del DOM
//6. Obtener la hora actual

//La funcion 'add' que originalmente era pura, cuando agregamos el console.log se vuelve impura
function add (a, b) {
  console.log(`A: ${a}`);
  return a + b;
}

//Al alterar el valor de la variable global 'total', la funcion sumWithSideEffect se vuelve impura
let total = 0;
function sumWithSideEffect (a) {
  total += a;
  return total;
}

//En esta conjugacion de funciones puras 'addTen' y 'square', la funcion 'finalResult' tambien es pura, pues no contiene side effects, sola la invoca y las ejecuta con sus parametros correspondientes pero el console.log no forma parte de 'finalResult'
const number = 5;
const finalResult = addTen(square(number));
console.log(finalResult)