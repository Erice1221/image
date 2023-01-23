const express= require('express');
const app= express();
const path = require("path");
const axios = require('axios').default;
app.use(express.static(path.join(__dirname, "src")));    //server css file as static otherwise css won't be seen in index.html when sent through sendFile()
app.use(express.json());
var mystate=""
//handling get request for home route
app.get("/",function(req,res){     
  res.sendFile(__dirname+"/src/main.html");
});


app.post('/getstate', async (req, res) => {
   //http://192.168.68.126/?led=state
	await axios.get('https://b788-185-197-192-80.ngrok.io/state')
  .then(function (response) {
   
    // handle success
    console.log(response.data);
    //change back to includes
    if (response.data.state==("False")){
        res.json({color:"rgb(53, 54, 58)"})
    }
    else if(response.data.state==("True")){
    res.json({color:"rgb(252, 238, 167)"})
    } else {
    res.json({color:"red"})
    }
  })

  .catch(function (error) {
    // handle error
    console.log(error)
    res.json({color:"green"})
   
  })
  .then(function () {
    // always executed
  });
    
         
            
          
});

app.post('/changelight', async (req, res) => {
    if (req.body.color=="rgb(53, 54, 58)"){
        mystate="on"
    } else if (req.body.color=="rgb(252, 238, 167)") {
        mystate="off"
    }
    
	//'http://192.168.68.126/?led='+mystate
    await axios.get('https://b788-185-197-192-80.ngrok.io/on')
    .then(function (response) {
     
      // handle success
     
     
     
      if (response.data.state==("false")){
       
          res.json({color:"rgb(53, 54, 58)"})
      }
      else if(response.data.state==("true")){
      res.json({color:"rgb(252, 238, 167)"})
 
      } else {
        res.json({color:"red"})
      }
   
    })
    .catch(function (error) {
      // handle error
      res.json({color:"green"})
     
    })
    .then(function () {
      // always executed
    });
});
app.listen("4000",function(){
	console.log("Server running on port 3000");
});