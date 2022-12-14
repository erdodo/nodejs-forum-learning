const { Router } = require("express");
const router = Router();

const test_list = [
  {
    id: 1,
    deger: "süt",
    miktar: 12,
    durum: true,
  },
  {
    id: 2,
    deger: "şeker",
    miktar: 102,
    durum: true,
  },
  {
    id: 3,
    deger: "tuz",
    miktar: 350,
    durum: true,
  },
];

router.get(
  "/",
  (req, res, next) => {
    //istek özelinde middleware tanımlaması
    console.log("ilk burasi calisiyor");
    next(); //devam et
  },
  (req, res, next) => {
    console.log("sonra burasi calisiyor");

    console.log("Cookies: ", req.cookies);

    res.cookie("visited", true, {
      maxAge: 60000,
    });

    //  #swagger.parameters['miktar'] = { description: 'Miktar açıklaması...' }
    /* #swagger.responses[200] = {
                description: 'Başarılı...',
                schema: [{
                  id: 1,
                  deger: "süt",
                  miktar: 12,
                  durum: true,
                },]
        } */

    console.log("Query: " + req.query); //query params (?params=deger)
    const req_query = req.query.miktar;
    if (!isNaN(req_query)) {
      res.send(test_list.filter((e) => e.miktar < req_query));
    } else {
      res.send(test_list);
      next();
    }
  },
  () => {
    console.log("istek tamamlandı");
  }
);

//session
router.get("/session", (req, res) => {
  res.send(req.session);
});

//route params
router.get("/:id", (req, res) => {
  const data = test_list.find((e) => e.id == req.params.id);
  res.send(data);
});

//double route params
router.get("/:id/:name", (req, res) => {
  console.log("Route params: " + req.params);
  res.send(200);
});

router.post("", (req, res, next) => {
  console.log("Request body:" + req.body);

  test_list.push(req.body);
  res.send(test_list);
});

module.exports = router;
