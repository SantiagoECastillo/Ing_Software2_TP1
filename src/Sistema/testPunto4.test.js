// test_tienda.js
const Tienda = require('./tienda');
const Producto = require('./producto');

describe('Clase Tienda con fixtures', () => {
    let tienda;

    // Fixture para inicializar la tienda antes de cada prueba
    beforeEach(() => {
        tienda = new Tienda();
        tienda.agregarProducto(new Producto('Laptop', 1500, 'Electrónica'));
        tienda.agregarProducto(new Producto('Tablet', 500, 'Electrónica'));
        tienda.agregarProducto(new Producto('Mouse', 50, 'Accesorios'));
    });

    //Tests de la busqueda
    test('Buscar un producto usando el fixture', () => {
        const producto = tienda.buscarProducto('Laptop');
        expect(producto.nombre).toBe('Laptop');
        expect(producto.precio).toBe(1500);
    });

    test('Buscar un producto no existente usando el fixture', () => {
        //tienda.buscarProducto('Teclado');
        expect(() => tienda.buscarProducto('Teclado')).toThrow('El producto con el nombre "Teclado" no fue encontrado')
    });

    //
    test('Agregar un nuevo producto', () => {
        tienda.agregarProducto(new Producto('Teclado', 100, 'Accesorios'));
        expect(tienda.buscarProducto('Teclado').nombre).toBe('Teclado');
        expect(tienda.inventario.length).toBe(4);
    });
});


/*
- ¿Qué ventajas ve en el uso de fixtures? ¿Qué enfoque estaría aplicando?
    Reutilización de datos: Los fixtures permiten definir un conjunto de datos de prueba que pueden ser reutilizados en múltiples pruebas, 
        evitando tener que crear los mismos objetos repetidamente.
    Configuración y limpieza: Los fixtures facilitan la configuración del entorno de prueba antes de cada prueba y la limpieza después de cada una,
        lo que mejora la mantenibilidad y la independencia de las pruebas.
    Mejora la legibilidad: Al separar la configuración de las pruebas, el código de las pruebas se vuelve más legible y enfocado en los escenarios 
        que se están validando.
    Estamo usando uno de los enfoques mas comunes el "Setup and Teardown"


- Explique los conceptos de Setup y Teardown en testing.
    SETUP: Es la fase de preparacion del entorno de prueba antes de ejecutar cada una. Aqui se crean objetos, se configuran dependecias, se
        estable el estado incial, etc

    TEARTDOWN: Es la fase de limpieza del entorno de prueba despuede de ejecutar cada prueba, aqui se liberan los recursos, se restablece el estado inicial,
        se eliminan objetos temporales

*/
