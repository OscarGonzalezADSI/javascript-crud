class ProductController
{

    constructor()
    {
        this.model = new ProductModel();
        this.view = new ProductView();
    }
    
    productView(index)
    {
        const model = this.model;
        const view = this.view;
        model.setProduct(index);
        view.setProduct(model.getProduct());
    }
    
    productCount()
    {
        return this.model.productCount();
    }
    
    addProduct()
    {   
        const producto = this.view.newProduct();
        this.model.addProduct(producto);
        this.view.insertClean();
    }
    
    updateProduct(index)
    {   
        const producto = this.view.getProduct();
        this.model.updateProduct(index, producto);
    }
    
    confirmDel()
    {   
        const model = this.model;
        this.view.setProductDel(model.getProduct());
        this.view.updateClean();
    }
    
	deleteProduct(index)
	{   
	    const model = this.model;
     	this.model.deleteProduct(index);
     	this.view.deleteClean();
	}
	
}
