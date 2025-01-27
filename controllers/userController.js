const db = require("../models"); 
const User = require("../models/user");

module.exports = {
  findAllUsers: function (req, res) {
    db.User 
      .find(req.query)
      .then(user => res.json(user))
  },
  findAllFriends: function(req,res){
    console.log(req.params)
    db.User
      .find({_id:req.params.id}, "friends")
      .populate("friends")
      .then(dbModel => res.json(dbModel))
  },
  create: function(req, res){

    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOneAndUpdate:function (req,res) {
    db.User
      .findOneAndUpdate({_id: req.body._id}, {$push: {"friends": req.body.friendId }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addFriend: async (req, res) => {
    console.log('request body for addign friend', req.body); 
    const { _id, friendId } = req.body; 
    console.log(_id); 
    // https://stackoverflow.com/questions/33049707/push-items-into-mongo-array-via-mongoose

    const user = await User.findOneAndUpdate({ _id }, { $push: { friends: friendId } }, { new: true });

    res.json({msg: "Friend Added", user})
  }, 
  addMessage: async(req, res) =>{
    const { idReciever, idSender, receiverName, messageInput} = req.body
    db.User
      .findOneAndUpdate({idReciever}, {$push:{ messages: idSender,receiverName,messageInput }});
      res.json({msg:"added message", user})
  },
  login: async function (req, res) {
    console.log("req", req.body); 
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all fields." });
    }
    let user = await User.findOne({ email })
    if (!user) return res.status(400).json({ msg: "User does not exist." });
    if (user.password!== password) return res.status(400).json({ msg: "Invalid password."});
    user= await User.findOneAndUpdate({ email }, { login: true });
    user.login = true;
    res.json({ msg: "You are logged in.", user});
  },
  logout: async function (req, res) {
    const { email } = req.body;
    let user= await User.findOneAndUpdate({ email }, { login: false });
    user.login = false;
    res.json({ msg: "You are logged out.", user})
  },
  register: async function (req, res) {
   const { name, email, password, image } = req.body;
   console.log('register test');
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields."});
  }
  if (password.length < 5) {
    return res.status(400).json({ msg: "Please enter a password at least 5 characters long."});
  }
  const user = await User.findOne({ email:email })
  if (user) return res.status(400).json({ msg: "User already exists."});
  const newUser = await User.create({
    name,
    email,
    password,
    image
  });
  res.json({ msg: "You are now registered", newUser})
  console.log(newUser)
  },
  // findUserFriends: async(req, res)=>{
  //   const()
  // }
}
