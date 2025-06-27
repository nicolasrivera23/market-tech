//Creamos un listado de productos (objetos)
//simulando que vienen de parte del backend

//1. Creamos la variable productos en un array/matriz y dentro declaramos los objetos

let productos = [
  {
    "id" : 1111,
    "image" : "https://picsum.photos/id/327/275/200",
    "name" : "CyberSiberia",
    "price" : 50.99,
    "description" : "El monitor ofrece una excelente resolución de imágen y calidad"
  },
  {
    "id" : 2222,
    "image" : "https://picsum.photos/id/288/275/200",
    "name" : "Estocolmo",
    "price" : 32.99,
    "description" : "No te faltarán museos, galerías de arte, centros de exposiciones y eventos de todo tipo en los que disfrutar de buenas obras de arte y conocer más a fondo la historia de este país."
  },
  {
    "id" : 3333,
    "image" : "https://picsum.photos/id/219/275/200",
    "name" : "Desierto del Kalahari",
    "price" : 102.99,
    "description" : "Una linda y peligrosa excursión (seguro de vida incluído en el precio)"
  },
  {
    "id" : 4444,
    "image" : "../media/img/hogwarts.jpg",
    "name" : "El Castillo de Hogwarts",
    "price" : 50.99,
    "description" : "Visite la escuela de magos más prestigiosa de la tierra"
  }
];


//2. Mostramos estos productos en nuestra página o sección
// Vamos a manipular el DOM , creando nuevos elementos para
// mostrar los datos de cada producto

//creamos una variable para seleccionar la section productos del html
let productosContainer = document.getElementById('productos');

//creo un contenedor individual para cada producto
let contenedorProducto = document.createElement('div');

//agrego una clase/estilo CSS al contenedor de los productos
contenedorProducto.classList.add('contenedor_producto');

//Le agregamos al documento un Listener que se dispare cuando el evento
// DOMContentLoad finalice , luego dispara una función que va iterando el 
// listado de productos y a los valores que va extrayendo los 
// ubica dentro de una estructura HTML
//Carga de productos

document.addEventListener("DOMContentLoaded", (event) => {
  productos.forEach(producto => {
    contenedorProducto.innerHTML += `
      <div class="card">
      <form id="my_form${producto.id}">
        <div>
          <div id="imagen" name="imagen">
            <img class="imagen" src="${producto.image}"></img>
          </div>
          <div id="nombre" name="nombre">${producto.name}</div>
          <br>
          <div id="precio" name="precio">${producto.price}$</div>
          <br>
          <div id="botonera${producto.id}">
            <button onclick="comprar(${producto.id})" class="button" value="Comprar">Comprar</button>
          </div>
          <div>
            <div id="description${producto.id}" class="description">
              ${producto.description}
            </div>
          </div>
        </div>
      </div>
    `;
    productosContainer.append(contenedorProducto);
  });
});

//Por último agregamos cada estructura HTML(card) a productosContainer(section productos del HTML)