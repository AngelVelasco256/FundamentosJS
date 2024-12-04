//Función Constructora
//Para hacer los objetos una estructura que guarde información de manera escalable y eficiente podemos utilizar las funciones constructoras las cuales nos brindan facilidades de trabajar grandes cantidades de objetos con poco código haciéndolo mas elegante, legible y eficiente
function Carro (marca, modelo, traccion, motor, numeroPuertas) {
  this.marca = marca
  this.modelo = modelo
  this.traccion = traccion
  this.motor = motor
  this.numeroPuertas = numeroPuertas
}

const carro1 = new Carro('Nissan', 'Silvia S15', 'Trasera', 'L 18', 4)
console.log(carro1)

const carro2 = new Carro('Mazda', '787', 'Trasera', 'Rotativo', 2)
console.log(carro2)

//Agregando una nueva propiedad a la función constructora
//Cuando queremos agregar a una función constructora una nueva propiedad de nuestro objeto, podemos ir al prototype del objeto y agregar ahi la propiedad para que asi se agregue en el prototipo de las instancias que creemos a partir de la función constructora para asi reutilizar el código
//nombreDeLaFuncionConstructora.prototype.nombreNuevaPropiedad = valor
Carro.prototype.competicion = 'Carreras'
console.log(carro1)
console.log(carro2)

//Agregando una nueva propiedad a una instancia ya creada
//Podemos aplicar el uso de la siguiente sintaxis puesto que la instancia es, al final del dia, un objeto de la función constructora
carro1.paisDeOrigen = 'Japon'
console.log(carro1)

//Agregando Métodos a una instancia previamente creada por medio del prototype
//Agregamos métodos que puedan ser reutilizados por las instancias creadas a partir de la función constructora con una función anónima y asi volvemos nuestro código mas escalable
Carro.prototype.mantenimiento = function (parteAfectada) {
  console.log(`Mantenimiento para el carro: ${this.marca} ${this.modelo}, en la zona de: ${parteAfectada}`)
}

carro1.mantenimiento('Defensa')
carro2.mantenimiento('Llantas')