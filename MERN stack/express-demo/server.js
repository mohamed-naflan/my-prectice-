
import express from "express";

import morgan from "morgan";

import studentRoutes from "./Routes/studentroute.js";

import errorHandler from "./middleware/errormiddleware.js";

const app = express();

app.set("view engine", "ejs");
 

// Middleware
app.use(express.json());
app.use(morgan("dev"));   

//custom middleware
const requestLogger=(req, res, next) => 
{
      console.log("Request Method:",req.method);
      console.log("Request URL:",req.url);
      console.log("Request Time:",new Date().toLocaleString());

      next();
      
    };
      app.use(requestLogger);

    


// Student API routes
app.use("/api/students", studentRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Student API");
});


//EJS route
app.get("/wellcome", (req, res) =>
{
    res.render("wellcome",
         {
             name:"vimal",
             course:"MERN stack"
            });
      

        });



app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});