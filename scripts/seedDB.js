const mongoose = require("mongoose"); 
const db = require("../models"); 

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ramenDB"
);

const UserSeeds = [
  {
    name: "alex",
    email: "alexu",
    password: "bigBlackBooties"
    
  },
  {
    name:"Juju",
    email: "juju",
    password: "DoerOfHomework"
  },
  {
    name:"Sasha",
    email: "sasha",
    password:"Vodka"
  },
  {
    name:"charlie",
    email: "charlie",
    password:"EggplantSucker"
  },
  {
    name:"LN",
    email: "LN",
    password:"CleanFreak"
  }
];

db.User
  .remove({})
  .then(()=> db.User.collection.insertMany(UserSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted");
    process.exit(0)
  })
  .catch(err =>{
    console.error(err); 
    process.exit(1); 
  })