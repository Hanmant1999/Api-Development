const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");

const users = require("../models/users");


router.post("/register",async (req,res)=>{
    const body = req.body();
    const dbUser = await users.create(body);
    



})



module.exports = users;