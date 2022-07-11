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
        }catch(error){
            console.error("error ProductModel", error.message);
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
        }catch(error){
            console.error("error ProductModel", error.message);
        }
    }
    
    productCount()
    {
        try{
            return data.productos.length;
        }catch(error){
            console.error("error ProductModel", error.message);
        }
    }
    
    addProduct(producto)
    {
        try{
            return data.productos.push(producto);
        }catch(error){
            console.error("error ProductModel", error.message);
        }
    }
    
    updateProduct(index, producto)
    {
        try{
            return data.productos[index] = producto;
        }catch(error){
            console.error("error ProductModel", error.message);
        }
    }
    
    deleteProduct(index)
    {
        try{
            return data.productos.splice(index, 1);
        }catch(error){
            console.error("error ProductModel", error.message);
        }
    }
    
}
