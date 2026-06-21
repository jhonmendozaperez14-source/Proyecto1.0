/*Carrito de JHON*/
function cargarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalElemento = document.getElementById("total");

    if (!lista || !totalElemento) return;

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let total = 0;

    lista.innerHTML = "";

    carrito.forEach((producto, indice) => {
        const item = document.createElement("li");
        item.className = "item-lista-carrito";
        item.innerHTML = `
            <div>
                <strong>${producto.nombre}</strong><br>
                Precio: S/ ${producto.precio}
            </div>
            <button onclick="eliminarProducto(${indice})" class="btn-eliminar-item">Eliminar</button>
        `;
        lista.appendChild(item);
        total += producto.precio;
    });

    totalElemento.textContent = total;
}

function agregar(nombre, precio) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        nombre: nombre,
        precio: parseFloat(precio)
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarCarrito();
}

function eliminarProducto(indice) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(indice, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarCarrito();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    cargarCarrito();
}

document.addEventListener("DOMContentLoaded", cargarCarrito);