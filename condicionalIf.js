//Condicional IF
//Ejemplo para realizar por bloques en la consola del navegador

//If>>> En este ejemplo evaluamos la variable {nombre}, al cumplirse la logica IF se ejecuta el bloque de codigo.
let nombre = 'Angel';

if (nombre === 'Angel') {
  console.log(`Hola, Bienvenido ${nombre}`);
  alert(`Hola, Bienvenido ${nombre}`);
}

//IF y ELSE
//La palabra ELSE, es una extension para la condicional IF, nos sirve para declarar otro bloque de codigo, sera el que se ejecute cuando la condicion IF NO SE CUMPLA
let nombre = 'Angel';
if (nombre === 'Jose') {
  console.log(`Hola, Bienvenido ${nombre}`);
  alert(`Hola, Bienvenido ${nombre}`);
} else { //En este caso, como la variable {nombre} no es igual a 'Jose' la ejecucion de codigo sigue al bloque ELSE, donde lanza una impresion en consola y una alerta en la ventana del navegador
  console.log(`Usuario ${nombre} no encontrado`);
  alert(`Usuario ${nombre} no encontrado`);
}