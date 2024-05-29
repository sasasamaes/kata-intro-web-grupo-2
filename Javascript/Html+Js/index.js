//leer nodos
var titulo = document.getElementById("titulo-principal")
var tag = document.getElementsByTagName("h2")
var byClass = document.getElementsByClassName("subtitulo2")
var querySelector = document.querySelector(".subtitulo")
var querySelectorAll = document.querySelectorAll(".subtitulo2")

console.log(titulo)
console.log(tag)
console.log(byClass[0], "hola")
console.log(querySelectorAll)
//modificar
// Eventos Dom
querySelector.addEventListener("click", function (){
  if(titulo.style.color == "blue"){
    titulo.style.color = "green"
    titulo.innerHTML = "Green"
  } else {
    titulo.style.color = "blue"
    titulo.innerHTML = "Blue"
  }
})

setTimeout(function() {
  console.log("Se ejecuto")
  byClass[0].style.fontSize = "50px"
}, 5000)
