var index = 0

while(index < 11){
  console.log(index)
  index+1
}

//while
var arreglo = []
var userInput;

while(!(userInput == ""))
{
  userInput = prompt("Ingrese cualquier caracter")
  arreglo.push(userInput)
}
console.log("Introduciste estos valores: "+arreglo)


// Do while
var contador = 0
do{
  contador++
  console.log('Conteo:'+contador)
} while(contador < 10)

//for
var contador = 0
for (var index = 0; index < 10; index++){
  if(index % 2 ==0) {
    contador = contador + 1
    console.log(index + " es multiplo de 2")
  }
}