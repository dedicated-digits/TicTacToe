var rows=0;
var buttongrid
function blocks(num){
    alert("hello");
    const Gameblock = document.getElementById("GameGrid");
    for (let index = 0; index < num; index++) {
        let tempbtn=document.createElement("button");
        tempbtn.innerHTML = " ";
        Gameblock.appendChild(tempbtn);
        
    }
}
function GameDispay(num){
    const GameGrid = document.getElementById("GameGrid");
    for (let i = 0; i < num*num; i++) {
        let tempbtn=document.create("button");
        tempbtn.innerHTML = " ";
        GameGrid.appendChild(tempbtn);
    }
}
function menuchange(enable,disable){
    document.getElementById(enable).style.display="grid";
    document.getElementById(disable).style.display="none";
}
function onSubmit(){
    menuchange("Game","NameBlock");
    const num = parseInt(document.getElementById("number").value);
    GameDispay(parseInt(num));
}
function ToMenu(){
    menuchange("NameBlock","Game");
}