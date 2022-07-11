class ProductController
{

    constructor()
    {
        try{
            this.model = new ProductModel();
        }catch(error){
            console.error("error ProductController", error.message);
        }
    }
    
    productView(index)
    {
        try{
            const model = this.model;
            model.setProduct(index);
            const response = model.getProduct();
            return response;
        }catch(error){
            console.error("error ProductController", error.message);
        }
    }
    
    productCount()
    {
        try{
            const model = this.model;
            const response = model.productCount();
            return response;
        }catch (error){
            console.error("Error ProductController:", error.message);
        }
    }
    
    addProduct(data)
    {   
        let response = false;
        try{
            const model = this.model;
            model.addProduct(data);
            response = true;
        }catch (error){
            console.error("Error ProductController:", error.message);
        }finally{
            return response;
        }
    }
    
    updateProduct(index, data)
    {
        try{
            const model = this.model;
            model.updateProduct(index, data);
        }catch (error){
            console.error("Error ProductController:", error.message);
        }
    }
    
    confirmDel()
    {
        try{
            const model = this.model;
            const data = model.getProduct();
            return data;
        }catch (error){
            console.error("Error ProductController:", error.message);
        }
    }

    deleteProduct(index)
    {
        try{
            const model = this.model;
            model.deleteProduct(index);
        }catch (error){
            console.error("Error ProductController:", error.message);
        }
    }
	
}
