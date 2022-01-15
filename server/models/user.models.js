const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');


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

userSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password) //march de passwords en el login
}

//hashear el password

userSchema.pre('save', async function (next){
  if(!this.isModified('password')){
    next();
  }
  
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)

})


 const User = mongoose.model('User',userSchema); //el primer argumento va a mongo atlas

 module.exports = User;

