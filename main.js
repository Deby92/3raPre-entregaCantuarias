const productosValidos = [
    { nombre: "Juguete para perro", precio: 5.000 },
    { nombre: "Comida para gato 10kl.", precio: 25.000 },
    { nombre: "Collar para perro", precio: 10.000 },
    { nombre: "Snack para perro", precio: 7.000 },
    { nombre: "Rascador para gato", precio: 30.000 },
    { nombre: "Bebedero para gato", precio: 59.990 },
    { nombre: "Comida para pajaros 2kl.", precio: 4.000 },
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');
const quantityInput = document.getElementById('quantity');
const outputDiv = document.getElementById('output');


productosValidos.forEach((producto, index) => {
    const option = document.createElement('option');
    option.value = index + 1;
    option.textContent = `${producto.nombre} - $${producto.precio.toFixed(3)}`;
    productList.appendChild(option);
});

function agregarAlCarrito() {
    const indiceProducto = productList.value;

    if (indiceProducto === "0") {
        return;
    }

    const productoSeleccionado = productosValidos[parseInt(indiceProducto) - 1];
    const cantidad = parseInt(quantityInput.value);

    if (cantidad > 0) {
        carrito.push({
            nombre: productoSeleccionado.nombre,
            cantidad: cantidad,
            precio: productoSeleccionado.precio
        });

        localStorage.setItem('carrito', JSON.stringify(carrito));

        const mensaje = `Producto '${productoSeleccionado.nombre}' agregado al carrito`;
        outputDiv.innerHTML = `<p>${mensaje}</p>`;
    } else {
        const mensaje = 'Ingrese una cantidad válida';
        outputDiv.innerHTML = `<p>${mensaje}</p>`;
    }
}

function mostrarCarrito() {
    if (carrito.length > 0) {
        let mensaje = "<h1>Carrito de compras:</h1> <br>\n";
        let total = 0;
        carrito.forEach(item => {
            const subtotal = item.cantidad * item.precio;
            mensaje += `${item.cantidad}u ${item.nombre} - $${item.precio.toFixed(3)}<br> (subtotal: $${subtotal.toFixed(3)})<br>\n`;
            total += subtotal;
        });
        mensaje += `<br>Total: $${total.toFixed(3)}`;

        outputDiv.innerHTML = `<p>${mensaje}</p>`;
    } else {
        const mensaje = 'El carrito está vacío';
        outputDiv.innerHTML = `<p>${mensaje}</p>`;
    }
}