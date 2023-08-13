const {
    addUserController,
    updateUserController,
    getUserByIdController,
    getAllUserController,
    deleteUserByIdController,
    getUserByEmailAndPasswordController
      } = require("./user.controller");
    
    const router = require("express").Router();
    router.post("/addUser", addUserController);
    router.patch("/updateUser" ,updateUserController);
    router.get("/getUser",getUserByIdController);
    router.get("/getAllUser",getAllUserController);
    router.get("/getUserByEmailAndPassword",getUserByEmailAndPasswordController);
    router.delete("/deleteUserById",deleteUserByIdController)
    module.exports = router;