const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const session = require("express-session");

const router = require("./routes/index");
//const middleware = require("./middleware/index");
const auths = require("./auths/index");
const frontend = require("./frontend");
const swagger = require("./swagger/docs");

app.use(cookieParser());
app.use(
  session({
    secret: "Erdodo",
  })
);

app.use(express.json()); //requestte json veri alsın
app.use(express.urlencoded()); //requestte form data alsın

//kimlik doğrulama
app.use("/auths", auths);

//swagger
app.use("/swagger", swagger);

//tüm isteklerde çalışacak middleware tanımlaması
//-> app.use(middleware);

//istekler
app.use("/api/v1/", router);
app.use("/", frontend);

app.listen(3000, () => {
  console.log("express başlatildi");
});
