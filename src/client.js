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
            
         
        
        })
        .then(function (result) {
            
       
          
        })
        .catch(function (error) {
          console.error("Error:", error);
        });
    document.getElementById('main-button-id').addEventListener('click', Changelightstate) 
    
}


function Changelightstate(){
    if (document.body.style.backgroundColor=="rgb(252, 238, 167)" || document.body.style.backgroundColor=="rgb(53, 54, 58)"){
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
            
         
        
        })
        .then(function (result) {
            
       
          
        })
        .catch(function (error) {
          console.error("Error:", error);
        });
    } else {
        document.getElementById('main-status-id').innerText="Wait For the Background to be yellow or black"
    }
}