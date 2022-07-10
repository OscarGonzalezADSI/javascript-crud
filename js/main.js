const productController = new ProductController();

let indexItem = 0;

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

function openNewProduct()
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

document.addEventListener("DOMContentLoaded", ()=>{
    openNewProduct();
});
