const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const router = require("./routes/index");
const middleware = require("./middleware/index");

app.use(cookieParser());
app.use(express.json()); //requestte json veri alsın
app.use(express.urlencoded()); //requestte form data alsın

//tüm isteklerde çalışacak middleware tanımlaması
app.use(middleware);

app.use("/api/v1/", router);

app.listen(3000, () => {
  console.log("express başlatildi");
});
