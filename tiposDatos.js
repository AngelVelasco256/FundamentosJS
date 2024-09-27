//Tipos de datos
//PRIMITVOS
//Son datos que JavaScript considera basicos

//Strings
let nombre = 'Jose';
let marca = "LENOVO";
let calle = "4"; //Cualquier caracter que se escriba entre comillas sera tratado como String sean numeros u otros tipos de datos

//Number
let total = 1565;
let medida = 120.5; //Los tipos float se escriben con comas para los decimales
let max = 2 ** 52; //El numero mas grande que es seguro operar con el tipo de dato number +-(2^53 - 1)

//BigInt
let numero = 2n ** 53n; //Es un complemento del tipo number, abarca de forma segura numeros mas grandes que +-(2^53)





//Boolean
let mayorEdad = true;

// Valores que desencadenan un valor false

// Valores falso declarados explicitamente en una variable
let condicional = false
console.log(condicional);

// Los valores null
let valor1 = null;
if (valor1 === true) { // Al evaluar null's, si evaluamos con un solo = sera verdadero pq js sabe que hay un valor ahi, si agregamos evaluacion mas estricta (== ó ===) tomara el valor False
    console.log("No deberias ver este mensaje 🙀");
} else {
    console.log('Los valores NULL retornan un valor FALSE al ser evaluados');
}

//Los valores Undefined
let valor2;
if (valor2 === true) {
    console.log("No deberias ver este mensaje 🙀");
} else {
    console.log('Los valores UNDEFINED tambien retornaran FALSE al ser evaluados logicamente');
}

//Los valores NaN
let valornan = 0;
console.log(typeof(valornan));
console.log(valornan == Number);





//Null
let topping = null;
let hijos = null;
console.log(topping);

//Undefined
let nombrePapa;
console.log(typeof(nombrePapa));

//Symbol
let simbolo1 = Symbol('PC');
let simbolo2 = Symbol('PC');
if(simbolo1 === simbolo2) { //En JavaScript, es recomendable utilizar las evaluaciones estrictas a la hora de comparar con igual (=== tres signos de igual) para tener un funcionamiento esperado en nuestro codigo
    console.log('Si fuera verdad, se mostrara este mensaje (lo cual no deberia pasar puesto que, aunque tienen la misma descripcion, el simbolo es diferente)')
} else {
    console.log('Deberias ver este mensaje, porque la evaluacion arroja un false ya que los simbolos se ocupan como ID UNICOS para las descripciones!!!');
}





//COMPLEJOS
//Son tipos de datos que en el lenguaje tienen caracteristicas mas avanzadas y especiales

//Object
let computadoraPro = { //Se delimitan con corchetes
    ram: 64, //Propiedades, son las variables que estaran dentro del objeto y se separan por una coma exceptuando la ultima
    cpu: 'Intel I9 12gen',
    tarjetaGrafica: 'NVIDIA RXT 4090Ti'
};
console.log(computadoraPro); //Manera de mostrar en consola TODAS las propiedades del objeto
console.log(computadoraPro.cpu); //Accediendo a una propiedad ('ram') con la notacion de punto
console.log(computadoraPro["cpu"]);

let objeto1 = {}; //Declaracion de un objeto vacio
console.log(typeof(objeto1));

//Arrays
let saboresHelado = ['Chocolate', 'Fresa', 'Sandia']; //Su delimitacion esta dada por corchetes
//Los elementos son todo el contenido ⬆️ de nuestro array

//Function
//1️⃣ Funcion por DECLARACION
function saludar() {
    return 'hola';
}

//2️⃣ Funcion por EXPRESION
const saludo = function saludar() {
    return 'hola';
}
saludo(); //La funcion se manda a llamar por el nombre que le asignamos como variable (en este caso seria SALUDO)