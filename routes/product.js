const express = require("express");
const {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/product");

const router = express.Router();

router.route("/").post(createProduct);
router.route("/").get(getAllProduct);
router
  .route("/:id")
  .get(getSingleProduct)
  .delete(deleteProduct)
  .patch(updateProduct);

module.exports = router;
