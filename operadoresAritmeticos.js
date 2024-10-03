//Tipos de number
//Number (Int y Float)
let entero = 27;
let decimal = 47.328;
console.log(typeof entero, typeof decimal);

//Notacion Cientifica
//La letra e
let number1 = 2e5;
console.log(number1);

//Infinito y NaN
let infinito = 5/0;
console.log(infinito);

let nan = 10 * 'casa';
console.log(nan);
console.log(typeof infinito, nan);

//Operadores aritmeticos

//Primer Grupo
//Suma
const suma = 28 + 25;
console.log(suma);

//Resta
let resta = 10 - 15;
console.log(resta);

//Multiplicacion
let multi = 3 * 4;
console.log(multi);

//Division
let division = 256 / 18;
console.log(division);

//Modulo (Devuelve el resto de la division que se indique)
let modulo = 10 % 1.5;
console.log(modulo);


//Potencia (Se usa un doble signo de multiplicacion, se eleva el numero de la izquierda por )
let potencia = 2 ** 3;
console.log(potencia);

//Precision en JS
let resul = 0.1 + 0.2;
console.log(resul);
console.log(resul.toFixed(3));//Indica el numero de cifras despues del punto decimal que mostrara el resultado
console.log(resul == 0.300); //Dos signos de igual (==) solo comprobaran si el valor es igual
console.log(resul === 0.300); //tres signos de igual (===) comprobaran el valor y el tipo de dato (Comparacion estricta)


//Metodo MATH
//La raiz cuadrada de cualquier numero
let sqRt = Math.sqrt(256);
console.log(sqRt);

//Valor Absoluto
let abs = Math.abs(-512);
console.log(abs);

//Numeros Random
let random = Math.random();//El metodo .random retornara valores aleatorios entre 0 (Incluido) y 1 (Excluido)
console.log(random);

let n = 2;
let randomNum = Math.random() * n;//Multiplicando por N donde n puede ser el limite (excluido) de nuestro valor de retorno
console.log(randomNum);

let randomNumInt = Math.floor(Math.random() * 10);//Con .floor redondeamos los valores a enteros
console.log(randomNumInt);
