const router = require('express').Router();
const user = require("./user/user.routes");
const auth = require("./authentication/authentication.routes")





router.use("/user", user);
router.use('/auth',auth)
module.exports = router;
