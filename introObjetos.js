//El objeto en javascript es una estructura de datos la cual guarda valores con una relación
/*
  Key ==> value
  donde key sera una propiedad del objeto en cuestión
  y value sera, como su nombre lo indica, el valor de dicha propiedad que puede ser de cualquier tipo de dato primitivo, asi como funciones y otros objetos

  objeto = {
  propiedad: valor,    cada propiedad define su valor con dos puntos y seguido de estos, el valor
  propiedad: valor,    para cada nueva propiedad a definir, la separamos con comas antes y después exceptuando la ultima, donde ya no se le agrega la coma
  propiedad: valor
  }
*/

//Crear un objeto
const persona = {
  colorCabello: 'Castaño',
  nombre: 'Angel', //Propiedad de tipo STRING
  edad: 35, //Propiedad de tipo NUMBER INT
  direccion: {
    calle: 'constituyentes',
    numeroExterior: 15,
    numeroInterior: null, //Propiedad de tipo NULL pq es opcional el tener o no numero interior en tu residencia
    ciudad: 'CDMX'
  },
  saludar: (dia) => { //Métodos: son funciones declaradas dentro de un objeto como si fueran propiedades del mismo y lo que hacen es interactuar por medio de las otras propiedades de las cuales esta compuesto nuestro objeto
    console.log(`Hola, mi nombre es: ${persona.nombre} y te saludo encantado de la vida en este dia ${dia}`) //Utilizando la propiedad [nombre], la función se encarga de mostrar por consola el mensaje incluyendo el valor de la propiedad
  }
}
persona.saludar('lunes') //Se invoca el método, colocando primero el nombre del objeto que lo contiene seguido de un punto y el nombre del método y dos paréntesis, en caso de requerir parámetros de entrada ajenos al objeto se deben de introducir

//AGREGAR propiedades al objeto una vez creado [objeto.propiedadQueSeAgregara = valor]
persona.telefono = 5530900856
persona.salario = '99999K'//Se pueden agregar propiedades una vez que se ha creado el objeto simplemente colocando el nombre del objeto seguido de un punto y especificando su valor con un signo de igual, si la propiedad ya existe, se actualizara su valor
console.log(persona.telefono)
console.log(persona.salario)

//ELIMINAR Propiedades del objeto una vez creado [delete objeto.propiedadQueSeEliminara]
console.log(persona.colorCabello) //En esta impresión, el valor todavía retornara puesto que esta antes de la eliminación
delete persona.colorCabello //Eliminamos la propiedad de nuestro objeto junto con su valor
console.log(persona.colorCabello) //Ahora nos dirá que es UNDEFINED puesto que esta sin definir, no lo encuentra puesto que lo hemos eliminado del objeto