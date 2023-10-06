const express=require('express');

const {home,createUser,getUsers,updateUsers,deleteUsers}=require("../Controllers/userController.js");


const router=express.Router();

router.get("/",home)
router.post("/createusers",createUser);
router.get("/getusers",getUsers);
router.put("/updateusers:/id",updateUsers);
router.delete("/deleteuser:/id",deleteUsers);

module.exports=router;