/*

Comentario
de
varias
lineas

*/
// Comentario de una linea

//Salidas

// alert('hola "" ')
// alert('')
// alert(``)
// alert(2+2) //4
// alert(10>11) //false

// Escribir en el viewport
// document.write("Hola Clase de Dev.f")

// por consola
// console.log("Hola clase")

//Entradas
// var nombre = prompt("Cual es tu nombre")
// console.log("Hola ,", nombre)

// console.log("Hola " + prompt("Cual es tu nombre?"))
 //variable string
var nombreVariable = "Francisco"
//number
var variableNumero = 13
//boolean
var variableBool = true
//obj
var variableObjet = {
  clave: "Valor"
}
//null
var tipoNull = null
//undefined
var tipoUndefined;

// Ejercicio calculadora sencilla
// Entradas
// var numero1 = prompt("ingrese el primer numero?")
// var numero2 = parseInt(prompt("ingrese el segundo numero"))

// // Proceso
// var suma = parseInt(numero1) + numero2

// // Salidos
// console.log("La suma de "+ numero1 + " + " + numero2 + " es: " + suma)

// Ejercicios
/*
Calculadora de edad:
Escribe un programa que solicite al usuario su
año de nacimiento y luego calcule su edad actual y la muestre en pantalla.
*/
// Entradas
// var anioNacimiento = prompt("Por favor, ingresa tu anio de nacimiento")

// // Proceso
// var edadActual = 2024 - parseInt(anioNacimiento)

// // Salida
// alert("La edad del usuario es: "+ edadActual)


/*
Calculadora de IMC (Índice de Masa Corporal):
Pide al usuario su peso y su altura, luego calcula su IMC y muestra el resultado.
javascript
*/
// Entradas
// var peso = prompt("Ingresa tu peso en kilogramos")
// var altura = prompt("Ingrese su altura en metros")

// // Proceso
// var pesoNum = parseInt(peso)
// var alturaNum = parseInt(altura)

//  //CALCULO DE IMC

// var imc = pesoNum / (alturaNum * alturaNum)

// // Salida
// alert("Tu imc es "+imc)

/*
Conversión de temperaturas:
Solicita al usuario una temperatura en grados Celsius 
y conviértela a Fahrenheit utilizando la fórmula: F = C * 9/5 + 32.
*/
// // Entradas
// var celsuis = prompt("Ingrese la temperatura en grados celsuis")

// // Convertir de string a number
// var celsuisNum = parseInt(celsuis)

// // Proceso

// var fahrenheit = (celsuisNum * 9/5) + 32

// // Salida
// alert("los grados celsuis de: "+ celsuis +" en fahrenheit son: "+fahrenheit)


// var string1 = "Blanca "
// var string2 = "Benitez"

// var concatencacionDeString1Strin2 = string1 + string2

// console.log(concatencacionDeString1Strin2)
// var comparacion = true && false //Resultado final false
// var Or = true || false // true

// var fechaDeHoy = prompt("Dame el dia de hoy")
// var estaLloviendo = true


// var resultado = "jueves" === fechaDeHoy &&  estaLloviendo === true

// if ("jueves" === fechaDeHoy &&  estaLloviendo === true){
//   console.log("Es jueves y esta lloviendo")
// } else {
//   console.log("No es jueves")
// }

// else if(condicion)

  // var edad = prompt("CUAL ES TU EDAD?")
  // var edadNum = parseInt(edad)
  // var cedula = true

  // if(edad >= 21 && cedula === true) {
  //   console.log("Eres mayor en todo el mundo y puedes entrar a cualquier fiesta")
  // } else if(edad >= 18) {
  //   console.log("ERES MAYOR DE EDAD y tienes la cedula al dia")
  // } else {
  //   console.log("No eres mayor por lo que no puedes entrar a la fiesta")
  // }

  // Semaforo
  // var semaforo = prompt("Dime un color del semaforo")
  // if(semaforo === "verde")
  // {
  //   console.log("Avanza")
  // } 
  // else if(semaforo === "amarillo")
  // {
  //   console.log("comienza a frenar o ten precaucion")
  // }
  // else if(semaforo === "rojo")
  // {
  //   console.log("Detente")
  // } 
  // else
  // {
  //   console.log("No escribiste los valores aceptados que son: verde, amarillo y rojo")
  // }

  //arrays

  // Crear un array
  var miarray = ['Susana', 'Rafael','Jesus', 'Jorge', 'Angel', 'Emilyo']

  console.log(miarray)
  // Acceder a la posicion
  console.log('El nombre del alumno: ' + miarray[1]) //Rafael

  // Modificar un array
  miarray[5] = 'Emilio'
  console.log(miarray)
  //Length
  console.log(miarray.length)//6

  //Agregar un dato a la lista
  miarray.push('Adriana')
  console.log(miarray)
  miarray.push('Adriana')

  miarray.pop()

  miarray.unshift('Guadalupe')
  miarray.unshift('Guadalupe')
  miarray.shift()

// Objetos Literal
var mascotas = {
  nombre: "Wally",
  tipo: "Canino",
  edad: 7,
  macho: true
}

// Acceder a un objeto
//notacion por punto
console.log("Nombre: "+ mascotas.nombre)
console.log("Edad:" + mascotas['edad'])

//Desestructuracion
var {nombre,tipo} = mascotas

console.log("La mascota "+nombre +" es de tipo: "+ tipo )
