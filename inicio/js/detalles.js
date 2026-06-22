/*detalles de los modelos */
const baseDeDatos = {
    emma: {
        titulo: "Emma Elite",
        precio: "S/ 2,599.00",
        precioNum: 2599,
        imagen: "../img/colchon emma elite.webp",
        desc: "Híbrido de alta gama con tecnología AirGrid para una mejor distribución del peso y confort supremo. Se adapta ergonómicamente a cualquier tipo de cuerpo disminuyendo la transferencia de movimiento en la cama.",
        caract: ["Firmeza: Dinámica adaptable", "Material: Células abiertas AirGrid", "Garantía: 10 años de fábrica", "Altura total: 30 centímetros"]
    },
    premium: {
        titulo: "Colchón Línea Premium",
        precio: "S/ 1,200.00",
        precioNum: 1200,
        imagen: "../img/ColchonPremiun.avif",
        desc: "Nuestro modelo Premium representa la cumbre de la tecnología del descanso. Diseñado meticulosamente combinando resortes encapsulados de manera independiente con capas de espuma viscoelástica de alta densidad.",
        caract: ["Firmeza: Media-Alta (Ideal postura)", "Material: Algodón orgánico antiácaros", "Garantía: 10 años de cobertura total", "Altura total: 32 centímetros"]
    },
    matrimonial: {
        titulo: "Línea Matrimonial",
        precio: "S/ 1,000.00",
        precioNum: 1000,
        imagen: "../img/matrimonial.webp",
        desc: "El espacio perfecto para compartir un descanso reparador en pareja. Minimiza por completo la transferencia de ondas de movimiento gracias a su amortiguación central balanceada.",
        caract: ["Firmeza: Balanceada Media", "Material: Espuma indeformable de alta resiliencia", "Garantía: 5 años certificados", "Altura total: 28 centímetros"]
    },
    paraiso: {
        titulo: "Paraíso Su Majestad",
        precio: "S/ 1,899.00",
        precioNum: 1899,
        imagen: "../img/colchon-paraiso-mta.webp",
        desc: "Colchón premium con sistema de resortes Pocket que brindan total independencia de movimiento. Su acolchado de espuma Zebra de alta densidad garantiza un soporte ergonómico ideal para cuidar la postura.",
        caract: ["Firmeza: Intermedia - Firme", "Material: Resortes Pocket y Espuma Zebra", "Garantía: 12 años de fábrica", "Altura total: 32 centímetros"]
    },
    rosen: {
        titulo: "Rosen Ergo T",
        precio: "S/ 1,459.00",
        precioNum: 1459,
        imagen: "../img/colchon-rose-ergo.webp",
        desc: "Excelente equilibrio entre confort y soporte gracias a su parrilla de resortes Bonnell templados. Cuenta con una cubierta de tela tejido de punto acochada que es súper suave al tacto y mejora la ventilación.",
        caract: ["Firmeza: Intermedia", "Material: Resortes Bonnell y Tela Tejido de Punto", "Garantía: 10 años de fábrica", "Altura total: 28 centímetros"]
    },
    viscoelastica: {
        titulo: "Espuma Viscoelástica",
        precio: "S/ 950.00",
        precioNum: 950,
        imagen: "../img/colchones-visco.webp",
        desc: "Se adapta perfectamente a la forma de tu cuerpo reduciendo al mínimo los puntos de presión en hombros y cadera, facilitando una circulación sanguínea óptima mientras duermes.",
        caract: ["Firmeza: Ergonómica Suave", "Material: Memory Foam de última generación", "Garantía: 5 años de fábrica", "Altura total: 26 centímetros"]
    },
    muelles: {
        titulo: "Muelles Ensacados",
        precio: "S/ 750.00",
        precioNum: 750,
        imagen: "../img/colchones-muelles.webp",
        desc: "Mayor firmeza, soporte tradicional dinámico y excelente ventilación estructural. El núcleo pocket spring permite el flujo continuo de aire manteniendo el colchón siempre fresco.",
        caract: ["Firmeza: Alta tradicional", "Material: Resortes independientes encapsulados", "Garantía: 5 años de cobertura", "Altura total: 28 centímetros"]
    }
};

/*para controlar la vista del carrito abajo */
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

const parametrosURL = new URLSearchParams(window.location.search);
const idProducto = parametrosURL.get('id');

if (idProducto && baseDeDatos[idProducto]) {
    const prod = baseDeDatos[idProducto];

    /*Botón de Comprar Ahora*/
    const botonComprar = document.querySelector('.btn-ordenar');
    if (botonComprar) {
        botonComprar.addEventListener('click', function(e) {
            e.preventDefault();
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            carrito.push({
                nombre: prod.titulo,
                precio: prod.precioNum
            });
            localStorage.setItem("carrito", JSON.stringify(carrito));
            window.location.href = "centro_pagos.html";
        });
    }

    /*para ver lo agregado */
    const botonAgregarCarro = document.getElementById('btn-agregar-carro-detalle');
    if (botonAgregarCarro) {
        botonAgregarCarro.addEventListener('click', function() {
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            carrito.push({
                nombre: prod.titulo,
                precio: prod.precioNum
            });
            localStorage.setItem("carrito", JSON.stringify(carrito));
            
            /*Carga el cambio en el recuadro inferior*/
            cargarCarrito();
        });
    }

    document.getElementById('item-titulo').textContent = prod.titulo;
    document.getElementById('item-precio').textContent = prod.precio;
    document.getElementById('item-descripcion').textContent = prod.desc;
    document.getElementById('item-imagen').src = prod.imagen;
    document.getElementById('item-imagen').alt = prod.titulo;

    const ulCaracteristicas = document.getElementById('item-caracteristicas');
    ulCaracteristicas.innerHTML = "";

    prod.caract.forEach(texto => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${texto.split(':')[0]}:</strong>${texto.split(':')[1]}`;
        ulCaracteristicas.appendChild(li);
    });

} else {
    window.location.href = "2-modelos.html";
}

const btnVolver = document.getElementById('btn-volver-dinamico');
if (btnVolver) {
    if (document.referrer.includes("1-inicio.html") || document.referrer.includes("inicio.html")) {
        btnVolver.textContent = "← Volver al Inicio";
    } else {
        btnVolver.textContent = "← Volver al catálogo";
    }

    btnVolver.addEventListener('click', function(e) {
        e.preventDefault();
        if (document.referrer) {
            window.history.back();
        } else {
            window.location.href = "2-modelos.html";
        }
    });
}

/*Iniciar la carga de los productos del carrito al abrir la ventana*/
document.addEventListener("DOMContentLoaded", cargarCarrito);