//Creando un array con Array()
//Arrays de Strings
const frutas = Array('Mango', 'Sandia', 'Platano', 'Fresas')
console.log(frutas)

//Arrays de un solo numero (NO ES CORRECTO)
const justOneNumber = Array(12)
console.log(justOneNumber)

//Arrays de Numbers
const numbers = Array(1, 2, 3, 4, 5, 6)
console.log(numbers)

//Creando Arrays con Array literal syntax
//Array de UN SOLO NUMERO
const oneNumber = [5]
console.log(oneNumber)

//Array Vacio
const emptyArray = []
console.log(emptyArray)

//Array de Strings
const marcasAutos = ['Honda', 'Mitsubishi', 'Nissan', 'Ferrari', 'Toyota']
console.log(marcasAutos)

//Array Mixtos (Con diferentes tipos de datos)
const mixArray = [
  true,
  58,
  'Hola mundo',
  {
    name: 'Angel', edad: 21
  },
  '#ffff'
]
console.log(mixArray)

//Acceder a un valor especifico dentro del array (Con la posicion en el index)
console.log(marcasAutos[3])

//Como saber el tamaño (la cantidad de elementos dentro de un array) propiedad .length
console.log(mixArray.length)

//MUTABILIDAD
frutas.push('Guayabas')
console.log(frutas)

//INMUTABILIDAD
const newFrutas = frutas.concat(['Uvas', 'Naranjas'])
console.log(frutas)
console.log(newFrutas)

//Verificar que un Array es Array con Array.isArray()
const verificacion = Array.isArray(marcasAutos)
console.log(verificacion)

//SUMAR TODOS LOS NUMEROS QUE TENEMOS ES UN ARRAY
const numeros = [2, 2, 5, 10]
let suma = 0
for (i = 0; i < numeros.length; i++) {
  suma += numeros[i]
}
console.log(suma)