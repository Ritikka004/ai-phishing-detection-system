let chart;

async function checkURL(){

let url=document.getElementById("urlInput").value;

document.getElementById("loading").style.display="block";
document.getElementById("result").innerHTML="";
document.getElementById("threatLevel").innerHTML="";

let response=await fetch("http://127.0.0.1:5000/predict",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({url:url})

});

let data=await response.json();

document.getElementById("loading").style.display="none";

let result=document.getElementById("result");

if(data.prediction==="SAFE"){
result.innerHTML="<span class='safe'>SAFE WEBSITE</span><br>Risk Score: "+data.risk_score+"%";
}
else{
result.innerHTML="<span class='phishing'>PHISHING WEBSITE</span><br>Risk Score: "+data.risk_score+"%";
}

showThreatLevel(data.risk_score);

updateRiskMeter(data.risk_score);

saveHistory(url,data.prediction,data.risk_score);

generateExplanation(url);

}

function updateRiskMeter(score){

let ctx=document.getElementById("riskChart").getContext("2d");

if(chart){
chart.destroy();
}

chart=new Chart(ctx,{
type:"doughnut",
data:{
datasets:[{
data:[score,100-score],
backgroundColor:["#ef4444","#22c55e"]
}]
},
options:{
cutout:"70%"
}
});

}

function saveHistory(url,prediction,score){

let history=JSON.parse(localStorage.getItem("scanHistory"))||[];

history.push({
url:url,
prediction:prediction,
score:score
});

localStorage.setItem("scanHistory",JSON.stringify(history));

}

function loadHistory(){

let history=JSON.parse(localStorage.getItem("scanHistory"))||[];

let list=document.getElementById("history");

list.innerHTML="";

history.slice().reverse().forEach(item=>{

let li=document.createElement("li");

li.innerText=item.url+" - "+item.prediction+" ("+item.score+"%)";

list.appendChild(li);

});

}

function generateExplanation(url){

let reasons=[];

if(url.length>30){
reasons.push("Domain length is unusually long");
}

if(url.includes("login")||url.includes("verify")||url.includes("update")){
reasons.push("URL contains suspicious keywords");
}

if(/\d+\.\d+\.\d+\.\d+/.test(url)){
reasons.push("Uses IP address instead of domain");
}

if(url.includes("@")){
reasons.push("Contains @ symbol which may hide the real domain");
}

let list=document.getElementById("explanationList");

list.innerHTML="";

reasons.forEach(r=>{
let li=document.createElement("li");
li.innerText="• "+r;
list.appendChild(li);
});

}

function showThreatLevel(score){

let level=document.getElementById("threatLevel");

if(score<30){
level.innerHTML="Threat Level: LOW 🟢";
level.style.color="#22c55e";
}

else if(score<70){
level.innerHTML="Threat Level: MEDIUM 🟡";
level.style.color="#facc15";
}

else{
level.innerHTML="Threat Level: HIGH 🔴";
level.style.color="#ef4444";
}

}

function showSection(section){

document.getElementById("meterSection").style.display="none";
document.getElementById("historySection").style.display="none";
document.getElementById("statsSection").style.display="none";
document.getElementById("aiSection").style.display="none";

if(section==="meter"){
document.getElementById("meterSection").style.display="block";
}

if(section==="history"){
document.getElementById("historySection").style.display="block";
loadHistory();
}

if(section==="stats"){
document.getElementById("statsSection").style.display="block";
}

if(section==="ai"){
document.getElementById("aiSection").style.display="block";
}

}