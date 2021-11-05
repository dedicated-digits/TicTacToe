var rows=0;
var grid=[];
var gridvalue=[];
var form = document.getElementById("inputform");
form.action = "main.html";
var gameblock = document.getElementById("Game");
function onSubmit(){
    window.location.href("..\main.html");
}
function blocks(num){
    var tempbtn;
    for (let index = 0; index < num; index++) {
        tempbtn=document.createElement("button")
        tempbtn.innerHTML = " ";
        tempbtn.onclick = clickevent(this);
        gameblock.appendChild(tempbtn);
        grid.push(tempbtn);
        gridvalue.push(" ");
    }
}
function clickevent(e){
    e.target.innerHTML = "X";
    
}