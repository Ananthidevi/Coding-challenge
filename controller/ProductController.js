const productModel = require ("../model/Product");

//get all api
const getallProducts = (req,res)=>{
    res.status(200).json(productModel);

}

//get by id
const getproductbyId = (req,res)=>{
    const id = parseInt(req.params.id);  //string to integer - parseInt

    const product = productModel.find(existingProduct => existingProduct.id===id)

    if(product){
        res.status(200).json(product);

    }else{
        res.status(404).json({message:"Product Not Found"});
    }

}

//post api
const createProduct = (req,res)=>{
    const{title,price} =req.body;
   try{
     if(!title || !price){ //both are must
        return res.status(400).json({message:"Both fields are requried "});
}

const newProduct = {
           // if product model has some length value ? - id should be auto incremented
        // else : - assign new product id as 1
        id: productModel.length ? productModel[productModel.length - 1].id + 1 : 1,
        title,
        price
    }
    productModel.push(newProduct);//new array
    res.status(201).json(newProduct);
   }catch(err){
    console.log(err.message);
    
   }
}


module.exports = {getallProducts,getproductbyId, createProduct};
