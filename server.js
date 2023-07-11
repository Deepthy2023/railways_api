const express = require("express");
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



//route for testing
app.get("/",(req,res)=>{
res.json({"meassage":"This is an API for Passenger"});
});

//add more routes
require("./app/routes/passenger.routes")(app);


// start server and port listening
app.listen(8080, () => {
  console.log("App Server is running");
});
