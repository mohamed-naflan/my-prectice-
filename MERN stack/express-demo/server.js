
import express from "express";

import morgan from "morgan";

import studentRoutes from "./Routes/studentroute.js";

import errorHandler from "./middleware/errormiddleware.js";

const app = express();

app.set("view engine", "ejs");
 

// Middleware
app.use(express.json());
app.use(morgan("dev")); 
app.use(express.static("public")); // Serve static files from the "public" directory


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
            title:"wellcome page",
             name:"NAFLAN",
             course:"MERN stack"
            });
      

        });

     


 // student list EJS
 app.get("/student-page", (req, res) =>
 {
    const students=[
        {id:1,name:"yasir",age:22,course:"MERN"},
        {id:2,name:"vimal",age:23,course:"MERN"},
        {id:3,name:"suresh",age:24,course:"MERN"},
        {id:4,name:"kumar",age:17,course:"MERN"}
    ];
    res.render("student", { title: "Student List", students: students });
 });



  //about page EJS
  app.get("/about", (req, res) => {

    res.render("about",{
        title:"About Us"
    });
  });



app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});