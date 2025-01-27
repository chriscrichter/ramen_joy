const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

const UserSchema = new Schema({
  reciever: {
    type: String, 
    required: true
  },
  sender: {
    type: String, 
    required: true
  },
  messages: {
    type: String, 
    required: true
  }
})

const User = mongoose.model("User", UserSchema); 

module.exports = User; 