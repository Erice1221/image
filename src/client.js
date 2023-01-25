if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    
    ready()
    
}

function ready() {
    
    fetch("/getstate", {
        headers: {'Content-Type': 'application/json'},
        method: "POST",
        body: JSON.stringify({
            })
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (session) {
            
            document.body.style.backgroundColor=session.color
            if (session.color=="green" || session.color=="red"){
                document.getElementById('main-status-id').innerText="Error"
            } else {
            document.getElementById('main-status-id').innerText=""
            }
         
        
        })
        .then(function (result) {
            
       
          
        })
        .catch(function (error) {
          console.error("Error:", error);
        });
    
    document.getElementById('main-button-id').addEventListener('click', Changelightstate) 
    
}

var count=0
var buttonstate=true
function Changelightstate(){
    if ((document.body.style.backgroundColor=="rgb(252, 238, 167)" || document.body.style.backgroundColor=="rgb(53, 54, 58)") && buttonstate){
        buttonstate=false
        count=0
       
        
    fetch("/changelight", {
        headers: {'Content-Type': 'application/json'},
        method: "POST",
        body: JSON.stringify({
            "color":document.body.style.backgroundColor
            })
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (session) {
          
            document.body.style.backgroundColor=session.color
            buttonstate=true
            document.getElementById('main-status-id').innerText=""
            
         
        
        })
        .then(function (result) {
            
       
          
        })
        .catch(function (error) {
          console.error("Error:", error);
        });
    } else if (!buttonstate){
            console.log(count)

            if(count==0) {
                document.getElementById('main-status-id').innerText="wait"
            } else if(count==1){
                document.getElementById('main-status-id').innerText="WAITTT"    
            } else if(count==2){
                document.getElementById('main-status-id').innerText="I SAID WAIT"    
            } else if(count>2){
                document.getElementById('main-status-id').innerText="You don't know what wait means???"    
                
            } 
            count++
        }else{     
        document.getElementById('main-status-id').innerText="Wait For the Background to be yellow or black"
    }

   
}