// String Methods
let string = "Hola mundo"; //El tipo de dato String se pueden escribir de 3 formas en JS, con comillas dobles
let string2 = 'JavaScript'; //Con comillas simples

//Concatenacion (Concat)
//La forma antigua de concatenar (unir) varias cadenas de texto
console.log(string + " " + string2);
//La forma mas practica, directa y que no solo funciona con strings si no con variables en si es con comillas invertidas
console.log(`Este es un ${string} en ${string2}`);

//Longitud (.length)
let longitud = 'Este es un texto de prueba para el metodo length que devuelve el numero total de caracteres incluyendo los espacios u !!! signos de puntuacion'
let signos = '???  '
console.log(signos.length);

//Conversion a MAYUSCULAS
let frase1 = 'JavaScript es genial, comienzo a entender muchas cosas y es emocionante'
console.log(frase1.toUpperCase()); //toUpperCase() es el metodo para convertir strings a su version en mayusculas

//Conversion a minusculas
let frase2 = 'En esta clase veremos: METODOS DEL TIPO STRING'
console.log(frase2.toLowerCase()); //toLowerCase() es el metodo que convierte los caracteres de tipo string en a minusculas

//Substring
let frase3 = 'Para este ejemplo quiero llamaer solo las primeras tres letras'
console.log(frase3.substring(0, 3)); //El metodo substring necesita de dos paramatros, el index de que indicara el inicio y el index+1 del final donde rescatara los caracteres