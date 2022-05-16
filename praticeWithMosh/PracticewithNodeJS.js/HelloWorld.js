/**
 * HelloWorld.js
 * @author Henok    
 * @since 2020-05-12    
 * 
 */
console.log("Starting HTTP WEB SERVER HellO oWorld"); 
const http= require("http");
//creat and start an HTTP server
http.createServer(function(req, res){
    res.writeHead(200,{
        "content-Type":"text/html"
    })
   // res.end("<h1> Hello World</h1>");
   const pageContent =`
   <!doctype html>
   <html lang="en">
   <head> 
   <title> My Hello World webpage from node.js</title>
   </head>
   <body>
   <h1> Hello World form Node js version17</h1>
   </body>


   `
   ;
res.end(pageContent);
})

.listen(8080);
