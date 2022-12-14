const { Router } = require("express");
const router = Router();
const db = require("../db");

router.put("/:id", (req, res) => {
  console.log(req.params.id);

  /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Kullanıcı ayarları...',
                schema: {
                    $name: 'Jhon Doe',
                    $age: 29,
                    about: ''
                }
        } */

  db.set("user.config." + req.params.id, req.body);
  res.send(db.all());
});

module.exports = router;
