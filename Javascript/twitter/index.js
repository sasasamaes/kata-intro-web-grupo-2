let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")
let total = document.getElementById("total")
let contadorDeTweets = 0;
let data = {}

form.addEventListener("submit", function(evento){
  evento.preventDefault()
  formValidation()
})

function formValidation () {
  console.log(input.value)
  if(input.value == ""){
    msg.innerHTML = "El campo esta vacio"
    input.style.border = "1px solid red"
  } else {
    msg.innerHTML = ""
    input.style.border = "1px solid black"
    acceptData()
  }
}

function acceptData () {
  data["text"] = input.value
  contadorDeTweets = contadorDeTweets + 1
  total.innerHTML = "Total: "+ contadorDeTweets
  crearTweet()
}

function crearTweet() {
  posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i class="fa-regular fa-pen-to-square"></i>
        <i class="fa-solid fa-trash"></i>
      </span>
    </div>
  `
  // Limpiar input
  input.value = ""
}