const userDataBase = [
  {
    userName: 'andres',
    password: '123'
  },
  {
    userName: 'caro',
    password: '456'
  },
  {
    userName: 'Angel',
    password: '1001'
  }
]

//Debugging para comprobar conocimientos jajajaja
// for(i = 0; i < userDataBase.length; i ++) {
//   console.log(`${userDataBase[i].userName}\n${userDataBase[i].password}`)
// }
// console.log(userDataBase[0].userName)
// console.log(userDataBase[0].password)

const usersTimeLine = [
  {
    userName: 'Carolina',
    post: 'Estoy comenzando a aprender JavaScript :D'
  },
  {
    userName: 'Martin',
    post: 'Nuevo trabajo conseguido!'
  },
  {
    userName: 'Oscar',
    post: 'Dia de descanso, hora de ver unas películas'
  }
]

//Entrada de usuarios y contraseñas
  let inUserName = prompt('Ingrese su nombre de Usuario: ')
  let inPassword = prompt('Ingrese la constraseña: ')
//Validación del Usuario y contraseña
  const validarUsuario = (userName, password) => {
    const usuarioValidado = userDataBase.find(user => user.userName === userName && user.password === password) //De esta manera entramos a las propiedades de cada objeto, tomemos en cuenta que cada objeto dentro del array, asi tenga 2 o n propiedades, sigue siendo UN SOLO ELEMENTO DEL MISMO ARRAY.
    //Con el método FIND() iteramos sobre TODO el array completo y cada elemento del array entra como parámetro a dicho método. En nuestro caso, USER sera como denominemos a cada elemento que vaya a ser iterado, teniendo ya un "nombre" para cada objeto, podemos acceder a sus propiedades con el punto y asi evaluar (recordemos que la función callback que es la otra parte del método find sirve para evaluar el elemento iterado, si encuentra un elemento igual al que nosotros estamos evaluando, retornara TRUE, si no, El valor de retorno sera UNDEFINED, lo cual también es igual a FALSE).
    if(usuarioValidado) {
      alert(`Bienvenid@ ${userName}`)
      //Podemos usar esta misma validación para mostrar un mensaje de bienvenida y ademas, mostrar el timeline si se accedió correctamente a una cuenta
      console.log(`Bienvenido a tu red social favorita ${userName}\nAqui tienes tu TimeLine`)
      const mostrarTimeLine = usersTimeLine.forEach(publicacion => console.log(`${publicacion.userName} dice:\n${publicacion.post}\n`)) //Utilizamos el método FOREACH() para iterar sobre TODO el array y por cada iteración, formateamos la salida para mostrar solo la información que queremos de manera mas organizada
    } else {
      alert(`Credenciales Incorrectas`)
    }
}
validarUsuario(inUserName, inPassword)