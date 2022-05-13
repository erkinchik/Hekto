const Router = require("express");
const router = new Router();

const basketController = require("../controllers/basketController");

router.post("/", basketController.add);
router.get("/:id", basketController.get);
// router.get("/:id", productController.getOne);
// router.delete("/:id", productController.delete);

module.exports = router;
