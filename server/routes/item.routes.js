const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/getall", itemController.selectAll);

module.exports = router;
