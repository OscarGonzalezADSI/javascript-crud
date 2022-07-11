class ProductRoutes
{

    constructor()
    {
        try{
            this.controller = new ProductController();
            this.view = new ProductView();
        }catch (error){
            console.error("Error ProductRoutes:", error.message);
        }
    }
    
    productView(index)
    {
        try{
            const view = this.view;
            const controller = this.controller;
            const response = controller.productView(index);
            view.setProduct(response);
            view.openUpdateProduct();
        }catch (error){
            console.error("Error ProductRoutes:", error.message);
        }
    }
    
    addProduct()
    {
        try{
            const view = this.view;
            const controller = this.controller;
            const data = view.newProduct();
            const response = controller.addProduct(data);
            if(response === true){
                this.#addProductView();
            }
        }catch (error){
            console.error("Error ProductRoutes:", error.message);
        }
    }
    
    #addProductView()
    {
        try{
            const view = this.view;
            const controller = this.controller;
            const indexItem = controller.productCount()-1;
            this.productView(indexItem);
            view.insertClean();
            view.openUpdateProduct();
        }catch (error){
            console.error("Error ProductRoutes:", error.message);
        }
    }
    
    updateProduct(index)
    {
        try{
            const view = this.view;
            const controller = this.controller;
            const data = view.getProduct();
            controller.updateProduct(index, data);
        }catch (error){
            console.error("Error ProductRoutes:", error.message);
        }
    }
    
    confirmDel()
    {
        try{
            const view = this.view;
            const controller = this.controller;
            const data = controller.confirmDel();
            view.setProductDel(data);
            view.updateClean();
            view.openDeleteProduct();
        }catch (error){
            console.error("Error ProductRoutes:", error.message);
        }
    }

    deleteProduct(index)
    {
        try{
            const view = this.view;
            const controller = this.controller;
            controller.deleteProduct(index);
            view.deleteClean();
            view.openUpdateProduct();
            this.anterior();
        }catch (error){
            console.error("Error ProductRoutes:", error.message);
        }
    }
	
	inputsClean()
	{
	    try{
	        const view = this.view;
	        view.insertClean();
	        view.updateClean();
	        view.deleteClean();
	    }catch (error){
	        console.error("Error ProductRoutes:", error.message);
	    }
	}
	
	anterior()
	{
        try{
            const view = this.view;
            const controller = this.controller;
            const itemsCount = controller.productCount();
            view.anterior(itemsCount);
        }catch (error){
            console.error("Error ProductRoutes:", error.message);
        }
	}
	
	siguiente()
	{
	    try{
	        const view = this.view;
	        const controller = this.controller;
	        const itemsCount = controller.productCount();
	        view.siguiente(itemsCount);
	    }catch (error){
	        console.error("Error ProductRoutes:", error.message);
	    }
	}
	
	nuevo()
	{
	    try{
	        const view = this.view;
	        view.nuevo();
	    }catch (error){
	        console.error("Error ProductRoutes:", error.message);
	    }
	}
	
}
