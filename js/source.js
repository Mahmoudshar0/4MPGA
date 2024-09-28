let maps = document.getElementById("maps");
let inp = document.getElementById("inp");
let maps2 = document.getElementById("maps2")
let inp2 = document.getElementById("inp2")

function click(){
   if(inp.value == "egypt")
      maps.style.display="flex";
}
function click2(){
   if(inp2.value == "sohag")
      maps2.style.display="flex";
}