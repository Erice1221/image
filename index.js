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
   //
	await axios.get('http://192.168.68.126/?led=state')
  .then(function (response) {
   console.log('grape')
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
    console.log('banana')
    res.json({color:"green"})
   
  })
  .then(function () {
    console.log('apple')
    // always executed
  });
    
         
            
          
});

app.post('/changelight', async (req, res) => {
    if (req.body.color=="rgb(53, 54, 58)"){
        mystate="on"
    } else if (req.body.color=="rgb(252, 238, 167)") {
        mystate="off"
    }
    
	//'
    await axios.get('http://192.168.68.126/?led='+mystate)
    .then(function (response) {
        console.log(response.data)
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