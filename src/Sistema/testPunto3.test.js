const Tienda = require('./Tienda');

describe('Aplicar descuento usando mock', () => {
    let tienda;
    let mockProducto;

    beforeEach(() => {
        tienda = new Tienda();

        //Creando el mock
        mockProducto = {
            nombre: 'IPhone',
            precio: 15000,
            categoria: 'electronica',
            actualizarPrecio: jest.fn()
        };

        //Agregamos el mock al inventario
        tienda.agregarProducto(mockProducto);
    });

    test('Comprobar el metodo aplicarDescuento', () => {
        tienda.aplicarDescuento('IPhone', 10);
        expect(mockProducto.actualizarPrecio).toHaveBeenCalledWith(13500);
    });

});