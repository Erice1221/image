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
    fetch("/changelight", {
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
}