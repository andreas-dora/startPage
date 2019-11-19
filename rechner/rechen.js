var valE100  = 0;
var valE50 = 0;
var valE20 = 0;
var valE20 = 0;
var valE10 = 0;
var valE5 = 0;
var valRollen = 0;
var valCoins = 0;
document.getElementById("rButton").addEventListener("click", reset);

function myFunction(){
    valE100 = document.getElementById("rInE100").value * 100; 
    valE50 = document.getElementById("rInE50").value * 50; 
    valE20 = document.getElementById("rInE20").value * 20; 
    valE10 = document.getElementById("rInE10").value *10; 
    valE5 = document.getElementById("rInE5").value * 5; 
    valRollen = document.getElementById("rInRollen").value * 1; 
    valCoins = document.getElementById("rInCoins").value * 1; 
  
    var total = valE100 +valE50 + valE20 + valE10 + valE5 +valRollen +valCoins;

    document.getElementById("rZwischenE100").innerText = valE100;
    document.getElementById("rZwischenE50").innerText = valE50;
    document.getElementById("rZwischenE20").innerText = valE20;
    document.getElementById("rZwischenE10").innerText = valE10;
    document.getElementById("rZwischenE5").innerText = valE5;
    document.getElementById("rZwischenRollen").innerText = valRollen;
    document.getElementById("rZwischenCoins").innerText = valCoins;

    document.getElementById("summe").innerText = total;

}

function reset(){
  var allIn = document.getElementsByClassName("rRight");
  for(var i = 0; i< allIn.length; i++){
    allIn[i].innerText = '0';
  };
  alert(allIn.length);
}
