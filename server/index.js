const express = require("express");
const router = require('./global.routes')

const app = express();
const PORT =3003


app.use(express.json());

app.use("/api", router);
app.get("/", (req, res) => {
  res.send({ msg: "E-commerce web server working.." });
});

app.listen(PORT, function () {
  console.log("server running ...");
});
