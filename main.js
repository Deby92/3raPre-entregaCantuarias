const productosValidos = [
    { nombre: "Juguete para perro", precio: 5.000 },
    { nombre: "Comida para gato 10kl.", precio: 25.000 },
    { nombre: "Collar para perro", precio: 10.000 },
    { nombre: "Snack para perro", precio: 7.000 },
    { nombre: "Rascador para gato", precio: 30.000 },
    { nombre: "Bebedero para gato", precio: 59.990 },
    { nombre: "Comida para pajaros 2kl.", precio: 4.000 },

];

function agregarAlCarrito() {
    while (true) {
        let mensajeProductos = "Productos disponibles:\n";
        for (let i = 0; i < productosValidos.length; i++) {
            mensajeProductos += i + 1 + "." + productosValidos[i].nombre + " - $" + productosValidos[i].precio.toFixed(3) + "\n";
        }
        mensajeProductos += "0. Finalizar la compra";

        let indiceProducto = prompt(mensajeProductos);

        if (indiceProducto === "0") {
            break;
        }

        if (indiceProducto && !isNaN(indiceProducto) && parseInt(indiceProducto) > 0 && parseInt(indiceProducto) <= productosValidos.length) {
            let productoSeleccionado = productosValidos[parseInt(indiceProducto) - 1];

            let cantidad = prompt("Ingrese la cantidad de '" + productoSeleccionado.nombre + "' que desea agregar:");

            if (cantidad && !isNaN(cantidad) && parseInt(cantidad) > 0) {
                carrito.push({
                    nombre: productoSeleccionado.nombre,
                    cantidad: parseInt(cantidad),
                    precio: productoSeleccionado.precio
                });

                alert("Producto agregado al carrito");
            } else {
                alert("Ingrese una cantidad válida");
            }
        } else {
            alert("Ingrese un número válido de producto");
        }
    }
}

function mostrarCarrito() {
    if (carrito.length > 0) {
        let mensaje = "Carrito de compras:\n";
        let total = 0;
        for (let i = 0; i < carrito.length; i++) {
            let subtotal = carrito[i].cantidad * carrito[i].precio;
            mensaje += carrito[i].cantidad + "u " + carrito[i].nombre + " - $" + carrito[i].precio + " (subtotal: $" + subtotal.toFixed(3) + ")\n";
            total += subtotal;
        }
        mensaje += "Total: $" + total.toFixed(3);
        alert(mensaje);
    } else {
        alert("El carrito está vacío");
    }
}
const carrito = [];
agregarAlCarrito();
mostrarCarrito();

console.log(agregarAlCarrito);
console.log(mostrarCarrito);