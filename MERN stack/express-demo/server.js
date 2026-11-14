
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
app.use(express.urlencoded({extended:true}));


//Tempory student data for EJS pages
 let students=[
        {id:1,name:"vimal",age:23,course:"infomation tecgnology"},
        {id:2,name:"suresh",age:24,course:"software engneeir"},
        {id:3,name:"kumar",age:17,course:"computer scince"}
 ];





//custom middleware
function requestLogger(req, res, next) {
    console.log("Request Method:", req.method);
    console.log("Request URL:", req.url);
    console.log("Request Time:", new Date().toLocaleString());

    next();

}
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
             course:"MERN STACK"
            });
      

        });

       app.get("/student-info",(req,res)=>
       {
        res.render("student-info",
            {
                name:"mohamed",
                age:19,
                course:"MERN STACK"
            }
        );
       }); 


     

 // student list EJS
 app.get("/student-page", (req, res) =>
  {
//     const students=[
//        {id:1,name:"yasir",age:22,course:"MERN"},
//         {id:2,name:"vimal",age:23,course:"MERN"},
//        {id:3,name:"suresh",age:24,course:"MERN"},
//        {id:4,name:"kumar",age:17,course:"MERN"}
//     ];
    res.render("student", { title: "Student List", students: students });
 });



  //about page EJS
  app.get("/about", (req, res) => {

    res.render("about",{
        title:"About Us"
    });
  });



   //contect page RJS
 app.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Contact"
    });
});


//Rgister page
app.get("/register",(req,res)=>
{
    res.render("register",
        {
            title:"Student Registration form"
        });
});

//Handle register

 app.post("/register",(req,res)=>
 {
    const {name,age,course}=req.body;



    //server side validation
    const parsedAge=Number(age);


    if(
        typeof name !=="string" ||name.trim()==="" ||
        !Number.isInteger(parsedAge) || parsedAge<=0 ||
        typeof course !=="string" || !["SE", "IT", "CS"].includes(course)

    )
    {
        return res.status(400).send("Invalid student information");
    }
         
      const newstudent={
        id:Math.max(0,...students.map(s=>s.id))+1,
        name:name.trim(),
        age:age.parsedAge,
        course:course
      };

      students.push(newstudent);

      res.redirect("/student-page");
 });








app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});