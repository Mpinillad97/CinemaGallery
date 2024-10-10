class CarritoCompra {
    constructor(){
        this.productos = []
       }
   
   //agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
   agregarProducto(producto){
       this.productos.push(producto)
   }
   
   //calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
   calcularTotal(){
       let total = 0;
       for (let producto of this.productos){
           total += producto.precio
       }
   
       return total;
   }
   
   //aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
   aplicarDescuento(porcentaje){
       if(porcentaje < 0 || porcentaje > 1){
           throw Error('Aplique un porcentaje correcto')
       }
       const total = this.calcularTotal();
   
       let nuevoTotal = total - (total * porcentaje);
   
       return nuevoTotal;
   }
}

module.exports = CarritoCompra;