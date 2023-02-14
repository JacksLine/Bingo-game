const express= require("express");
const app = express(); 
const path = require("path");
const port = process.env.PORT||5000;
const static1 = path.join(__dirname,"./BINGO") 
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require("cors")
app.use(cors())
app.use(express.static(static1));



io.on('connection',socket=>{
    console.log(socket.id)

    socket.join("room");
    socket.on("num", num=>{
        const data = {id:socket.id,num:num}
      //  console.log(num,socket.id);
        io.to("room").emit("data",data);
})
})  


 app.get("/",function(req,res){

    
      
    res.sendFile(static1+"/index.html");
});

app.get("/player1",(req,res)=>
{
    res.sendFile(static1+"/bingo.html");
    
})
app.post("/player1",async(req,res)=>
{       
    

    res.sendFile(static1+"/bingo.html");  
})

 app.get("/player2",function(req,res){
      
     res.sendFile(static1+"/bingo.html");
//      
 });
 app.post("/player2",(req,res)=>
{       
    res.sendFile(static1+"/bingo.html");  
})

http.listen(port, function(){
    console.log("Server is up");
})