// let numeroSecreto  = Math.floor(Math.random()  * 10);
// let numeroTecleado = parseInt(prompt('¿Puedes predecir el numero secreto?'));

// if (numeroTecleado === numeroSecreto) {
//   alert(`Felicidades, el numero ${numeroTecleado} es correcto`);
// } else {
//   alert(`Lo sentimos, el numero ${numeroTecleado} no es correcto, Intenta nuevamente`)
// }

//EJERCICIO EN TERMINAL
process.stdout.write('dime el numero: ');
process.stdin.on('data', function(data){
  let numeroTecleado = parseInt(data);
  let numeroSecreto = Math.floor(Math.random() * 10);
  if (numeroTecleado == numeroSecreto) {
    process.stdout.write(`Felicidades, el numero ${numeroTecleado} es correcto \n`);
  } else {
    process.stdout.write(`Lo sentimos, el numero ${numeroTecleado} es incorrecto, intenta nuevamente \n`);
  }
})