const express= require('express');
const app= express();
const path = require("path");
app.use(express.static(path.join(__dirname, "src")));    //server css file as static otherwise css won't be seen in index.html when sent through sendFile()
app.use(express.json());
//handling get request for home route
app.get("/",function(req,res){     
  res.sendFile(__dirname+"/src/main.html");
});

app.listen("3000",function(){
	console.log("Server running on port 3000");
});