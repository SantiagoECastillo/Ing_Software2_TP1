const Tienda = require('./Tienda');
const Producto = require('./Producto');

describe('Pruebas de integración para calcular total del carrito', () => {
    let tienda;

    // Fixture para inicializar la tienda antes de cada prueba

    
    beforeEach(() => {
        tienda = new Tienda();
        tienda.agregarProducto(new Producto('Laptop', 1500, 'Electrónica'));
        tienda.agregarProducto(new Producto('Tablet', 500, 'Electrónica'));
        tienda.agregarProducto(new Producto('Mouse', 50, 'Accesorios'));
    });

    test('Calcular total del carrito sin descuentos', () => {
        const carrito = ['Laptop', 'Tablet', 'Mouse'];
        const total = tienda.calcular_total_carrito(carrito);
        expect(total).toBe(2050); // 1500 + 500 + 50
    });

    test('Calcular total del carrito después de aplicar un descuento', () => {
        tienda.aplicarDescuento('Laptop', 10); // 10% de descuento en pc
        const carrito = ['Laptop', 'Tablet', 'Mouse'];
        const total = tienda.calcular_total_carrito(carrito);
        expect(total).toBe(1900); // (1500 - 150) + 500 + 50
    });

    test('Calcular total del carrito con producto no existente', () => {
        const carrito = ['Laptop', 'Teclado']; //  no existe
        expect(() => tienda.calcular_total_carrito(carrito)).toThrow('El producto con el nombre "Teclado" no fue encontrado');
    });

    test('Calcular total con múltiples descuentos', () => {
        tienda.aplicarDescuento('Laptop', 10); // 10% de descuento
        tienda.aplicarDescuento('Tablet', 20); // 20% de descuento
        const carrito = ['Laptop', 'Tablet', 'Mouse'];
        const total = tienda.calcular_total_carrito(carrito);
        expect(total).toBe(1800); // (1500 - 150) + (500 - 100) + 50
    });
    
    /*
    test('No permitir agregar un producto existente', () => {
        tienda.agregarProducto(new Producto('Laptop', 1500, 'Electrónica'));
        expect(() => tienda.agregarProducto(new Producto('Laptop', 1500, 'Electrónica'))).toThrow('El producto ya existe en el inventario');
    });
    
    */

    /*
    test('No permitir precios negativos en productos', () => {
        expect(() => {
            tienda.agregarProducto(new Producto('Cámara', -100, 'Electrónica'));
        }).toThrow('El precio no puede ser negativo');
    });
    */
    
});
