//Async and Await
//A la hora de trabajar con promesas en js, tenemos la opción de utilizar ASYNC AND AWAIT las cuales son dos palabras reservadas que estructuran el manejo de promesas de manera que estas sean mucho mas claras, mas fáciles de leer y de comprender

let pokemon = prompt("Que pokemón desea encontrar?").toLowerCase()

//Implementando ASYNC AWAIT
async function fetchData() { //ASYNC es la palabra reservada para declarar una función como asíncrona, esto hace que, independientemente de si se resuelva (tanto exitosa como fatalmente) o si por el contrario, jamas se resuelve, se separa de el hilo principal de ejecución por el cual pasa el demás código a la hora de correrlo.
//Aunado a esto, la palabra ASYNC nos permite utilizar a su compañera AWAIT (en caso de querer utilizar solo una, esto nos dará error)
  try { //Contiene el código que podría generar errores, como llamadas a APIs o funciones asíncronas de ahi su nombre INTENTA... conectarte a la api por decir un ejemplo
    let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) //AWAIT: Se utiliza para declarar una promesa (dar inicio a una) y  pausa la ejecución hasta que la promesa se resuelve o se rechaza. Solo se puede usar dentro de funciones marcadas como async.
    //Si FETCH tiene éxito sigue ejecutando el código (las funciones o programación asíncrona en js tiende a ser sincrona dentro de si jajaja) pero si es rechazado, salta directamente al bloque CATCH
    let data = await respuesta.json() //Supongamos que nuestra consulta a la API se resolvió de manera correcta (devolvió información), ahora la podemos tratar con otra promesa la cual es formatear esa información a un estilo JSON para facilitar la visualización con javascript
    console.log(`El pokemón solicitado es un: ${data.name}\nEl numero que ocupa en la pokedex es el: ${data.id}`) //Como ultimo paso (al menos en este código de ejemplo) tenemos el mostrar en consola un texto formateado con `` en el cual a partir del JSON (recordemos que JSON es en su estado mas natural es un OBJETO) accedemos a unicamente 2 propiedades del mismo las cuales son nombre y numero de indice en la pokedex (si no se esta familiarizado con la serie pokemón, interpretemos el numero de pokedex como un indice que te dice cuantas especies de pokemón hay LOL)
    //Siendo obvio que para que este console.log sea visible, la promesa de tratamiento de la respuesta que dio la primera promesa tuvo que haberse cumplido satisfactoriamente
    //Como se puede observar, ASYNC AWAIT nos permite declarar funciones asíncronas, dentro de las cuales también definiremos promesas las cuales también consumiremos inmediatamente después de ser ejecutadas y en caso de no ser resueltas de manera satisfactoria, el bloque CATCH nos ayuda a manejar errores en dichas promesas por los cuales no se resuelven de manera correcta
  } catch(error) { //CATCH permite manejar cualquier "ERROR" en nuestra promesa al no resolverse de manera satisfactoria, entonces si por algún motivo la promesa que consulta a la API (la variable RESPUESTA guarda esa promesa) no se completa porque no existe ese pokemón, porque esta mal escrito o por equis motivo y falla la consulta entonces ese error lo captura el CATCH y lo lanza mediante un console.error()
    console.error(error)
  }
}
fetchData()
