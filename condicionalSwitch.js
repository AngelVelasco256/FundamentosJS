let palabra = prompt('Ingresa una palabra y averigua cuantas letras tiene: ');
if(palabra.length > 1) {
  switch (palabra.length) {
    case 2: {
      console.log('Tiene 2 letras');
        alert(palabra.length);
    } break
    case 3: {
      console.log('Tiene 3 letras');
        alert(palabra.length);
    } break
    case 4: {
      console.log('Tiene 4 letras');
        alert(palabra.length);
    } break
    case 5: {
      console.log('Tiene 5 letras');
        alert(palabra.length);
    } break
    default: {
      console.log('La palabra es muy larga, contiene mas de 5 letras');
        alert(palabra.length);
    }
  }
} else {
  console.log(palabra.length);
  alert('Escribe una palabra por favor');
}

//Ejercicio para terminal
// let palabra;
// process.stdout.write('Escribe una palabra para decirte cuantas letras tiene:');
// process.stdin.on('data', function(data) {
//   palabra = data.toString();
//   if (palabra.length > 2) {
//     switch(palabra.length - 2) {
//       case 2: {
//         process.stdout.write('La palabra que ingresaste tiene 2 letras');
//       } break
//       case 3: {
//         process.stdout.write('La palabra que ingresaste tiene 3 letras');
//       } break
//       case 4: {
//         process.stdout.write('La palabra que ingresaste tiene 4 letras');
//       } break
//       case 5: {
//         process.stdout.write('La palabra que ingresaste tiene 5 letras');
//       } break
//       default: {
//         process.stdout.write('La palabra que ingresaste tiene muuuuuuchas letras');
//       } break
//     }
//   } else {
//     process.stdout.write('Escribe una palabra por favor');
//   }
//   process.exit();
// });
