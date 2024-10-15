//Bucle for
let semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

for (i = 0; i < 5; i++) {
    console.log(`Hoy es ${semana[i]}`);
}
console.log(`Hoy es fin de semana`);


// Programa un script que pida al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4

let numero = parseInt(prompt('Teclea un numero, yo te dare una lista comenzando de cero hasta el numero que elijas: '));
let salida = ''

for (i = 0; i < numero; i++) {
    salida += i + ','
}
salida += i
alert(salida);

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