const { Router } = require("express");
const router = Router();

const testRouter = require("./test");

//routers - her zaman çağır
// -> app.use(testRouter);
//routers - /test isteğinde çağır
router.use("/test", testRouter);

module.exports = router;
