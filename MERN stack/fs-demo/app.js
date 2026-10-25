//    //File write 
//  const fs=require("fs");
// fs.writeFileSync("student.text","name:mohamed");
// console.log("file created succesfully")


   //file read 
// const fs=require("fs")
// const data=fs.readFileSync("student.text","utf8");
// console.log(data)

//append data
// const fs=require("fs");
// fs.appendFileSync("student.text","\n course:Mern stack")
// console.log("data added succecfull");

//dlt file
//  const fs=require("fs");
//  fs.unlinkSync("student.text");
//  console.log("file dlt succefull");


//synchrouns file oppration 
//  const fs=require("fs");
//  const data=fs.readFileSync("student.text","utf8");

//  console.log(data);
//  console.log("next oparation");

//Asynchrouns
//  const fs=require("fs");
//  fs.readFile("student.text","utf8",(err,data)=>
//  {
//     if(err)
//     {
//         console.log("error reading file");
//         return;
//     }

//     console.log(data);
//  });

//  console.log("next oparation");


const fs =require("fs");
const path =require("path");
const filepath =path.join(__dirname,"student.txt");
const data =fs.readFileSync(filepath,"utf-8");

console.log(data);
