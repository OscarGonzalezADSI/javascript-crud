class ProductController
{

    constructor()
    {
        try{
            this.model = new ProductModel();
        }catch (e){
            new ReportError(e);
        }
    }
    
    productView(index)
    {
        try{
            const model = this.model;
            model.setProduct(index);
            const response = model.getProduct();
            return response;
        }catch (e){
            new ReportError(e);
        }
    }
    
    productCount()
    {
        try{
            const model = this.model;
            const response = model.productCount();
            return response;
        }catch (e){
            new ReportError(e);
        }
    }
    
    addProduct(data)
    {   
        let response = false;
        try{
            const model = this.model;
            model.addProduct(data);
            response = true;
        }catch (e){
            new ReportError(e);
        }finally{
            return response;
        }
    }
    
    updateProduct(index, data)
    {
        try{
            const model = this.model;
            model.updateProduct(index, data);
        }catch (e){
            new ReportError(e);
        }
    }
    
    confirmDel()
    {
        try{
            const model = this.model;
            const data = model.getProduct();
            return data;
        }catch (e){
            new ReportError(e);
        }
    }

    deleteProduct(index)
    {
        try{
            const model = this.model;
            model.deleteProduct(index);
        }catch (e){
            new ReportError(e);
        }
    }
	
}
