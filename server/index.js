const express = require("express");
const router = require('./global.routes')

const app = express();
const PORT =3000


app.use(express.json());

app.use("/api", router);

app.listen(PORT, function () {
  console.log("server running ...");
});
