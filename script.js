let carrito = [];
let total = 0;

function agregarCarrito(nombre, precio){

  carrito.push({
    nombre,
    precio
  });

  total += precio;

  mostrarCarrito();
}

function mostrarCarrito(){

  let contenedor =
    document.getElementById("cart-items");

  contenedor.innerHTML = "";

  carrito.forEach(producto => {

    contenedor.innerHTML += `
      <div class="cart-item">
        ${producto.nombre} - ₡${producto.precio}
      </div>
    `;
  });

  document.getElementById("total").innerText =
    "Total: ₡" + total;

  document.getElementById("contador-carrito").innerText =
    carrito.length;
}

function abrirCarrito(){

  document.getElementById("cart-panel")
    .classList.add("active");
}

function cerrarCarrito(){

  document.getElementById("cart-panel")
    .classList.remove("active");
}

function finalizarCompra(){

  if(carrito.length === 0){

    alert("El carrito está vacío");
    return;
  }

  alert("Compra realizada con éxito");

  carrito = [];
  total = 0;

  mostrarCarrito();

  cerrarCarrito();
}