//Funcion declarada normalmente
const greeting = function (name) {
  return `Hi, ${name}!!!`
}
console.log(greeting('Martin'))


//Funcion con flecha con return explicito
const newGreeting = (name) => {
  return `Hi, ${name}`
}
console.log(newGreeting('Angel'))

//Funcion Flecha con return implicito
const newGreetingImplicit = name =>  `Hi, ${name}` //Ahorramos lineas de codigo simplificando la sintaxis de la funcion quitando el return y los brackets que delimitan el cuerpo de la misma

//Podemos colocar los parentesis en caso de necesitar mas de un parametro de entrada para el funcionamiento de la funcion
const newGreetingImplicitWithTwoParameters = (name, lastName) =>  `Hi, I'm  ${name} ${lastName}`
console.log(newGreetingImplicitWithTwoParameters('Angel', 'Velasco'))

//Lexical Binding
const legendsFormulaOne = {
  name: 'Ayrton Senna', //una propiedad de un objeto llamado legendsFormulaOne
  messageWithTraditionalFunction: function (message) { //Una propiedad que se define como funcion se convierte en un metodo del objeto legendsFormulaOne ;)
    console.log(`${this.name} says: ¡${message}!`);
  },
  messageWithArrowFunction: (message) => {
    console.log(`${legendsFormulaOne.name} says: ¡${message}!`); //Correccion!!! this se simplifica, ya que no se crea un nuevo contexto de ejecucion  a partir de la funcion, por lo que es mas facil y conciso ya que se respeta el scope de la funcion por el enlace lexico
  }
}

legendsFormulaOne.messageWithTraditionalFunction('Every year there is a champion, but there is not always a great champion');
legendsFormulaOne.messageWithArrowFunction(`I'm a Winner`);