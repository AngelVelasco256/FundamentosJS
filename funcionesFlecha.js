//Funcion declarada normalmente
const greeting = function (name) {
  return `Hi, ${name}`
}

//Funcion con flecha con return explicito
const newGreeting = (name) => {
  return `Hi, ${name}`
}

//Funcion Flecha con return implicito
const newGreetingImplicit = name =>  `Hi, ${name}`

const newGreetingImplicitWithTwoParameters = (name, lastName) =>  `Hi, I'm  ${name} ${lastName}`

newGreetingImplicit('Angel')

//Lexical Binding
const legendsFormulaOne = {
  name: 'Ayrton Senna',
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ¡${message}!`);
  },
  messageWithArrowFunction: (message) => {
    console.log(`${legendsFormulaOne.name} says: ¡${message}!`); //las Arrow Function no tienen claro el contexto THIS, entonces, al llamar al metodo de un objeto, el contexto THIS no funciona correctamente
  }
}

legendsFormulaOne.messageWithTraditionalFunction('Every year there is a champion, but there is not always a great champion');
legendsFormulaOne.messageWithArrowFunction(`I'm a Winner`);