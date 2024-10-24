//Bucle for
let semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
for (i = 0; i < 5; i++) {
    console.log(`Hoy es ${semana[i]}`);
}
console.log(`Hoy es fin de semana`);

//FOR OF
let carrito = ['Iphone 16', 'Audifonos KZ', 'Tarjeta Grafica RTX4090', 'Mouse Logitech MX2'];
for (producto of carrito) {
    console.log(`Se agrego ${producto} a su carrito`)
}

//FOR IN
let automovil = {
    llantas: 'Michelin',
    espejos: 'Polarizados',
    motor: '8 Cilindros'
}
for (partes in automovil) {
    console.log(partes);
}
for (partes in automovil) {
    console.log(`${partes}===> ${automovil[partes]}`);
}

//Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.
let numero = parseInt(prompt('Teclea un numero, yo te dare una lista comenzando de cero hasta el numero que elijas: '));
let salida = ''

for (i = 0; i < numero; i++) {
    salida += i + ','
}
salida += i
alert(salida);

//Se trata de que dado un número entero el script muestre una cuenta atrás, es decir, una lista de numeros separados por comas desde el número tecleado hasta el 0.
let numero = parseInt(prompt('Teclea un numero y te dare una cuenta atras hasta cero'));
let salida = '';
for (i = numero; i > 0; i--) {
  salida += i + ',';
}
salida += i;
alert(salida);

//Se quiere un bucle que genere una lista con todos los números pares positivos por debajo del número tecleado por el usuario. Los números se aparecerán en una ventana alert con cambios de linea (carácter '\n').
let numero = parseInt(prompt('Teclee un numero'));
let pares = '';
for (i = 0; i < numero; i++) {
  if(i > 1) {
    pares += i
    console.log(pares)
  }
  alert('Teclee un numero valido');
}


let numero = parseInt(prompt('Teclee un numero'));
if (numero >= 1) {
  alert('Es positivo');
} else {
  alert('No es positivo');
}

//Correcto con validacion de positivos y pares :D
let numero = parseInt(prompt('Teclee un numero'));
let pares = '';
for (i = numero; i > 0; i--) {
  if (i % 2 === 0) {
    pares += i + '\n';
  }
}
if (pares !== ''){
  alert(pares);
} else {
  pares = 'Vuelva a ejecutar el programa con un numero positivo por favor';
  alert(pares);
}

//Este script debe escribir la tabla de multiplicar del número que el usuario teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.Recuerda que el salto de linea es el carácter "\n"
let multiplicador = parseInt(prompt('Ingrese el numero de la tabla de multiplicar que desea ver'));
let producto;
let salida = `Tabla de multiplicar del numero ${multiplicador}\n`;

for (i = 0; i < 10; i++) {
  producto = i * multiplicador;
  salida += `${i} * ${multiplicador} = ${producto}\n`
}
salida += `${i} * ${multiplicador} = ${i * multiplicador}\n`
alert(salida);

//En este ejercicio mezclamos bucles con condicionales: el usuario escribe un número y el script imprimirá (console.log) todos  los números menores que al dividirlos por 3 den como resto 2.
//Recuerda: un número es múltiplo de N cuando el dividirlo por N el resto es 0.
let numero = parseInt(prompt('Teclee el numero'));

for (i = 0; i < numero; i++) {
  if (i % 3 === 2) {
    console.log(i);
  }
}

//Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario. El resultado será de la forma "Los números enteros de 0 a n  suman suma"
let numero = parseInt(prompt('Teclee un numero'));
let suma = 0
for (i = numero; i >= 0; i--) {
   suma += i;
}
alert(suma);

//Programa un script que pida al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4
let numero = 0;
let suma = 0;
let mediaAritmetica = 0;

for (i = 0; i < 4; i++) {
  numero = parseInt(prompt('Teclee un numero'));
  suma += numero;
}
mediaAritmetica = (suma/4);
alert(`La media aritmetica de los 4 numeros tecleados con anterioridad es: ${mediaAritmetica}`);