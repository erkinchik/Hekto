const Router = require("express");
const router = new Router();
const deviceController = require("../controllers/deviceController");

router.get("/",deviceController.get);
router.post("/", deviceController.create);
router.get("/:id",deviceController.getOne);
router.delete("/:id",deviceController.delete)

module.exports = router;
