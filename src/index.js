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
    item: "milk",
    test: 2,
  },
  {
    item: "asdasd",
    test: 325,
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

app.post("/test", (req, res, next) => {
  console.log(req.body);

  test_list.push(req.body);
  res.send(test_list);
});
