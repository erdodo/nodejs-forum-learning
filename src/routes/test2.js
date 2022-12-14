const { Router } = require("express");
const router = Router();
const db = require("../db");

router.put("/:id", (req, res) => {
  console.log(req.params.id);
  db.set("user.config." + req.params.id, req.body);
  res.send(db.all());
});

module.exports = router;
