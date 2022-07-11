const productRoutes = new ProductRoutes();

let indexItem = 0;

document.addEventListener("DOMContentLoaded", ()=>{

    productRoutes.nuevo();
    
    document.getElementById("volver").addEventListener("click", ()=>{
        productRoutes.productView(0);
    });
    
    document.getElementById("limpiar").addEventListener("click", ()=>{
        productRoutes.inputsClean();
    });
    
    document.getElementById("guardar").addEventListener("click", ()=>{
        productRoutes.addProduct();
    });
    
    document.getElementById("nuevo").addEventListener("click", ()=>{
        productRoutes.nuevo();
    });
    
    document.getElementById("modificar").addEventListener("click", ()=>{
        productRoutes.updateProduct(indexItem);
    });
    
    document.getElementById("confirmacion").addEventListener("click", ()=>{
        productRoutes.confirmDel();
    });
    
    document.getElementById("anterior").addEventListener("click", ()=>{
        productRoutes.anterior();
    });
    
    document.getElementById("siguiente").addEventListener("click", ()=>{
        productRoutes.siguiente();
    });
    
    document.getElementById("cancelarElim").addEventListener("click", ()=>{
        productRoutes.productView(indexItem);
    });
    
    document.getElementById("eliminar").addEventListener("click", ()=>{
        productRoutes.deleteProduct(indexItem);
    });
});
