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
router.get("/:name", (req, res) => {
  /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Kullanıcı ayarları...',
                schema: {
                    $name: 'Jhon Doe',
                    $age: 29,
                    about: ''
                }
        } */
  /*  #swagger.parameters['obj2'] = {
                in: 'query',
                description: 'Kullanıcı ayarları...',
                schema: {$name: 'Jhon Doe'}
        } */
  /* #swagger.responses[201] */
  /* #swagger.responses[401] */
  if (login == null) {
    res.send(401);
  } else {
    res.send(200);
  }
});

module.exports = router;
