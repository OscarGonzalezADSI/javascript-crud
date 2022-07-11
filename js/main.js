const productController = new ProductController();

let indexItem = 0;

function nuevo()
{
    document.getElementById("newProduct").style.display = "block";
    document.getElementById("updateProduct").style.display = "none";
    document.getElementById("deleteProduct").style.display = "none";
}

function openUpdateProduct()
{
    document.getElementById("newProduct").style.display = "none";
    document.getElementById("updateProduct").style.display = "block";
    document.getElementById("deleteProduct").style.display = "none";
}

function openDeleteProduct()
{
    document.getElementById("newProduct").style.display = "none";
    document.getElementById("updateProduct").style.display = "none";
    document.getElementById("deleteProduct").style.display = "block";
}

function siguiente()
{
    const itemsCount = productController.productCount();
    if(indexItem+1 < itemsCount)
    {
        indexItem += 1;
        productController.productView(indexItem);
    }else{
        indexItem = 0;
        productController.productView(0);
    }
}

function anterior()
{
    const itemsCount = productController.productCount();
    if(indexItem > 0)
    {
        indexItem -= 1;
        productController.productView(indexItem);
    }else{
        indexItem = itemsCount-1;
        productController.productView(indexItem);
    }
}

function guardar()
{
    const itemsCount = productController.productCount();
    productController.addProduct();
    indexItem = itemsCount;
    productController.productView(indexItem);
    openUpdateProduct();
}

function modificar()
{
    productController.updateProduct(indexItem);
}

function eliminar()
{
    productController.deleteProduct(indexItem);
    openUpdateProduct();
    anterior();
}

function confirmacion()
{
    productController.confirmDel();
    openDeleteProduct();
}

function cancelarEliminacion()
{
    productController.productView(indexItem);
    openUpdateProduct();
}

function volver()
{
    productController.productView(0);
    openUpdateProduct();
}

function limpiar()
{
    productController.cleanImputs();
}

document.addEventListener("DOMContentLoaded", ()=>{
    nuevo();
    document.getElementById("volver").addEventListener("click", volver);
    document.getElementById("limpiar").addEventListener("click", limpiar);
    document.getElementById("guardar").addEventListener("click", guardar);
    document.getElementById("nuevo").addEventListener("click", nuevo);
    document.getElementById("modificar").addEventListener("click", modificar);
    document.getElementById("confirmacion").addEventListener("click", confirmacion);
    document.getElementById("anterior").addEventListener("click", anterior);
    document.getElementById("siguiente").addEventListener("click", siguiente);
    document.getElementById("cancelarElim").addEventListener("click", cancelarEliminacion);
    document.getElementById("eliminar").addEventListener("click", eliminar);
});
