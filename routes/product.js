const express = require("express");
const {
  getProducts,
  getOneProduct,
  addProducts,
  deleteProducts,
  editProducts,
} = require("../controlles/product.controller");
const router = express.Router();

const verifyAuth = require("../middlewares/verifyAuth");
const roleValidation = require("../middlewares/roleValidation");

router.get("/get_products", getProducts);
router.get("/get_products/:id", getOneProduct);

router.post(
  "/add_products",
  // verifyAuth,
  // roleValidation(["Admin"]),
  addProducts
);

router.delete(
  "/delete_products/:id",
  // verifyAuth,
  // roleValidation(["Admin"]),
  deleteProducts
);

router.put(
  "/edit_products/:id",
  // verifyAuth,
  // roleValidation(["Admin"]),
  editProducts
);

module.exports = router;
