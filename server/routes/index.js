const Router = require("express");
const router = new Router();
const productRouter = require("./productRouter");
const brandRouter = require("./brandRouter");
const userRouter = require("./userRouter");
const typeRouter = require("./typeRouter");
const basketRouter = require("./basketRouter");

router.use("/user", userRouter);
router.use("/category", typeRouter);
router.use("/brand", brandRouter);
router.use("/product", productRouter);
router.use("/basket", basketRouter);

module.exports = router;
