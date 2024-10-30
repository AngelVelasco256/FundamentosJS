//MUTABILIDAD (MODIFICAR EL ARREGLO ORIGINAL)
//PUSH() Agrega los elementos enviados como parametro al FINAL de nuestro array original y devuelve su longitud
const paises = ['México', 'España', 'Japón', 'Brasil']
const newPaises = paises.push('Corea del Sur', 'Argentina', 'Alemania')

console.log(paises);
console.log(newPaises);

//POP() elimina el ultimo elemento del array y devuelve el elemento que fue removido
const eliminarPaises = paises.pop()
console.log(paises);
console.log(eliminarPaises);