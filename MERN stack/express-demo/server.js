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




   app.get("/api/students",(req,res)=>
   {
    res.json(
      {
        massege:"students req succses",
        student:[
          {id:103,name:"nappu"},
          {id:102,name:"mohamed"}]
      });
   });
  
   
    let students=[
       {id:1,name:"raja",age:20,course:"SE"},
       {id:2,name:"fathima",age:17,course:"SE"}

    ];

    //GET
    app.get("/students-demo",(req,res)=>
    {
      res.status(200).json(students);
    });

// app.get("/students-demo/:id",(req,res)=>
//     {
//       const id=Number(req.params.id);
//       const student=students.find((s)=> s.id ===id);

//       if(!student){
//         res.status(404).json({
//             message: "Student not found"
//         });
//     } else {
//         res.status(200).json(student);
//     }
//     });
     


    app.get("/students-demo/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find((s) => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

     res.status(200).json(student);
});

   //POST
   app.post("/students-demo",(req,res)=>
   {
       const newstudent=req.body;
       students.push(newstudent);

       res.status(201).json(
        {massege:"students add",
         student:newstudent
        }
       );
      } );

      //put
      app.put("/students-demo/:id",(req,res) =>
    {
      const id=Number(req.params.id);
      const index=student.findIndex((s)=> s.id===id);
       
      if(index===-1);{
         return res.status(404).json(
          {
            massege:"student not found"
          }
         );
      }
      students[index]={id,...req.body};

      res.status(200).json({
        massege:"student replaces",
        student:students[index]
      });
    });
    
      //PATCH
     


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





