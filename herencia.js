//Herencia
//Cuando tenemos una clase o función constructora que dan lugar a instancias, nacen dos conceptos que unicamente tienen que ver con estos dos tipos de funciones los cuales son la HERENCIA y los PROTOTIPOS los cuales son de suma importancia en la programación orientada a objetos

//A continuación vamos a declarar una clase normal de toda la vida
class Animal {
  constructor(nombre, tipo) {
    this.Nombre = nombre
    this.Tipo = tipo
  }
  emitirSonido () {
    console.log('El animal ha emitido sonido!!!')
  }
}

//Ya que tenemos la clase, nos damos cuenta que para un animal en especifico (en este caso GATO), podemos construir otra clase, pero en lugar de volver a asignar propiedades a las instancias tales como nombre y tipo, podemos heredar de una clase aparte esas mismas propiedades y usarlas
//Esto lo hacemos en dos pasos:
class Gato extends Animal{ //Al momento de inicializar la clase Gato, agregamos la palabra reservada EXTENDS la cual nos dirá que la clase en donde estamos poniendo esa palabra es una Extension de la clase que pondremos después, en este caso seria ANIMAL
  constructor(nombre, tipo, raza) { //seguimos definiendo como parámetros de entrada del constructor los valores que necesitamos de la clase que hereda y también los nuevos que serán propios de esta clase
    super(nombre, tipo) //Para poder utilizar las propiedades de la clase que hereda, utilizamos la palabra reservada SUPER, seguida de unos paréntesis en los cuales mandamos a llamar las propiedades que necesitaremos en la nueva clase
    this.Raza = raza //Cuando hayamos terminado de llamar las propiedades de la clase que hereda, seguimos declarando las propiedades que pertenecen a la nueva clase, en este caso la nueva propiedad seria RAZA
  }
  emitirSonido() { //La herencia también se puede ver en los métodos que nosotros creamos en las clases, estos se pueden reasignar para cambiar por completo según la clase utilizada (conservando el mismo nombre)
    console.log('El gato esta maullando!!!')
  }
  correr() { //También podemos agregar métodos propios de la clase nueva
    console.log(`${this.Nombre} se ha ido corriendo :0`)
  }
}

const gato1 = new Gato('Canelita', 'Felino', 'Esfinge')
console.log(gato1)
gato1.emitirSonido()

//Prototipos
//Los prototipos como ya se menciono, de manera breve, son objetos que se crean a partir de una clase o función constructora que puede crear instancias (nuevos objetos a partir de ellas).
//Primeramente, podemos agregar métodos a una instancia (exclusiva y unicamente a esa instancia) de la siguiente manera
gato1.dormir = function() { //invocamos a la instancia por medio de su nombre, seguido de un punto y el nombre del nuevo método, como el método es una función pues igualamos a una función anónima, seguida de paréntesis y corchete que indicaran el bloque de código a ejecutar cuando el método sea invocado
  console.log(`${this.Nombre} se ha ido a dormir`)
}
gato1.dormir() //Invocamos el nuevo método

//Ahora veremos como agregar un método pero este se aplicara a TODAS las instancias que se creen a partir de alguna de las clases (GATO y ANIMAL) por medio de la cadena de prototipos
Gato.prototype.comer = function() { //Indicamos el nombre de la CLASE (en este caso seria GATO) y llamamos al objeto prototype de dicha clase, seguido del nombre del nuevo método y procedemos a escribir nuestro método en forma de función anónima
  console.log(`${this.Nombre} se ha puesto a comer! :D`)
}
console.log(gato1)
gato1.comer() //Ahora, cualquier instancia que se cree a partir de la clase contendrá el método COMER, aunque no estará explícitamente en las propiedades, si lo estará internamente en el objeto PROTOTYPE