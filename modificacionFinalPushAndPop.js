//MUTABILIDAD (MODIFICAR EL ARREGLO ORIGINAL)
//PUSH() Agrega los elementos enviados como parametro al FINAL de nuestro array original y devuelve UNICAMENTE su longitud
const paises = ['México', 'España', 'Japón', 'Brasil']
const newPaises = paises.push('Corea del Sur', 'Argentina', 'Alemania') //El metodo push() agrega AL FINAL DEL ARRAY los elementos que pasemos como parametros

console.log(paises); //>>['México', 'España', 'Japón', 'Brasil', 'Corea del Sur', 'Argentina', 'Alemania']
console.log(newPaises); //La variable newPaises solo almacenara lo que retorna el metodo push(), un number que refleja la nueva longitud del array

//POP() elimina el ultimo elemento del array y devuelve el elemento que fue removido
const paises = ['México', 'España', 'Japón', 'Brasil']
const eliminarPaises = paises.pop() //Al ejecutar el metodo .pop() se elimina el ultimo elemento ('Brasil') y lo devuelve
console.log(paises) //>>['México', 'España', 'Japón', 'Brasil']
console.log(eliminarPaises) //>> Brasil