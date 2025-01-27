const router = require('express').Router();
const userController = require('../../controllers/userController');

router.get("/users", userController.findAllUsers);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/addFriend", userController.addFriend);
router.get("/friends/:id", userController.findAllFriends); 
router.post("/addMessage", userController.addMessage);
router.post("/logout", userController.logout);

module.exports = router;














// router.put("/logout", User.
// //  async (req, res) => {
// //   const { email } = req.body;
// //   let user= await User.findOneAndUpdate({ email }, { login: false });
// //   user.login = false;
//   // res.json({ msg: "You are logged out.", user})
// })




//  async (req, res) => {
//   console.log('getroute')
//   const allUsers = await User.find({});
//   res.json(allUsers);



// const checkAuth = (req, res, next) => {
  //   const token = req.headers.Authorization.split('Bearer ');
  //   const user = jwt.decode(token, 'secret');
  
  //   if (user.isNotExpired()) {
  //     next();
  //   }
  //   else {
  //     res.status(304).json({
  //       message: 'jwt expired'
  //     });
  //   }
  // }