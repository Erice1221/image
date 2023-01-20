const express= require('express');
const app= express();
const path = require("path");
app.use(express.static(path.join(__dirname, "src")));    //server css file as static otherwise css won't be seen in index.html when sent through sendFile()
app.use(express.json());
//handling get request for home route
app.get("/",function(req,res){     
  res.sendFile(__dirname+"/src/main.html");
});


app.post('/getstate', async (req, res) => {
    res.json({color:"rgb(53, 54, 58)"})
	/*
    const Getlight = async () => {
        var requestOptions = { method: "GET", redirect: "follow" };
        return fetch("'https://192.168.1.72/api/-qExy9J0whnEKpmkkpFTrA4EX-UCP8Lc0tzHck43/lights/3", requestOptions)
          .then((response) => response.json())
          .then((result) => {return(result)})
          .catch((error) => {return("error", error)});
      }
          Getlight().then((resl) => {
            console.log(resl)
            if(resl==="on") {
                res.json({color:"yellow"})
            }
            else if(resl==="off"){
                res.json({color:"black"})
            }
            
          })*/
});

app.post('/changelight', async (req, res) => {

	res.json({color:"rgb(252, 238, 167)"})
    /*const Changelight = async () => {
        var requestOptions = { method: "PUT", redirect: "follow" };
        return fetch("'https://192.168.1.72/api/-qExy9J0whnEKpmkkpFTrA4EX-UCP8Lc0tzHck43/lights/3", requestOptions)
          .then((response) => response.json())
          .then((result) => {return(result)})
          .catch((error) => {return("error", error)});
      }
          Changelight().then((resl) => {
            console.log(resl)
            if(resl==="on") {
                res.json({color:"yellow"})
            }
            else if(resl==="off"){
                res.json({color:"black"})
            }
            
          })*/
});
app.listen("3000",function(){
	console.log("Server running on port 3000");
});