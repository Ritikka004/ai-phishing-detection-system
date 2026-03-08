async function checkURL(){

let url = document.getElementById("urlInput").value;

let response = await fetch("http://127.0.0.1:5000/predict",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({url:url})

});

let data = await response.json();

document.getElementById("result").innerText =

data.prediction + " (" + data.risk_score + "%)";

}