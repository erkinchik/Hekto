const Router = require("express");
const router = new Router();

const basketController = require("../controllers/basketController");

router.post("/", basketController.add);
// router.post("/", productController.create);
// router.get("/:id", productController.getOne);
// router.delete("/:id", productController.delete);

module.exports = router;
