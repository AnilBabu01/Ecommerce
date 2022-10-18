const express = require("express");
const upload = require("../middlewares/upload");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const router = express.Router();

const {
  addrental,
  deleterental,
  updaterental,
  getrentall,
  userrental,
  getsinglerental,
} = require("../controllers/rentalControler");

router.post(
  "/rental/new",
  upload.array("silder"),
  isAuthenticatedUser,
  addrental
);

router.get("/rental/getAll", getrentall);

router.get("/rental/usergetAll", isAuthenticatedUser, userrental);

router.get("/rental/getsinglerental/:id", getsinglerental);

//admin
router.post(
  "/rental/update/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updaterental
);

router.delete(
  "/rental/delete/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleterental
);

module.exports = router;
