var index = 0

while(index < 11){
  console.log(index)
  index+1
}

//
var arreglo = []
var userInput;

while(!(userInput =="")){
  userInput = prompt("Ingrese cualquier caracter")
  arreglo.push(userInput)
}
console.log("Introduciste estos valores: "+arreglo)