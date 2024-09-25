//Declaracion de Variable
//Con la palabra reservada LET
let nombre = 'Angel';
console.log(nombre);

//Scope de LET cuando se declara a nivel  global (fuera de parentesis o no limitado a un bloque codigo)
let color = 'azul';
if(true) {
    color = 'red'; //Se puede re asignar su valor
    console.log(color + ' es el color dentro del scope local'); //Mostrara el valor de la variable REASIGNADO A EL CONTEXTO LOCAL
}
console.log(color + ' es el color del scope global'); //Mostrara el valor de la variable que se declaro en un principio (Contiene el scope global)

//Scope de LET cuando se declara dentro de un scope limitado a bloques
if(true) { //El scope de nuestra variable LET se limite al inicio y cierre de los parentesis del bloque de codigo
    let color = 'amarillo'; //Declaramos la variable
    console.log(color); //Usamos la variable dentro de su alcance (La imprimimos en consola)
}
console.log(color); //ReferenceError: color is not defined => Error de referencia, el codigo busca la variable a nivel global, pero como fue declarada dentro de una funcion (IF) es como si nunca se hubiera declarado

//Const
//Tiene los mismos parametros operativos que la palabra let
const PI = 3.1416;
const G = 9.8;
const e = 2.718281828;


//Nombre de Variables
//De acuerdo a la convencion de nomenclatura en JS y de acuerdo a variables
/**
 * >>camelCase
 *   Primera palabra en minusculas, el resto de palabras comienzan en MAYUSCULAS y el resto en minusculas
**/

let precioProducto = 100;
let saborHelado = 'Tiramisu'
let alturaEdificio = 14;

//Nombres que NO deberias poner a tus variables
//Ten en cuenta la simplicidad, legibilidad, comprension y limpieza del codigo
let PP = 100;
let SabHel = 'vainilla';
let AltE = 14;

//En cambio, puedes utilizar nombres expresivos, descriptivos y que aunque sean un poco largos, seran mas entendibles que acronimos o abreviaciones que solo tu o tu equipo conozcan

let idCliente = 0001;
let urlProvedor = 'https://google.com';

//Estas abreviaciones son conocidas en el ambito tecnico de la tecnologia, pero puedes ayudar de comentarios para resaltar el significado