const Product = require("../models/product");
const APIFeatures = require('../utils/apiFeatures')
//create new product api/product/new

exports.newProduct = async (req, res, next) => {
  try {
   
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });

  } catch (error) {
      console.log(error)
  }
 
};
//get all product api/product/getallproduct?keyword=apple
exports.getProducts = async (req, res, next) => {
  try {
    
    const resPerPage= 4;
    const productsCount = await Product.countDocuments();

    const apiFeatures = new APIFeatures(Product.find(),req.query)
      apiFeatures.search()
      apiFeatures.filter()
      apiFeatures.pagination(resPerPage)
      let products = await apiFeatures.query;
   

    res.status(201).json({
      status: true,
      productsCount,
      count:products.length,
      products,
    });

  } catch (error) {
      console.log(error)
  }
 
};
//get single product api/product/getSingleProduct/:id

exports.getSingleProduct = async (req, res, next) => {
  try {
    
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ status: false, msg: "Product not fund" });
    } else {
      res.status(201).json({
        status: true,
        product,
      });
    }

  } catch (error) {
      console.log(error)
  }
 
};

//update product api/product/update/:id



exports.updateProduct = async (req, res, next) => {

  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ status: false, msg: "Product not fund" });
    } else {


     const  reuset = await Product.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
   
        res.status(201).json({
            status: true,
            reuset 
          });
    }


  } catch (error) {
    console.log(error)
  }
    
  };

  //update product api/product/delete/:id

  exports.deleteProduct = async (req, res, next) => {

    try {
      
      let product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ status: false, msg: "Product not fund" });
      } 
      
      await product.remove();
  
      res.status(201).json({
          status: true,
          msg:"Product deleted Successfully"
        });
  

    } catch (error) {
        console.log(error)
    }
   
  };