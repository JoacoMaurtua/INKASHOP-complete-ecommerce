const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
      type:String,
      required:[true,'Este campo es obligatorio']
    },

    email:{
      type:String,
      required:[true,'Este campo es obligatorio'],
      unique:true
    },

    password:{
      type:String,
      required:[true,'Este campo es obligatorio']
    },

    isAdmin:{
      type:Boolean,
      required:[true,'Este campo es obligatorio'],
      default:false
    },


},{timestamps:true});

 const User = mongoose.model('User',userSchema); //el primer argumento va a mongo atlas

 module.exports = User;

