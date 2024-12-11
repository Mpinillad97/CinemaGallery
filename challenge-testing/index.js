// Clase que representa un carrito de compras
class CarritoCompra {
    constructor() {
        this.carrito = []; // Inicializa un arreglo vacío para almacenar los productos
    }

    /**
     * Agrega un producto al carrito.
     * @param {Object} producto - Objeto que representa el producto a agregar. 
     * Debe contener, al menos, un atributo `precio`.
     */
    agregarProducto(producto) {
        this.carrito.push(producto); // Añadir el producto al arreglo del carrito
    }

    /**
     * Calcula el precio total de todos los productos añadidos al carrito.
     * @returns {number} - Suma total de los precios de los productos.
     */
    calcularTotal() {
        return this.carrito.reduce((acum, producto) => acum + producto.precio, 0); // Sumar precios de los productos
    }

    /**
     * Aplica un descuento al precio total del carrito.
     * @param {number} descuento - Porcentaje de descuento a aplicar (0-100).
     * @returns {number} - Precio total con el descuento aplicado.
     */
    aplicarDescuento(descuento) {
        const precioTotal = this.calcularTotal(); // Obtener el precio total actual
        return precioTotal - (precioTotal * descuento / 100); // Aplicar el descuento
    }
}

// Exportar la clase para ser utilizada en otros archivos o pruebas
module.exports = {
    CarritoCompra
};