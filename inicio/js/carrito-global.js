/* 1. FUNCIÓN PRINCIPAL: RENDERIZAR LA PÁGINA INSPIRADO EN TOTTUS*/
function renderizarPaginaCarro() {
    const contenedor = document.getElementById("contenedor-items-lista-carro");
    const cantTit = document.getElementById("cantidad-productos-tit");
    const resumenCant = document.getElementById("resumen-cant-prod");
    const resumenSubtotal = document.getElementById("resumen-subtotal");
    const resumenTotal = document.getElementById("resumen-total-final");

    if (!contenedor) return;

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    let productosAgrupados = {};
    carrito.forEach((prod) => {
        if (prod && prod.nombre) {
            if (productosAgrupados[prod.nombre]) {
                productosAgrupados[prod.nombre].cantidad += 1;
                productosAgrupados[prod.nombre].subtotal += prod.precio;
            } else {
                productosAgrupados[prod.nombre] = {
                    nombre: prod.nombre,
                    precioUnitario: prod.precio,
                    cantidad: 1,
                    subtotal: prod.precio
                };
            }
        }
    });

    contenedor.innerHTML = "";
    let totalDinero = 0;
    let totalUnidades = 0;

    const listaNombres = Object.keys(productosAgrupados);

/*Si el carro está totalmente vacío*/
    if (listaNombres.length === 0) {
        // Detectar si venía de ofertas o de modelos
        let textoVolver = "Ver Modelos Disponibles";
        let destinoVolver = "2-modelos.html";
        
        if (document.referrer.includes("oferta.html")) {
            textoVolver = "Volver a Ofertas 🔥";
            destinoVolver = "oferta.html";
        }

        contenedor.innerHTML = `
            <div style="padding: 40px; text-align: center; color: #999; font-size: 16px;">
                🛒 Tu carro de compras está vacío.<br>
                <a href="${destinoVolver}" style="color: #00b152; text-decoration: underline; display: inline-block; margin-top: 10px; font-weight: bold;">${textoVolver}</a>
            </div>`;
    }

    listaNombres.forEach((nombreKey) => {
        const prod = productosAgrupados[nombreKey];
        totalDinero += prod.subtotal;
        totalUnidades += prod.cantidad;

        /*BÚSQUEDA ROBUSTA INTEGRADA*/
        let rutaImagen = "../img/ColchonPremiun.avif"; 
        
        if (typeof baseDeDatos !== "undefined") {
            const limpiar = (txt) => txt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
            const nombreProdLimpio = limpiar(prod.nombre);

            const match = Object.values(baseDeDatos).find(item => {
                const tituloBDLimpio = limpiar(item.titulo);
                return tituloBDLimpio === nombreProdLimpio || tituloBDLimpio.includes(nombreProdLimpio) || nombreProdLimpio.includes(tituloBDLimpio);
            });

            if (match && match.imagen) {
                rutaImagen = match.imagen;
            }
        }

        const divItem = document.createElement("div");
        divItem.className = "item-carro-tottus";
        divItem.innerHTML = `
            <img src="${rutaImagen}" alt="${prod.nombre}">
            <div class="info-item-carro">
                <h3>${prod.nombre}</h3>
                <p class="medida-item">Garantía Asegurada | Sueño Perfecto</p>
            </div>
            <div class="precio-item-carro">
                <span class="precio-actual-carro">S/ ${prod.subtotal.toFixed(2)}</span>
            </div>
            <div class="controles-cantidad-carro">
                <button class="btn-cant" onclick="modificarCantidad('${prod.nombre}', -1)">-</button>
                <span class="cant-unidades">${prod.cantidad} UN</span>
                <button class="btn-cant" onclick="modificarCantidad('${prod.nombre}', 1)">+</button>
            </div>
            <button class="btn-eliminar-tottus" onclick="eliminarGrupoCompleto('${prod.nombre}')">🗑️</button>
        `;
        contenedor.appendChild(divItem);
    });

    if (cantTit) cantTit.textContent = totalUnidades;
    if (resumenCant) resumenCant.textContent = totalUnidades;
    if (resumenSubtotal) resumenSubtotal.textContent = `S/ ${totalDinero.toFixed(2)}`;
    if (resumenTotal) resumenTotal.textContent = `S/ ${totalDinero.toFixed(2)}`;
    
    if (typeof actualizarBurbujaHeader === "function") {
        actualizarBurbujaHeader();
    }
}

/*2. LOGICA DE CONTROL DE UNIDADES*/
function modificarCantidad(nombreProducto, cambio) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    if (cambio === 1) {
        const encontrado = carrito.find(p => p.nombre === nombreProducto);
        if (encontrado) {
            carrito.push({ nombre: encontrado.nombre, precio: encontrado.precio });
        }
    } else if (cambio === -1) {
        const indice = carrito.map(p => p.nombre).lastIndexOf(nombreProducto);
        if (indice !== -1) {
            carrito.splice(indice, 1);
        }
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarPaginaCarro();
}

function eliminarGrupoCompleto(nombreProducto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito = carrito.filter(p => p.nombre !== nombreProducto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarPaginaCarro();
}

function vaciarCarritoCompleto() {
    localStorage.removeItem("carrito");
    renderizarPaginaCarro();
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarPaginaCarro();
    /*Lógica para el botón Seguir Comprando del resumen*/
    const btnSeguir = document.getElementById("btn-seguir-comprando");
    if (btnSeguir) {
        btnSeguir.addEventListener("click", () => {
            if (document.referrer.includes("oferta.html")) {
                window.location.href = "oferta.html";
            } else {
                window.location.href = "2-modelos.html";
            }
        });
    }
});