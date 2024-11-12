//Closure
function funcionExterna () {
  let variableExterna = 'Soy la variable de la funcion externa'

  function funcionInterna () { //Lo que hace un closure es encapsular los datos (variables) de un entorno externo y almacenarlas y trabjar con ellas en su propio entorno. En este caso la funcion funcionInterna es un closure ya que toma la variable externa a ella y la guarda en un console.log
    console.log(variableExterna)
  }

  return funcionInterna;
}
const ejemploClosure = funcionExterna ()
ejemploClosure();

//Segundo Ejemplo
//Los closure en js sirven mucho para encapsular datos, puesto que cada funcion al ser invocada crea su propio contexto de ejecucion y ambito lexico 'Recordara' las variables dentro de ese ambito y contexto
function crearContador () {
  let contador = 0
  return function incrementarContador () { //Esta funcion sera nuestro closure puesto que accede a la variable externa 'contador' e incrementa su valor
    contador ++
    console.log(contador) //Posteriormente lo imprime en consola
  }
}

const contadorA = crearContador() //Al asignarle a la funcion 'contadorA' la funcion crearContador, estamos creando un contexto de ejecucion
contadorA()
contadorA()//Al ejercutarla dos veces, la memoria de la funcion actuara mostrando en consola el valor 1 y 2

const contadorB = crearContador()
contadorB()//Posteriormente, el contadorB tambien crea su contexto PROPIO de ejecucion y resetea al valor inicial que en este caso seria 0 y de ahi comienza a ejecutar, como solo se ejecuta una vez. la salida en consola sera 1
contadorA()//Y si regresamos al contexto de ejecucion de 'contadorA' veremos que en memoria se sigue almacenando el valor y cuando volvemos a ejecutar la funcion comenzara el contador donde se quedo la ultima vez, en este caso 2