const CarritoCompra = require("../index");

describe("pruebas de carrito compra", () => {
    let carrito;
    
    beforeEach(() => {
        carrito = new CarritoCompra();
    })

    it("deberia agregar un producto al carrito", () =>{
        const producto = {nombre: "leche", precio: 10};

        carrito.agregarProducto(producto);

        expect(carrito.productos[0]).toEqual(producto);
    })

    it("Deberia calcular el total de la compra sumando los precios de todos los productos en el carrito", () => {
        const producto1 = {nombre: "leche", precio: 20};
        const producto2 = {nombre: "pan", precio: 10};

        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2)

        const total = carrito.calcularTotal();

       expect(total).toEqual(30);
    })

    it("Deberia aplicar un descuento al total de la compra según el porcentaje especificado", () => {
        const producto1 = {nombre: "leche", precio: 20};
        const producto2 = {nombre: "pan", precio: 10};
        const producto3 = {nombre: "Huevos", precio: 10};

        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        carrito.agregarProducto(producto3);


        const nuevoTotal = carrito.aplicarDescuento(0.5);

        expect(nuevoTotal).toEqual(20);

    })


})





