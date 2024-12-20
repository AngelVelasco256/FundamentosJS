//Promesas
/*Las promesas en JavaScript nos ayudaran a hacer nuestro código asíncrono.
  En un contexto normal, el lenguaje del navegador (JavaScript) se ejecuta de manera sincrona, lo que quiere decir que se va ejecutando una función o bloque de código solo e inmediatamente después de que el anterior acabe, esto también es llamado programación basada en un solo hilo o ejecución lineal
  En ciertas situaciones, puede que esta manera de ejecutar el código no satisfaga las necesidades, por lo que podemos ayudarnos de la ejecución asíncrona, también conocida como multi hilo
  La programación asíncrona se encarga de poner ciertas partes de nuestro código a trabajar en un hilo por separado del principal, esto con el fin de resolver dicha parte del código que no necesariamente debe su funcionamiento a nosotros, si no que depende de información o datos de terceros para ser ejecutada.
  Ejemplo del uso de asincronía se pueden observar cuando hacemos una solicitud a una API mediante FETCH
*/


//Ejemplo básico de la declaración y consumo de una promesa en JS
const promesa = new Promise((resolve, reject) => { //Declaramos la promesa en una variable que se llama promesa e invocamos el constructor con la palabra reservada new (porque las promesas son de tipo OBJECT), a la cual le pasamos como parámetro una función (Se recomienda una arrow function para un código mas legible) la cual tendrá dos parámetros los cuales suelen llamarse RESOLVE y REJECT que los usaremos para saber cuando una promesa se resolvió de manera exitosa y cuando ha sido rechazada respectivamente
  setTimeout(() => { //Ejecutaremos un setTimeOut() para simular el tiempo de respuesta a la petición de un servidor, en este caso setTimeOut() recibe dos parámetros, el primero sera la función que se ejecutara pasado el tempo de retraso y el segundo parámetro sera el tiempo de retraso en milisegundos
    let operacionExitosa = true
    if (operacionExitosa) {
      resolve('Operación Exitosa') //Invocamos el método RESOLVE() el cual tomara como parámetro cualquier dato que queramos que devuelva cuando la promesa se resuelva
    } else {
      reject('Operación Fallida') //Lo mismo pasa con REJECT(), puede tomar un string o number el cual sera la salida en caso de que la promesa haya sido rechazada
    }
  }, 5000) //El retraso expresado en milisegundos de setTimeOut
})
//CONSUMIENDO UNA PROMESA (RESULTADOS DE RESOLVER Y RECHAZAR)
//Siempre se recomienda utilizar .THEN() y .CATCH() para consumir una promesa en JS puesto que la primera se ejecuta cuando la promesa se ha resuelto y la segunda generalmente indica algún error por el cual la promesa ha sido rechazada
promesa //Llamamos a la variable que contiene nuestra promesa
  .then((successMessage) => { //seguido de un punto podemos invocar el método .THEN() el cual hereda como parámetro de entrada el mensaje (ya sea un texto o numero) que se definió en el método RESOLVE, puesto que el método THEN SIEMPRE sera ejecutado cuando una promesa devuelva el método RESOLVE
    console.log(successMessage)
  })
  .catch((errorMessage) => { //A su vez, catch también hereda el parámetro de entrada pero esta vez sera el valor que devuelve el método REJECT de la promesa, osea, en términos mas simples, cuando nuestra promesa ha sido rechazada (esto a manera de un error)
    console.error(errorMessage)
  })

const pro = Notification.requestPermission()
pro.then(function (request) {
  if (request === 'granted') {
    console.log('Notificaciones Activadas :D')
  } else {
    console.log('Notificaciones Desactivadas')
  }
})
pro.catch(function (error) {
  console.error(error)
})
pro.finally(function () {
  console.log('Ha terminado la promesa')
})

/**
 *Para mayor referencia puede consultar este video:
  1. https://youtu.be/ZTC0Gfhdzfc?si=ajJOZCnjMV1rE-EL
 */

//TODO EL CÓDIGO AQUÍ ESCRITO FUE HECHO A MANO, TRADICIONALMENTE Y SIN INTERVENCIÓN ALGUNA DE IA, QUEDA PROHIBIDA SU REPRODUCCIÓN O COPIA SIN DAR CRÉDITO CORRESPONDIENTE