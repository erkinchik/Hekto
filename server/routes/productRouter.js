const Router = require("express");
const router = new Router();
const productController = require("../controllers/productController");

router.get("/", productController.get);
router.post("/", productController.create);
router.get("/:id", productController.getOne);
router.delete("/:id", productController.delete);

module.exports = router;
