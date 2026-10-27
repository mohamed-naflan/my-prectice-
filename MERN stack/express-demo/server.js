import express from"express";
const app=express();
app.get("/",(req,res)=>
 {
     res.send("Hello world");
 });

 app.get("/about",(req,res)=>
  {
    res.send("This is the about page");
  });


 app.get("/contect",(req,res)=>
  {
    res.send("contect with us me 123@gmail.com");
  });

 
app.get("/students/:id/courses/:course", (req, res) => {
    res.json({
      studentId: req.params.id,
      courseName: req.params.course
    }
    );
});


  

//  app.get("/search/brand",(req,res)=>
//   {
//     res.json(req.query.keyword,
//       brand:
//     );
//   });



// app.get("/search", (req, res) => {
//     res.json({
//         id: 101,
//         brand: "Nike",
//         coursename: "Full Stack Development",
//         duration: "6 months",
//         status: "Learning"
//     });
// });





  app.listen(3000,()=>
     {
        console.log("server running");
     });





