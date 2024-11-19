//MAP() es un método inmutable, pues solo lee los datos del array (elementos), opera con ellos (pero no EN ELLOS directamente) y devuelve un array aparte con el resultado de las operaciones realizadas sin alterar el contenido del array original
//su objetivo es devolver un nuevo array donde cada uno de sus elementos será lo que devuelva la función callback aplicada a cada uno de los elementos del array original
const numeros = [12, 7, 15, 22, 34, 19, 8, 47, 50, 3]
const pares = numeros.map(nume => {
  if (nume % 2 === 0) {
    console.log(`${nume} SI es par`)
  } else {
    console.log(`${nume} NO es par`)
  }
  })

//Por ejemplo, usamos map para obtener el cuadrado de todos los números de un array y mostrarlos en consola por medio de la arrow function que se pasa como callback
const numerosNaturales = [5, 25, 2, 33]
const cuadrados = numerosNaturales.map(num => {
    console.log(num * num)
})

//Convertir un Array de números que representan temperaturas en grados Celsius a Fahrenheit y mostrarlos en consola ya convertidos
const temperaturaEnFahrenheit = [125, 100, 200]
const temperaturaEnCelsius = temperaturaEnFahrenheit.map(fahrenheit => ((5/9) * (fahrenheit - 32)).toFixed(2))
console.log(`Las temperaturas en fahrenheit: ${temperaturaEnFahrenheit}`)
console.log(`Las temperaturas convertidas a celsius: ${temperaturaEnCelsius}`)

//FOREACH()
//Es un método de JS que trabaja con arrays, lo que hace es iterar por cada elemento del array pero no devuelve nada, solo ejecuta la función callback que se manda a llamar con el método pero no crea arrays nuevos ni modifica el original. Suele ser util para imprimir valores sin crear necesariamente un nuevo array o modificar valores
const colors = ['red', 'pink', 'blue']
const iterarColors = colors.forEach(color => console.log(color)) //Se podría decir que forEach NO RETORNA ningún valor, solo ejecuta lo que dicta la función callback. Como la función indica, imprimirá el valor de cada elemento del array según vaya iterando sobre estos
console.log(colors)
console.log(iterarColors) //Al no retornar valores (solo ejecuta), la variable que almacena la ejecución del método (iterarColors) es UNDEFINED

//Sume los numeros contenidos en un Array y muestre el resultado en terminal
const numeros = [12, 7, 15, 22, 34, 19, 8, 47, 50, 3]
let suma = 0
numeros.forEach(num => suma += num)
console.log(`La suma de los elementos del array es: ${suma}`)