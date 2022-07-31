const express =require('express')
const router = express.Router();

const {getProducts,newProduct,getSingleProduct,updateProduct,deleteProduct}=require('../controllers/productControler')

router.route('/admin/product/create').post(newProduct)

router.route('/admin/product/updateProduct/:id').put(updateProduct)
router.route('/admin/product/:id').put(updateProduct).delete(deleteProduct)
router.route('/admin/product/deleteProduct/:id').delete(deleteProduct)

router.route('/product/getAllProduct').get(getProducts)

router.route('/product/getSingleProduct/:id').get(getSingleProduct)


module.exports= router;

