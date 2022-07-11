class ProductView
{
    getProduct()
    {
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
    
    openUpdateProduct()
    {
        document.getElementById("newProduct").style.display = "none";
        document.getElementById("updateProduct").style.display = "block";
        document.getElementById("deleteProduct").style.display = "none";
    }
    
    openDeleteProduct()
    {
        document.getElementById("newProduct").style.display = "none";
        document.getElementById("updateProduct").style.display = "none";
        document.getElementById("deleteProduct").style.display = "block";
    }
    
    anterior(itemsCount)
    {
        if(indexItem > 0)
        {
            indexItem -= 1;
            productRoutes.productView(indexItem);
        }else{
            indexItem = itemsCount-1;
            productRoutes.productView(indexItem);
        }
    }
    
    siguiente(itemsCount)
    {
        if(indexItem+1 < itemsCount)
        {
            indexItem += 1;
            productRoutes.productView(indexItem);
        }else{
            indexItem = 0;
            productRoutes.productView(0);
        }
    }
    
    nuevo()
    {
        document.getElementById("newProduct").style.display = "block";
        document.getElementById("updateProduct").style.display = "none";
        document.getElementById("deleteProduct").style.display = "none";
    }
}
