const listaProductosTienda = [
  {
    id: 1,
    nombre: "Suero de Leche",
    precio: 10,
    cantidad: 10,
    imagen: 'https://via.placeholder.com/200',
    descripcion: "Suero de leche"
  },
  {
    id: 2,
    nombre: "Suero de Almendra",
    precio: 15,
    cantidad: 5,
    imagen: 'https://via.placeholder.com/200',
    descripcion: "Suero de Almendra"
  },
  {
    id: 2,
    nombre: "Suero de Coco",
    precio: 20,
    cantidad: 3,
    imagen: 'https://via.placeholder.com/200',
    descripcion: "Suero de Coco"
  }
]

window.addEventListener("DOMContentLoaded", function () {
  // funciones
  crearHtml()
})
function comprar (nombre,precio) {
  console.log(nombre,precio)
  alert('Hola, gracias por comprar el producto '+nombre+ " por el valor de "+ precio)
}

function crearHtml () {
  const elementroPadre = document.getElementById('listaProductos')
  const productos = listaProductosTienda.forEach(function(producto){
    console.log(producto,"Producto")
    // createElement nos crea u  objeto tipo  nodeList o un elemento html
    const elementoHijo = document.createElement('section')
    // agregarle clases a  elemento
    elementoHijo.classList.add('producto')
    // Escribir en un nodo o mostrarlo en pantalla
    elementoHijo.innerHTML = `
      <img src="${producto.imagen}" alt=""/>
      <h2>${producto.nombre}</h2>
      <h3>Precio: <span> ${producto.precio} </span></h3>
      <p>Cantidad <span>${producto.cantidad}</span></p>
      <p>Descripcion: <span> ${producto.descripcion}</span></p>
      <button onclick="comprar('${producto.nombre}','${producto.precio}')">
        Comprar
      </button>
    `
    elementroPadre.appendChild(elementoHijo)

  })
}