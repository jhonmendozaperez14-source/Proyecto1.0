// js/detalles.js

// 1. Base de datos con la información estructurada de los 5 productos para optimizar y no hacer 5 html diferentes.
const baseDeDatos = {
    emma: {
        titulo: "Emma Elite",
        precio: "S/ 1,500.00",
        imagen: "../img/colchon emma elite.webp",
        desc: "Híbrido de alta gama con tecnología AirGrid para una mejor distribución del peso y confort supremo. Se adapta ergonómicamente a cualquier tipo de cuerpo disminuyendo la transferencia de movimiento en la cama.",
        caract: ["Firmeza: Dinámica adaptable", "Material: Células abiertas AirGrid", "Garantía: 10 años de fábrica", "Altura total: 30 centímetros"]
    },
    premium: {
        titulo: "Colchón Línea Premium",
        precio: "S/ 1,200.00",
        imagen: "../img/ColchonPremiun.avif",
        desc: "Nuestro modelo Premium representa la cumbre de la tecnología del descanso. Diseñado meticulosamente combinando resortes encapsulados de manera independiente con capas de espuma viscoelástica de alta densidad.",
        caract: ["Firmeza: Media-Alta (Ideal postura)", "Material: Algodón orgánico antiácaros", "Garantía: 10 años de cobertura total", "Altura total: 32 centímetros"]
    },
    matrimonial: {
        titulo: "Línea Matrimonial",
        precio: "S/ 1,000.00",
        imagen: "../img/matrimonial.webp",
        desc: "El espacio perfecto para compartir un descanso reparador en pareja. Minimiza por completo la transferencia de ondas de movimiento gracias a su amortiguación central balanceada.",
        caract: ["Firmeza: Balanceada Media", "Material: Espuma indeformable de alta resiliencia", "Garantía: 5 años certificados", "Altura total: 28 centímetros"]
    },
    viscoelastica: {
        titulo: "Espuma Viscoelástica",
        precio: "S/ 950.00",
        imagen: "../img/colchones-visco.webp",
        desc: "Se adapta perfectamente a la forma de tu cuerpo reduciendo al mínimo los puntos de presión en hombros y cadera, facilitando una circulación sanguínea óptima mientras duermes.",
        caract: ["Firmeza: Ergonómica Suave", "Material: Memory Foam de última generación", "Garantía: 5 años de fábrica", "Altura total: 26 centímetros"]
    },
    muelles: {
        titulo: "Muelles Ensacados",
        precio: "S/ 750.00",
        imagen: "../img/colchones-muelles.webp",
        desc: "Mayor firmeza, soporte tradicional dinámico y excelente ventilación estructural. El núcleo pocket spring permite el flujo continuo de aire manteniendo el colchón siempre fresco.",
        caract: ["Firmeza: Alta tradicional", "Material: Resortes independientes encapsulados", "Garantía: 5 años de cobertura", "Altura total: 28 centímetros"]
    }
};

// 2. Capturar el parámetro 'id' desde la URL
const parametrosURL = new URLSearchParams(window.location.search);
const idProducto = parametrosURL.get('id');

if (idProducto && baseDeDatos[idProducto]) {

    const prod = baseDeDatos[idProducto];

    const botonComprar = document.querySelector('.btn-ordenar');

    botonComprar.addEventListener('click', function() {
        localStorage.setItem("Producto", prod.titulo);
        localStorage.setItem("Precio", prod.precio);
    });

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
    window.location.href = "modelos.html";
}