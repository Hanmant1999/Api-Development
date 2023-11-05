const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
name:String,
email:String,
passwaord:String,
role:String
});

users = mongoose.model("Users",userSchema);

module.exports = users;