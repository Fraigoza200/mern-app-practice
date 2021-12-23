const mongoose = require('mongoose')
// Here we create the structure of the Schema. In this case, we are creating users so we indicate what a user should have.

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String, 
    required: true
  }
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel