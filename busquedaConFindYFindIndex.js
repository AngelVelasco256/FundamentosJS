//FIND
//Devuelve el primer valor del array original que cumpla la condición dada en la función callback
const multiplosDeCinco = [1, 5, 4, 0, 30, 28, 95, 100]
const numeroMayorADiez = multiplosDeCinco.find(numero => numero >= 10)//La función callback del método tiene que ser a su vez una condicional, para evaluar el parámetro y devolver el primero que resuelva como True la condición
console.log(multiplosDeCinco)//Es un método inmutable, pues no modifica los valores del array original
console.log(numeroMayorADiez)//Retorna el valor del elemento que cumplió la condición, de no ser asi, retornará undefined retornara



//FINDINDEX
//Devuelve el numero de Index del primer valor que cumple con la condición especificada en en la función callback, si no encuentra ningún valor que satisfaga la condición, devolverá -1
const numeros = [30, 68, 13, 99, 82, 89, 32, 94, 62, 49, 34, 51]
//INDEX         [0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 11]
const numeroMayorIgualA12 = numeros.findIndex(number => number === 95)
console.log(numeros)
console.log(numeroMayorIgualA12)//>> -1