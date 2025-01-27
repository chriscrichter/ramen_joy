const router = require("express").Router(); 
const userRoutes = require("./user"); 
const restaurantRoutes = require("./restaurant"); 

router.use("/user", userRoutes); 
router.use("/restaurant",restaurantRoutes); 

module.exports = router; 

