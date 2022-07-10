class ProductView
{
    getProduct()
    {
        const product = this.product;
        const data = {
            "nombre" : document.getElementById("uNombre").value,
            "precio" : document.getElementById("uPrecio").value,
            "cantidad" : document.getElementById("uCantidad").value
        };
        return data;
    }
    
    setProduct(producto)
    {
        document.getElementById("uNombre").value = producto.nombre;
        document.getElementById("uPrecio").value = producto.precio;
        document.getElementById("uCantidad").value = producto.cantidad;
    }
    
    setProductDel(producto)
    {
        document.getElementById("dNombre").value = producto.nombre;
        document.getElementById("dPrecio").value = producto.precio;
        document.getElementById("dCantidad").value = producto.cantidad;
    }
    
    newProduct()
    {
        const product = this.product;
        const data = {
           "nombre" : document.getElementById("nombre").value,
           "precio" : document.getElementById("precio").value,
           "cantidad" : document.getElementById("cantidad").value
        };
        return data;
    }
    
    insertClean()
    {
        document.getElementById("nombre").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("cantidad").value = "";
    }
    
    updateClean()
    {
        document.getElementById("uNombre").value = "";
        document.getElementById("uPrecio").value = "";
        document.getElementById("uCantidad").value = "";
    }
    
    deleteClean()
    {
        document.getElementById("dNombre").value = "";
        document.getElementById("dPrecio").value = "";
        document.getElementById("dCantidad").value = "";
    }
}
