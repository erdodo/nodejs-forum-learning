const { Router } = require("express");
const router = Router();

const testRouter = require("./test");
const test2Router = require("./test2");

//routers - her zaman çağır
// -> app.use(testRouter);
//routers - /test isteğinde çağır
router.use(
  "/test",
  () => {
    // #swagger.tags = ['test']
    // #swagger.summary = 'Özet...'
    // #swagger.description = 'Açıklama...'
  },
  testRouter
);
router.use(
  "/test2",
  () => {
    // #swagger.tags = ['test2']
  },
  test2Router
);

module.exports = router;
