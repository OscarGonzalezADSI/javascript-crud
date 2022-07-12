class ProductModel extends Product
{
    constructor()
    {
        super();
    }
    
    setProduct(index)
    {
        try{
            const nombre = data.productos[index].nombre;
            const precio = data.productos[index].precio;
            const cantidad = data.productos[index].cantidad;
            this.setNombre(nombre);
            this.setPrecio(precio);
            this.setCantidad(cantidad);
        }catch (e){
            new ReportError(e);
        }
    }
    
    getProduct()
    {
        try{
            const product = {
                "nombre" : this.getNombre(),
                "precio" : this.getPrecio(),
                "cantidad" : this.getCantidad()
            }
            return product;
        }catch (e){
            new ReportError(e);
        }
    }
    
    productCount()
    {
        try{
            return data.productos.length;
        }catch (e){
            new ReportError(e);
        }
    }
    
    addProduct(producto)
    {
        try{
            return data.productos.push(producto);
        }catch (e){
            new ReportError(e);
        }
    }
    
    updateProduct(index, producto)
    {
        try{
            return data.productos[index] = producto;
        }catch (e){
            new ReportError(e);
        }
    }
    
    deleteProduct(index)
    {
        try{
            return data.productos.splice(index, 1);
        }catch (e){
            new ReportError(e);
        }
    }
    
}
