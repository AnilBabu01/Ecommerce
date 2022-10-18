const express = require("express");
const { body } = require("express-validator");
const upload = require("../middlewares/upload");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const router = express.Router();

const {
  addshipping,
  deleteshipping,
  getshipping,
  updateshipping,
} = require("../controllers/shippingControler");

router.post(
  "/shiping/new",
  upload.array("silder"),
  isAuthenticatedUser,
  addshipping
);

router.get("/shiping/get", getshipping);

router.delete(
  "/shiping/delete/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteshipping
);

router.put(
  "/shiping/update/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateshipping
);
module.exports = router;
