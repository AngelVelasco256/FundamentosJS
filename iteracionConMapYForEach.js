//MAP()
//su objetivo es devolver un nuevo array donde cada uno de sus elementos será lo que devuelva la función callback por cada uno de los elementos del array original
const numeros = [1,2,3,4,5,6,7]
const pares = numeros.map(nume => {
  if (nume % 2 === 0) {
    console.log(`${nume} SI es par`)
  } else {
    console.log(`${nume} NO es par`)
  }
  })


const temperaturaEnFahrenheit = [125, 100, 200]
const temperaturaEnCelsius = temperaturaEnFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))
console.log(`Las temperaturas en fahrenheit: ${temperaturaEnFahrenheit}`)
console.log(`Las temperaturas convertidas a celsius: ${temperaturaEnCelsius}`)

//FOREACH
//Es un metodo de JS que trabaja con arrays, lo que hace es iterar por cada elemento del array pero no devuelve nada, solo ejecuta la funcion callback que se manda a llamar con el metodo pero no crea arrays nuevos ni modifica el original
const colors = ['red', 'pink', 'blue']
const iterarColors = colors.forEach(color => console.log(color))
iterarColors


const numeros = [1,2,3,4,5]
let suma = 0
const sumaNumeros = numeros.forEach(num => suma += num)
console.log(suma)