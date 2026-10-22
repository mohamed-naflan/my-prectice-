const http=require("http");
const server=http.createServer((req,yes)=>
 {
    resizeBy.writeHead(200,
        {
            "content-type":"text"
        });

        res.end("Hello from.Node.js sever!");
    
 } )
 
 server.listen(3000,()=>
{
     console.log("server running at http://localhost:3000");

});
