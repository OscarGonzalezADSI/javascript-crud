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
    productController.addProduct();
}

function modificar()
{
    productController.updateProduct(indexItem);
}

function eliminar()
{
    productController.deleteProduct(indexItem);
}

function confirmacion()
{
    productController.confirmDel();
}
