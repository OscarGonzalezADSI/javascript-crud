class ProductModel
{
    constructor(){
        this.product = new Product();
    }
    
    setProduct(index)
    {
        const product = this.product;
        const nombre = data.productos[index].nombre;
        const precio = data.productos[index].precio;
        const cantidad = data.productos[index].cantidad;
        product.setNombre(nombre);
        product.setPrecio(precio);
        product.setCantidad(cantidad);
    }
    
    getProduct()
    {
        const product = {
            "nombre" : this.product.getNombre(),
            "precio" : this.product.getPrecio(),
            "cantidad" : this.product.getCantidad()
        }
        return product;
    }
    
    productCount()
    {
        return data.productos.length;
    }
    
    addProduct(producto)
    {
        data.productos.push(producto);
    }
    
    updateProduct(index, producto)
    {
        data.productos[index] = producto;
    }
    
    deleteProduct(index)
    {
        data.productos.splice(index, 1);
    }
    
}
