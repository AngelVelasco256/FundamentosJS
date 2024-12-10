//Clases en JS
//Las clases en javascript nacen como una actualización de las funciones constructoras, una solución que moderniza la sintaxis y la familiariza con la de otros lenguajes de programación que tienden a utilizarse mas para la Programación Orientada a Objetos como Java
//En si, tienen el mismo resultado que la función constructora pero la sintaxis es mas intuitiva, la palabra reservada CLASS sirve para declarar el inicio de una clase en javascript que nos servirá de base para crear nuevas instancias, el nombre de la clase debe iniciar en Mayúscula, seguidamente se declara un constructor en forma de función el cual recibirá parámetros de entrada que se asignaran como valor a las propiedades de cada instancia
//Aunado a esto, los métodos se declaran fuera del constructor, haciendo el código mas legible
class Perro { //Utilizamos la palabra reservada CLASS para decirle al navegador que comenzaremos a declarar una clase
  constructor (nombre, raza, edad, vacunas) { //El CONSTRUCTOR se encargara de hacer la base que servirá de plantilla para las instancias de dicha clase
    this.nombrePerro = nombre
    this.razaPerro = raza //Asignamos las propiedades de las instancias para que tomen el valor de los parámetros que ingresemos a la hora de invocar al constructor
    this.edadPerro = edad
    this.vacunasPerro = vacunas
  }
  alertaVacunas () { //Al mismo nivel del constructor declaramos los métodos que tendrán las instancias al ser creadas, recordemos que se declaran de manera tradicional para hacer uso del enlace léxico (palabra reservada THIS)
    if (this.vacunasPerro !== 'TODAS') {
      console.log(`El perrito ${this.nombrePerro} no cuenta con todas sus vacunas, atender inmediatamente`)
    } else {
      console.log(`El perrito ${this.nombrePerro} esta sano y salvo, cuenta con todas sus vacunas`)
    }
  }
}

const perrito1 = new Perro ('Rocky', 'Beagle', 3, 'CASI TODAS') //Invocamos el constructor de la clase Perro y procedemos a crear la instancia perrito1 con los siguientes parámetros que a su vez serán valores de las propiedades del objeto
console.log(perrito1) //Imprimimos la instancia perrito1 (sera un objeto)
perrito1.alertaVacunas() //Invocamos el método alertaVacunas() de la instancia llamada perrito1, la cual nos dará uno u otro resultado dependiendo del valor asignado a la propiedad vacunasPerro
