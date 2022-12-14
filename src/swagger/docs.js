const { Router } = require("express");
const router = Router();

var swaggerUi = require("swagger-ui-express");

swaggerDocument = require("./output.json");
router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
