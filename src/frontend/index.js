const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send(`
        <h1>Merhaba 23423423</h1>
    `);
});
router.get("/selam", (req, res) => {
  res.send(`
        <h1>selam</h1>
    `);
});

module.exports = router;
