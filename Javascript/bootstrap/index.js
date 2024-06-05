var cuentas = [
  { nombre: "Mali", saldo: 200, password: "mali123" },
  { nombre: "Gera", saldo: 290, password: "gera123" },
  { nombre: "Maui", saldo: 67, password: "maui123" }
];

let form = document.getElementById("form")
let usuario = document.getElementById("usuario")
let password = document.getElementById("password")

form.addEventListener("submit", function(event){
  event.preventDefault()
  formValidation()
})

function formValidation() {
  if(usuario.value === cuentas[0].nombre && password.value === cuentas[0].password){
    console.log("El usuairo es mali!")
  } else if( usuario.value === cuentas[1].nombre && password.value === cuentas[1].password){
    console.log("El usuario es gera!")
  } else if ( usuario.value === cuentas[2].nombre && password.value === cuentas[2].password){
    console.log("El usuario es Maui!")
  } else {
    console.log("El usuario no existe en la base de datos")
  }
}
