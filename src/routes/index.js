const { Router } = require("express");
const router = Router();

const testRouter = require("./test");
const test2Router = require("./test2");

//routers - her zaman çağır
// -> app.use(testRouter);
//routers - /test isteğinde çağır
router.use("/test", testRouter);
router.use("/test2", test2Router);

module.exports = router;
