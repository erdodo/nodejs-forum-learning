const express = require("express");
const app = express();
const path = require("path");

const cookieParser = require("cookie-parser");
const session = require("express-session");

const router = require("./routes/index");
//const middleware = require("./middleware/index");
const auths = require("./auths/index");

const swagger = require("./swagger/docs");

app.use(cookieParser());
app.use(
  session({
    secret: "Erdodo",
  })
);

app.use(express.static("../public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "../public") });
});

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

app.listen(3000, () => {
  console.log("express başlatildi");
});

module.exports = app;
