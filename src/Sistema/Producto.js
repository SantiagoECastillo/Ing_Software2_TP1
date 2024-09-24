class Producto {
    constructor(nombre, precio, categoria){
        
        this.nombre = nombre;

        this.precio = precio;
        
        this.categoria = categoria;
    }

    actualizarPrecio(nuevoPrecio) {
        if (nuevoPrecio < 0) {
            throw new Error("El precio no puede ser negativo");
        }
        this.precio = nuevoPrecio;
    }
}

module.exports = Producto;