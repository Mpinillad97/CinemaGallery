const { CarritoCompra } = require("../index");

// Pruebas para la clase CarritoCompra
describe("Class CarritoCompra", () => {
    it("La clase CarritoCompra debe existir", () => {
        // Verifica que la clase esté definida y sea un constructor válido
        expect(CarritoCompra).toBeDefined();
        expect(CarritoCompra).toBeInstanceOf(Function);
        expect(typeof CarritoCompra).toBe("function");
    });

    it("La clase CarritoCompra debe poder ser Instanciada", () => {
        // Verifica que se puede crear una instancia de CarritoCompra
        const carritoCompra = new CarritoCompra();
        expect(carritoCompra).toBeInstanceOf(CarritoCompra);
    });

    it("La clase CarritoCompra debe tener los siguientes métodos: ", () => {
        // Verifica la existencia de los métodos requeridos
        expect(CarritoCompra.prototype.constructor).toBeInstanceOf(Function);
        expect(CarritoCompra.prototype.agregarProducto).toBeInstanceOf(Function);
        expect(CarritoCompra.prototype.calcularTotal).toBeInstanceOf(Function);
        expect(CarritoCompra.prototype.aplicarDescuento).toBeInstanceOf(Function);
    });
});

// Pruebas para el constructor
describe("Constructor", () => {
    it("Inicializa el carrito como objeto con la propiedad 'carrito' la cual es un arreglo vacío", () => {
        // Verifica que el carrito comienza vacío
        const nuevoCarrito = new CarritoCompra();
        expect(Array.isArray(nuevoCarrito.carrito)).toBe(true);
        expect(nuevoCarrito.carrito).toEqual([]);
        expect(nuevoCarrito.carrito.length).toBe(0);
    });
});

// Pruebas para agregarProducto
describe("agregarProducto", () => {
    it("Recibe un objeto representando un producto y lo agrega al carrito", () => {
        const nuevoCarrito = new CarritoCompra();
        const producto = { nombre: "Producto 1", precio: 100 };

        // Agrega un producto y verifica que esté en el carrito
        nuevoCarrito.agregarProducto(producto);
        expect(nuevoCarrito.carrito.length).toBe(1);
        expect(nuevoCarrito.carrito[0]).toEqual(producto);
        expect(nuevoCarrito.carrito[0].nombre).toBe("Producto 1");
    });

    it("Recibe muchos objetos representando productos y los agrega al carrito", () => {
        const nuevoCarrito = new CarritoCompra();
        const productos = [
            { nombre: "Producto 1", precio: 100 },
            { nombre: "Producto 2", precio: 200 },
            { nombre: "Producto 3", precio: 300 },
            { nombre: "Producto 4", precio: 400 },
            { nombre: "Producto 5", precio: 500 }
        ];

        // Agrega múltiples productos al carrito
        productos.forEach(producto => nuevoCarrito.agregarProducto(producto));

        expect(nuevoCarrito.carrito.length).toBe(5);
        expect(nuevoCarrito.carrito[4]).toEqual({ nombre: "Producto 5", precio: 500 });
        expect(nuevoCarrito.carrito[2].nombre).toBe("Producto 3");
    });
});

// Pruebas para calcularTotal
describe("calcularTotal", () => {
    it("Calcula el total de la compra sumando los precios de todos los productos en el carrito", () => {
        const nuevoCarrito = new CarritoCompra();
        const productos = [
            { nombre: "Producto 1", precio: 100 },
            { nombre: "Producto 2", precio: 200 },
            { nombre: "Producto 3", precio: 300 },
            { nombre: "Producto 4", precio: 400 },
            { nombre: "Producto 5", precio: 500 }
        ];

        productos.forEach(producto => nuevoCarrito.agregarProducto(producto));

        // Verifica que la suma total es correcta
        expect(nuevoCarrito.calcularTotal()).toBe(1500);
    });
});

// Pruebas para aplicarDescuento
describe("aplicarDescuento", () => {
    it("Aplica un descuento al total de la compra según el porcentaje especificado", () => {
        const nuevoCarrito = new CarritoCompra();
        const productos = [
            { nombre: "Producto 1", precio: 100 },
            { nombre: "Producto 2", precio: 200 },
            { nombre: "Producto 3", precio: 300 },
            { nombre: "Producto 4", precio: 400 },
            { nombre: "Producto 5", precio: 500 }
        ];

        productos.forEach(producto => nuevoCarrito.agregarProducto(producto));

        // Verifica los descuentos
        expect(nuevoCarrito.aplicarDescuento(0)).toBe(1500); // Sin descuento
        expect(nuevoCarrito.aplicarDescuento(10)).toBe(1350); // 10% de descuento
        expect(nuevoCarrito.aplicarDescuento(50)).toBe(750); // 50% de descuento
        expect(nuevoCarrito.aplicarDescuento(100)).toBe(0); // 100% de descuento
    });
});