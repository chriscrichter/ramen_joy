const router = require('express').Router();
const restaurantController = require('../../controllers/restaurantController'); 

router.route("/yelp")
  .post(restaurantController.searchRestaurants)

module.exports = router; 