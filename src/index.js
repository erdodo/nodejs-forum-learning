const express = require("express");
const app = express();

app.use(express.json()); //requestte json veri alsın
app.use(express.urlencoded()); //requestte form data alsın

//tüm istekler özelinde middleware tanımlaması
app.use((req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
});

app.listen(3000, () => {
  console.log("express başlatıldı");
});

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

app.get(
  "/test",
  (req, res, next) => {
    //istek özelinde middleware tanımlaması
    console.log("ilk burasi calisiyor");
    next(); //devam et
  },
  (req, res, next) => {
    console.log("sonra burasi calisiyor");
    res.send(test_list);
    next();
  },
  () => {
    console.log("istek tamamlandı");
  }
);
//route params
app.get("/test/:id", (req, res) => {
  const data = test_list.find((e) => e.id == req.params.id);
  res.send(data);
});
//double route params
app.get("/test/:id/:name", (req, res) => {
  console.log(req.params);
  res.send(200);
});

app.post("/test", (req, res, next) => {
  console.log(req.body);

  test_list.push(req.body);
  res.send(test_list);
});
