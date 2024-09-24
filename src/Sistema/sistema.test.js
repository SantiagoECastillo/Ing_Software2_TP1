const Producto = require('./Producto');
const Tienda = require('./Tienda');

describe('Gestion de productos de la tienda', () => {
    let tienda;
    let producto1, producto2;

    beforeEach(() => {
        tienda = new Tienda();
        producto1 = new Producto('Pan', 180, 'Comida');
        producto2 = new Producto('Vino', 600, 'Bebida');
    });

    test('Agregar un producto al inventario', () => {
        tienda.agregarProducto(producto1);
        expect(tienda.inventario.length).toBe(1);
        expect(tienda.inventario[0]).toEqual(producto1);
    });

    test('Buscar un producto por su nombre', () => {
        tienda.agregarProducto(producto1);
        const productoEncontrado = tienda.buscarProducto('Pan');
        expect(productoEncontrado).toEqual(producto1);
    });

    /*
    test('Buscar un producto inexistente', () => {
        const productoEncontrado = tienda.buscarProducto('Jugo');
        expect(productoEncontrado).toBeNull();
    });
    */
    test('Excepcion al buscar producto inexistente', () => {
        expect(() => tienda.buscarProducto('Jugo')).toThrow('El producto con el nombre "Jugo" no fue encontrado');
    });
    
    test('Eliminar un producto', () => {
        tienda.agregarProducto(producto1);
        const productoEliminado = tienda.eliminarProducto('Pan');
        expect(productoEliminado).toBe(true);
        expect(tienda.inventario.length).toBe(0);
    });
    
    /*
    test('Eliminar un producto inexistente', () => {
        const productoEliminado = tienda.eliminarProducto('Jugo');
        expect(productoEliminado).toBe(false);
    });
    */
    test('Eliminar producto inexistente', () => {
        expect(() => {
            tienda.eliminarProducto('Jugo');
        }).toThrow('No se pudo eliminar el producto "Jugo" porque NO FUE ENCONTRADO');
    });

    test('Actualizar precio de un producto', () => {
        producto1.actualizarPrecio(1000);
        expect(producto1.precio).toBe(1000);
    });
    
    test('Lanzar excepcion al actualizar precio negativo', () => {
        expect(() => {
            producto1.actualizarPrecio(-1000);
        }).toThrow('El precio no puede ser negativo');
    });

});