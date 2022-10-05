const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
} = require("../controllers/productControler");

// router.route('/admin/product/create').post(newProduct)

router.post(
  "/admin/product/create",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  newProduct
);
router
  .route("/admin/product/updateProduct/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles, deleteProduct);
router
  .route("/admin/product/deleteProduct/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/product/getAllProduct").get(getProducts);

router.route("/admin/getallproduct").get(getAdminProducts);

router.route("/product/getSingleProduct/:id").get(getSingleProduct);

router.route("/product/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/admin/product/reviews/:id")
  .get(isAuthenticatedUser, getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);
module.exports = router;
