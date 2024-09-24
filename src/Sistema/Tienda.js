class Tienda {
    constructor() {
        this.inventario = [];
    }

    agregarProducto(producto){
        this.inventario.push(producto);
    }

    buscarProducto(nombre){
        const producto = this.inventario.find(producto => producto.nombre === nombre);
        if(!producto) {
            throw new Error(`El producto con el nombre "${nombre}" no fue encontrado`);
        }
        return producto;
    }

    eliminarProducto(nombre){
        const index = this.inventario.findIndex(producto => producto.nombre === nombre);
        if(index === -1){
            throw new Error(`No se pudo eliminar el producto "${nombre}" porque NO FUE ENCONTRADO`);
        }
        this.inventario.splice(index, 1);
        return true;
    }

    aplicarDescuento(nombre, porcentaje) {
        const producto = this.buscarProducto(nombre);
        const precioDescuento = producto.precio - (producto.precio * (porcentaje / 100));
        producto.actualizarPrecio(precioDescuento);
    }
}

module.exports = Tienda;