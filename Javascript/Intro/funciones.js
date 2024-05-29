// sintaxis

// Declarar funcion
function miFuncion() {
  //codigo a ejecutar
}

function saludar () {
  var nombre = prompt("Cual es tu nombre?")
  console.log("Hola " + nombre)
}

function saludar2(){
  var nombre = prompt("Cual es tu nombre?")
  return "Hola "+ nombre
}


// llamar funcion
// saludar("Adriana")
// var saludarVariable = saludar2()
// console.log(saludarVariable)
// console.log(saludar2())

// parametros
function sumar(a,b=0){
  return a + b
}
console.log(sumar(4))

// scope(alcance)

//scope global
var mensaje = "Hola mundo"

function mostrarMensaje(){
  console.log(mensaje)
}

// mostrarMensaje()

// scope local
function mostrarMensajeScopeLocal(){
  let mensaje = "Hola mundo scope local"
  console.log(mensaje)
}

console.log("console.log: " + mensaje)

//mostrarMensajeScopeLocal()