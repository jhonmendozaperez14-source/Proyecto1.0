/*1. BASE DE DATOS DE MODELOS*/
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
    },
    ColchónPremiumComfort:{
        titulo: "Colchón Premium Comfort",
        precioNum: 799,
        imagen: "../img/ColchonPremiun.avif",


    },
     ColchónOrtopedico:{
        titulo: "Colchón Ortopédico",
        precioNum: 599,
        imagen: "../img/matrimonial.webp",


    },
     ColchónMemoryFoam:{
        titulo: "Colchón Memory Foam",
        precioNum: 950,
        imagen: "../img/colchones-visco.webp",


    },
     Colchónmuelles:{
        titulo: "Colchón Muelles",
        precioNum: 999,
        imagen: "../img/colchones-muelles.webp",


    },
     colchonemmaelite:{
        titulo: "Colchón Emma Elite",
        precioNum: 1999,
        imagen: "../img/colchon emma elite.webp",


    },


};


/*2. LÓGICA GLOBAL DE LA BURBUJA DEL MENU*/
function actualizarBurbujaHeader() {
    const burbuja = document.getElementById("contador-carrito-nav");
    if (burbuja) {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        burbuja.textContent = carrito.length;
        burbuja.style.display = carrito.length > 0 ? "inline-block" : "none";
    }
}

/*Notificación elegante*/
function mostrarNotificacionToast(mensaje) {
    let contenedor = document.getElementById("toast-container-global");
    if (!contenedor) {
        contenedor = document.createElement("div");
        contenedor.id = "toast-container-global";
        contenedor.style.position = "fixed";
        contenedor.style.bottom = "20px";
        contenedor.style.right = "20px";
        contenedor.style.zIndex = "10000";
        contenedor.style.display = "flex";
        contenedor.style.flexDirection = "column";
        contenedor.style.gap = "10px";
        document.body.appendChild(contenedor);
    }

    const toast = document.createElement("div");
    toast.innerHTML = `🛒 <strong>${mensaje}</strong>`;
    toast.style.background = "#0b2240";
    toast.style.color = "#ffffff";
    toast.style.padding = "14px 22px";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 4px 15px rgba(0,0,0,0.25)";
    toast.style.fontFamily = "sans-serif";
    toast.style.fontSize = "14px";
    toast.style.minWidth = "250px";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.4s ease";
    toast.style.borderLeft = "5px solid #ff4d4d";

    contenedor.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
    }, 50);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-10px)";
        setTimeout(() => { toast.remove(); }, 400);
    }, 3500);
}

/*Añadir productos al localStorage*/
function agregar(nombre, precio) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push({
        nombre: nombre,
        precio: parseFloat(precio)
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    mostrarNotificacionToast(`¡Agregado!: ${nombre}`);
    actualizarBurbujaHeader();
    
    if (typeof cargarCarrito === "function") {
        cargarCarrito();
    }
}

/*3. VISTA DEL CARRITO INFERIOR (Compatibilidad)*/
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
                Precio: S/ ${producto.precio.toFixed(2)}
            </div>
            <button onclick="eliminarProducto(${indice})" class="btn-eliminar-item">Eliminar</button>
        `;
        lista.appendChild(item);
        total += producto.precio;
    });
    totalElemento.textContent = total.toFixed(2);
}

function eliminarProducto(indice) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(indice, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarCarrito();
    actualizarBurbujaHeader();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    cargarCarrito();
    actualizarBurbujaHeader();
}

/*4. CARGA DINÁMICA DE DETALLES POR URL*/
document.addEventListener("DOMContentLoaded", () => {
    actualizarBurbujaHeader();
    cargarCarrito();

    const parametrosURL = new URLSearchParams(window.location.search);
    const idProducto = parametrosURL.get('id');

    if (idProducto && baseDeDatos[idProducto]) {
        const prod = baseDeDatos[idProducto];

        const botonComprar = document.querySelector('.btn-ordenar');
        if (botonComprar) {
            botonComprar.addEventListener('click', (e) => {
                e.preventDefault();
                let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
                carrito.push({ nombre: prod.titulo, precio: prod.precioNum });
                localStorage.setItem("carrito", JSON.stringify(carrito));
                window.location.href = "centro_pagos.html";
            });
        }

        const botonAgregarCarro = document.getElementById('btn-agregar-carro-detalle');
        if (botonAgregarCarro) {
            const nuevoBoton = botonAgregarCarro.cloneNode(true);
            botonAgregarCarro.parentNode.replaceChild(nuevoBoton, botonAgregarCarro);
            nuevoBoton.addEventListener('click', () => {
                agregar(prod.titulo, prod.precioNum);
            });
        }

        if(document.getElementById('item-titulo')) document.getElementById('item-titulo').textContent = prod.titulo;
        if(document.getElementById('item-precio')) document.getElementById('item-precio').textContent = prod.precio;
        if(document.getElementById('item-descripcion')) document.getElementById('item-descripcion').textContent = prod.desc;
        
        const imgElement = document.getElementById('item-imagen');
        if (imgElement) {
            imgElement.src = prod.imagen;
            imgElement.alt = prod.titulo;
        }

        const ulCaracteristicas = document.getElementById('item-caracteristicas');
        if (ulCaracteristicas) {
            ulCaracteristicas.innerHTML = "";
            prod.caract.forEach(texto => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${texto.split(':')[0]}:</strong>${texto.split(':')[1]}`;
                ulCaracteristicas.appendChild(li);
            });
        }
    }

    const btnVolver = document.getElementById('btn-volver-dinamico');
    if (btnVolver) {
        btnVolver.addEventListener('click', (e) => {
            e.preventDefault();
            if (document.referrer) window.history.back();
            else window.location.href = "2-modelos.html";
        });
    }
});