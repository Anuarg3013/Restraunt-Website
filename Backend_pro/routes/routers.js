const express= require("express");// routing is provided by expresss
const router=express.Router();
const { register } = require("../controllers/register");

router.post("/signIn",register);

module.exports=router;