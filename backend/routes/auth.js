const express = require("express");
const { body } = require("express-validator");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const router = express.Router();
const multer = require("multer");

const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserProfile,
  updatePassword,
  updateProfile,
  allUsers,
  getUserDetails,
  updateUser,
  deleteUser,
} = require("../controllers/userControler");

var storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "./images");
  },
  filename: function (req, file, cd) {
    cd(null, Date.now() + " " + file.originalname);
  },
});

const upload = multer({ storage });
router.post(
  "/regster",

  upload.single("avatar"),
  registerUser
);

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  loginUser
);

router.get("/logout", logout);

router.post("/password/forgot", forgotPassword);
router.put("/password/reset/:token", resetPassword);
router.put("/password/update", isAuthenticatedUser, updatePassword);
router.put(
  "/updateprofile",
  upload.single("avatar"),
  isAuthenticatedUser,
  updateProfile
);
router.get("/me", isAuthenticatedUser, getUserProfile);
router.get(
  "/admin/users",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  allUsers
);

router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getUserDetails)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUser)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

// router.get('/admin/user/:id',isAuthenticatedUser,authorizeRoles('admin'),getUserDetails)

module.exports = router;
