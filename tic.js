let count=0;
let a=null;
let turn="x";


function text(square){
if (a!=null){
   player(turn+ "  won the game,if you want play again, restart the game :)")
}
else if (square.innerText==''){
square.innerText=turn;
change();
}
else{
   alert("select other box please")
}
}

function change(){
count++;
if(winner(turn))
{
     player("congrats  " +turn+ "  won the game")
}

     else if(count==9){
           player(" The game is draw")

     }
     else if (turn=="x"){
              turn="o";
        player(turn+" need to play")
  }
  else{
          turn="x";
     player(turn+" need to play")
  }


  }

function player(message)
{
      var b=document.getElementById("turn");
      b.innerText=message;
}

function winner(a){
var result=false;
if (row(1,2,3,a)||
     row(4,5,6,a)||
     row(7,8,9,a)||
     row(1,4,7,a)||
     row(2,5,8,a)||
     row(3,6,9,a)||
     row(1,5,9,a)||
     row(3,5,7,a)
){
   result=true;
   document.a=1;

}
     return result;
}


function row(a,b,c,move){
  var rowCheck=false;
  if (data(a)==move && data(b)==move && data(c)==move)
      rowCheck=true
  return rowCheck
}

function data(a){
 return document.getElementById("s"+a).innerText;

}


function restart(){
  var i;
  for(i=1;i<10;i++){
       document.getElementById("s"+i).innerText='';
  }
  a=null;
  count=0;
   turn='X';
  player("The game starts with X")

}
