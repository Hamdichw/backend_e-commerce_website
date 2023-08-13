const router = require('express').Router();
const itemroutes = require("./routes/item.routes");

router.get("/", itemroutes);

module.exports = router;
