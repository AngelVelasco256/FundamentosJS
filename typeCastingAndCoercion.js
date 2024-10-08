const string = '800';
const integer = parseInt(string); //Con la funcion ParseInt devolvemos un valor de tipo number
console.log(integer);
console.log(typeof integer);

const stringDecimal = '0.88888';
const float = parseFloat(stringDecimal);
console.log(float);
console.log(typeof float);

const mensaje = '111010111111110100010101010'
const mensajeBinario = parseInt(mensaje, 2);
console.log(mensajeBinario);

//Conversion IMPLICITA
const sum = '5' + 35;
console.log(sum);
console.log(typeof sum);

const sumBoolean = '3' + true;
console.log(sumBoolean);
console.log(typeof sumBoolean);

const sumNum = 3 + true;
console.log(sumNum);
console.log(typeof sumNum);

//Ejemplo DEFINITIVO
const stringValue = '10';
const numberValue = 10;
const booleanValue = true;

console.log('------------Operando con Strings---------------');
console.log(stringValue + stringValue);//
console.log(stringValue + numberValue);// EN TODOS LOS CASOS, CUANDO SE OPERA CON ALGUN VALOR STRING, LOS DEMAS TAMBIEN SE CONVIERTEN EN STRINGS Y SE CONCATENAN
console.log(stringValue + booleanValue);//
console.log('------------Operando con Numeros---------------');
console.log(numberValue + stringValue);
console.log(numberValue + numberValue);//Number + Number se SUMARAN o haran calculos matematicos, se trataran como numero siempre y no habra conversion
console.log(numberValue + booleanValue);//Number + Boolean convertira el booleano en un numero (1 para true y 0 para false) y hara la operacion que se ordena
console.log('------------Operando con Booleanos---------------');
console.log(booleanValue + stringValue);
console.log(booleanValue + numberValue);
console.log(booleanValue + booleanValue);//Cuando se opera booleano con booleano, ambos se convierten en tipo number para proceder a hacer operaciones matematicas, adoptando valores 1 para true y 0 para false

console.log('TODO SE TRATA DE UN PATRON');
console.log('CUANDO HAY STRINGS, CONCATENA LOS VALORES Y EL OUTPUT FINAL ES UN STRING');
console.log('CUANDO HAY NUMBERS O BOOLEANS, SE OPERA MATEMATICAMENTE CON LOS VALORES Y EL OUTPUT ES NATURALMENTE UN TIPO NUMBER');