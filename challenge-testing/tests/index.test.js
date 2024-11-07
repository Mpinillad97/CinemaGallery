const { CarritoCompra } = require("../index");

describe("Class CarritoCompra", () => {
    it("La clase CarritoCompra debe existir", () => {
        expect(CarritoCompra).toBeDefined()
        expect(CarritoCompra).toBeInstanceOf(Function)
        expect(typeof CarritoCompra).toBe("function")
    })

    it("La clase CarritoCompra debe poder ser Instanciada", () => {
        const carritoCompra = new CarritoCompra()
        expect(carritoCompra).toBeInstanceOf(CarritoCompra)
    })

    it("La clase CarritoCompra debe tener los siguientes metodos: ", () => {
        expect(CarritoCompra.prototype.constructor).toBeInstanceOf(Function);
        expect(CarritoCompra.prototype.agregarProducto).toBeInstanceOf(Function);
        expect(CarritoCompra.prototype.calcularTotal).toBeInstanceOf(Function);
        expect(CarritoCompra.prototype.aplicarDescuento).toBeInstanceOf(Function);
    })
})

describe("Constructor", () => {
    it("Inicializa el carrito como objeto con la propiedad 'carrito' la cual es un arreglo vacío", () => {
        const nuevoCarrito = new CarritoCompra()
        expect(Array.isArray(nuevoCarrito.carrito)).toBe(true)
        expect(nuevoCarrito.carrito).toEqual([])
        expect(nuevoCarrito.carrito.length).toBe(0)
    })
})

describe("agregarProducto", () => {
    it("Recibe un objeto representando un producto y lo agrega al carrito", () => {
        const nuevoCarrito = new CarritoCompra()
        const producto = {
            nombre: "Producto 1",
            precio: 100
        }

        nuevoCarrito.agregarProducto(producto)
        expect(nuevoCarrito.carrito.length).toBe(1)
        expect(nuevoCarrito.carrito[0]).toEqual(producto)
        expect(nuevoCarrito.carrito[0].nombre).toBe("Producto 1")
    })

    it("Recibe muchos objetos representando productos y los agrega al carrito", () => {
        const nuevoCarrito = new CarritoCompra()
        const productos = [
            {
            nombre: "Producto 1",
            precio: 100
        },
        {
            nombre: "Producto 2",
            precio: 200
        },
        {
            nombre: "Producto 3",
            precio: 300
        },
        {
            nombre: "Producto 4",
            precio: 400
        },
        {
            nombre: "Producto 5",
            precio: 500
        }
        ]

        productos.forEach(producto => nuevoCarrito.agregarProducto(producto))

        expect(nuevoCarrito.carrito.length).toBe(5)
        expect(nuevoCarrito.carrito[4]).toEqual({
            nombre: "Producto 5",
            precio: 500
        })
        expect(nuevoCarrito.carrito[2].nombre).toBe("Producto 3")
    })
})

describe("calcularTotal", () => {
    it("Calcula el total de la compra sumando los precios de todos los productos en el carrito", () => {
        const nuevoCarrito = new CarritoCompra()
        const productos = [
            {
            nombre: "Producto 1",
            precio: 100
        },
        {
            nombre: "Producto 2",
            precio: 200
        },
        {
            nombre: "Producto 3",
            precio: 300
        },
        {
            nombre: "Producto 4",
            precio: 400
        },
        {
            nombre: "Producto 5",
            precio: 500
        }
        ]

        productos.forEach(producto => nuevoCarrito.agregarProducto(producto))

        expect(nuevoCarrito.calcularTotal()).toBe(1500)
    })
})

describe("aplicarDescuento", () => {
    it("Aplica un descuento al total de la compra según el porcentaje específicado", () => {
        const nuevoCarrito = new CarritoCompra()
        const productos = [
            {
            nombre: "Producto 1",
            precio: 100
        },
        {
            nombre: "Producto 2",
            precio: 200
        },
        {
            nombre: "Producto 3",
            precio: 300
        },
        {
            nombre: "Producto 4",
            precio: 400
        },
        {
            nombre: "Producto 5",
            precio: 500
        }
        ]

        productos.forEach(producto => nuevoCarrito.agregarProducto(producto))

        expect(nuevoCarrito.aplicarDescuento(0)).toBe(1500)
        expect(nuevoCarrito.aplicarDescuento(10)).toBe(1350)
        expect(nuevoCarrito.aplicarDescuento(50)).toBe(750)
        expect(nuevoCarrito.aplicarDescuento(100)).toBe(0)
    })
})


