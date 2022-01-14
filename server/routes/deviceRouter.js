const Router = require("express");
const router = new Router();
const deviceController = require("../controllers/deviceController");

router.get("/");
router.post("/", deviceController.create);
router.put("/:id");

module.exports = router;
