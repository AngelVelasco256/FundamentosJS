//Spreed Operator
//1. Copiar arrays
const numerosPares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const copiaNumerosPares = [...numerosPares]
console.log(numerosPares)
console.log(copiaNumerosPares)

//2. Combinar array CONCATENACION
const comidaMexicana = ["tacos", "enchiladas", "chilaquiles", "tostadas", "flautas", "guacamole"];
const masComidaMexa = ["quesadillas", "pozole", "tamales", "sopes"]
const menuMexa = [...comidaMexicana, ...masComidaMexa]

console.log(comidaMexicana)
console.log(masComidaMexa)
console.log(menuMexa)

//3. Crear arrays a partir de uno existente y añadir elementos
const frutas = ["🍎", "🍌", "🍇", "🍉", "🍍"]
const masFrutas = [...frutas, "🍒", "🍑", "🍓", "🍊", "🥝"]
console.log(frutas)
console.log(masFrutas)

//4. Pasar elementos de un array como parametros para una funcion
function suma (a, b, c) {
  return a + b + c
}

const numeros = [5, 60, 2]

console.log(suma(...numeros))