//Bucle WHILE
//Escribir un script que pida al usuario una contraseña. Si coincide con la clave definida en el script le devolverá el mensaje "Acceso concedido" y si no coincide le devolverá el mensaje "Acceso Denegado" . Si falla tres veces se emitirá el mensaje "Alerta, intruso"
let intentos = 0;
let pass = 'clave';
let contraseña;
while (contraseña != pass && intentos < 3) {
    contraseña = prompt('Escriba la contraseña: ');
    if (contraseña === pass) {
        alert('Acceso Concedido');
    } else {
        alert('Acceso Denegado');
        intentos++;
    }
}
if (intentos === 3) {
    alert('ALERTA!!! \n Intruso detectado');
}

//Bucle DO WHILE
let tecla
do {
    tecla = prompt('Teclea la letra mágica, intenta adivinar');
}
while (tecla != 'A')
alert('Felicidades, descubriste la tecla magica');

//Se trata de pedir al usuario que teclee un número entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el número
DONE:
let numero = parseInt(prompt('Tecle un numero entre 1 y 5'));
while (numero < 1 || numero > 5) {
    numero = parseInt(prompt('Vuelva a teclear un numero valido'));
}
alert(`Correcto, usted tecleo ${numero}`);

//Un script que preguntará al usuario si desea continuar con el programa. Si el usuario pulsa una letra n (mayúscla o minúscula), el programa finalizará. Cualquier otra entrada repetirá la pregunta
DONE:
let respuesta = prompt('Desea continuar ejecutando el script? \nPresione n/ N si desea finalizar\nPresione cualquier tecla para continuar');
while (respuesta != 'n' && respuesta != 'N') {
    respuesta = prompt('Aborte la ejecución inmediatamente\nPresione n/N para finalizar el script');
}
alert('BYEBYE :D')

//Determinar si el número que teclea el usuario es primo o no. Recordar que un número primo es el que solo puede dividirse por si mismo y por la unidad.
DONE:
let numero = parseInt(prompt('ingrese numero a evaluar'));
// let divisor = parseInt(Math.sqrt(numero));
let divisor = 2;
let esPrimo = true;
while (numero <= 1) {
    numero = parseInt(prompt('Vuelva a ingresar numero a evaluar'));
}
while ((divisor <= Math.sqrt(numero)) && (numero % divisor === 0)) {
    esPrimo = false;
    divisor++;
}
if (esPrimo) {
    alert(`${numero} SI es primo`);
} else {
    alert(`${numero} NO es primo`);
}


//En este script se pedirá al usuario que teclee un número cada vez. El proceso acaba cuando teclee un 0 en cuyo caso además mostrará la suma de todos los números tecleados.
let numeros = 1;
let sumaNumeros = 0;
while (numeros !== 0) {
    numeros = parseInt(prompt('Teclee un numero \nSi teclea el numero 0 se parara el programa'));
    sumaNumeros += numeros;
}
alert(`Tecleo el numero 0, el programa a frenado su ejecucion \nLa suma de sus anteriores tecleos es: ${sumaNumeros}`);

//Este script muestra un menu de opciones: 1- Leer datos. 2- Mostrar datos 3- Fin. El usuario deberá teclear uno de ellos y el programa mostrará la opción elegida. Si teclea un valor fuera del menu se mostrará un mensaje de error y se vuelve a pedir un número de opción. El programa finaliza al teclear el 3.
let opciones = 0;
while (opciones !== 3) {
    opciones = parseInt(prompt('Menú\n 1.- Leer datos\n 2.- Mostrar datos\n 3.- Cerrar programa\n Teclee la opcion que desee: '));
    switch (opciones) {
        case 1: {
            alert('Usted eligio 1.- LEER DATOS');
        } break;
        case 2: {
            alert('Usted eligio 2.- MOSTRAR DATOS');
        } break;
        case 3: {
            alert('Usted eligio 3.- SALIR');
        } break;
        default: {
            alert('Error, teclee una opcion valida');
        }
    }
}

//Este script le pide al usuario que vaya tecleando números enteros positivos hasta que el usuario ingrese el 0. En esete caso el programa acaba mostrando el valor máximo y mínimo de los números tecleados.
let numero = parseInt(prompt('ingrese un numero: '));
let min = numero;
let max = 0;

while (numero !== 0) {
    max = (numero > max) ? numero:max;
    min = (numero < min) ? numero:min;
    numero = parseInt(prompt('ingrese otro numero: '));
}
if (max === 0) {
    alert('Teclee un numero entero positivo apartir de uno');
} else {
    alert(`Tecleo el numero cero, se ha frenado el programa \nEl minimo numero tecleado es: ${min} y el maximo es: ${max}`);
}

//Este script le pide al usuario que vaya tecleando números una y otra vez, pero solo números pares, en caso de que teclee un número impar el programa acabará y dirá la cantidad de números pares ingresados (el 0 cuenta como par).
let numeros = 0;
let divisor = 2;
let total = 0;
numeros = parseInt(prompt('Ingrese SOLO NUMERO PARES: '));
while (numeros % divisor === 0) {
    numeros = parseInt(prompt('Ingrese SOLO NUMERO PARES: '));
    total++
}
alert(`Tecleo un numero impar, la cantidad de numeros pares tecleados es: ${total}`);