//Operadores Logicos
//AND &&
console.log(true === true && 1 == true); //En este caso, evalua true porque la primer comparacion retorna TRUE (igual valor y tipo de dato) y el segundo tambien retorna TRUE (Aunque no es lo recomendado puesto que la comparacion de igualdad no es estricta y no compara el tipo de dato) pero como ambos retornan TRUE, la logica tambien es TRUE

console.log(true === true && 1 === true); //Ahora, corrigiendo la segunda comparacion, tenemos un retorno FALSE (el tipo de dato de los dos datos es diferente) y como uno de los dos es false, retorna FALSE al final de la logica

//OR ||
console.log('Hola' == 'hola' || 100 >= 75); //En este ejemplo, la primer comparacion retorna FALSE, pero la segunda es TRUE, por lo que la logica retornara TRUE
console.log('Hola' === 'Hola' || 100 >= 75); //Aqui, ambas comparaciones son verdaderas, la logica tendra un valor TRUE
console.log('Hola' === 'hola' || 100 < 75); //En este caso, NINGUNA de las comparaciones son TRUE por lo que la logica retornara FALSE

//NOT !
console.log(!('42' == 42)); //la comparacion devuelve TRUE, pero el operador logico NOT revierte a FALSE
console.log(!(24 === 42)); //Caso contrario, devuelve FALSE la comparacion pero NOT retorna TRUE
