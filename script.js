var rows=0;
var buttongrid
function blocks(num){
    alert("hello");
    var tempbtn;
    const Gameblock = document.getElementById("Game");
    for (let index = 0; index < num; index++) {
        tempbtn=document.createElement("button");
        tempbtn.innerHTML = " ";
        Gameblock.appendChild(tempbtn);
        
    }
}
function GameGrid(num){
    
    for (let i = 0; i < num*num; i++) {
        
    }
}
function onSubmit(){
    document.getElementById("Game").style.display="block";
    document.getElementById("NameBlock").style.display="none";
    const num = parseInt(document.getElementById("number").value);
    GameGrid(num);
}
function ToMenu(){
    document.getElementById("NameBlock").style.display="block";
    document.getElementById("Game").style.display = "None";
}