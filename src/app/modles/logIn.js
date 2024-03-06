const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logIn = new Schema({
  name:{
      type:String,
      required:true
  },
  password:{
      type:String,
      required:true
  }
});


module.exports = mongoose.model("logIn", logIn);

