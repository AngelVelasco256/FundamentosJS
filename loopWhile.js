//Bucle WHILE
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
    tecla = prompt('Teclea la letra magica, intenta adivinar');
}
while (tecla != 'A')
alert('Felicidades, descubriste la tecla magica');

//Ejercicio WHILE
let numero = parseInt(prompt('Tecle un numero entre 1 y 5'));
while (numero <  1 || numero > 5) {
    numero = parseInt(prompt('Vuelva a teclear un numero valido'));
}
alert(`Correcto, usted tecleo ${numero}`);

let respuesta = prompt('Desea continuar ejecutando el script? \nPresione n/ N si desea finalizar\nPresione cualquier tecla para continuar');
while (respuesta != 'n' && respuesta != 'N') {
    respuesta = prompt('Aborte la ejecucion inmediatamente\nPresione n/N para finalizar el script');
}
alert('BYEBYE :D')