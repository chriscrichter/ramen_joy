const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

const UserSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  email: {
    type: String, 
    required: true
  },
  password: {
    type: String, 
    required: true
  },
  login: {
    type: Boolean,
    default: false
  },
  friends: [
  this
  ],
  messages:{
    type: Array
  },
  image: {
    type: String,
    default: "https://3q87le1gsko01ibim33e4wib-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/Screen-Shot-2016-12-12-at-4.10.16-PM.png"
  }
})

const User = mongoose.model("User", UserSchema); 

module.exports = User;