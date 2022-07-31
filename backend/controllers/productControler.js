const Product = require("../models/product");

//create new product api/product/new

exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};
//get all product api/product/getallproduct
exports.getProducts = async (req, res, next) => {
  const product = await Product.find();

  res.status(201).json({
    status: true,
    product,
  });
};
//get all product api/product/getSingleProduct/:id

exports.getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ status: false, msg: "Product not fund" });
  } else {
    res.status(201).json({
      status: true,
      product,
    });
  }
};

//update product api/product/update/:id


exports.updateProduct = async (req, res, next) => {
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
  };

  //update product api/product/delete/:id

  exports.deleteProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ status: false, msg: "Product not fund" });
    } 
    
    await product.remove();

    res.status(201).json({
        status: true,
        msg:"Product deleted Successfully"
      });

  };