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
// Entradas
var celsuis = prompt("Ingrese la temperatura en grados celsuis")

// Convertir de string a number
var celsuisNum = parseInt(celsuis)

// Proceso

var fahrenheit = (celsuisNum * 9/5) + 32

// Salida
alert("los grados celsuis de: "+ celsuis +" en fahrenheit son: "+fahrenheit)

