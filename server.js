const express = require("express"); 
const app = express(); 
const path = require("path"); 
const routes = require("./routes"); 

const mongoose = require("mongoose"); 
const PORT = process.env.PORT || 3001; 

const api = require('./routes/api/user')

app.use(express.urlencoded({ extended: true})); 
app.use(express.json()); 

api.use((req, res, next) => {
  console.log('server router has been hit', req.originalUrl);
  next();
});

app.use('/public', express.static('public'));

app.use('/api', api)


app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});



if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build")); 
}

app.use(routes); 

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ramenDB",
  {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
)



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})



