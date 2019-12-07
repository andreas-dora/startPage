var volumi = document.getElementById("volumio");
volumi.addEventListener("click", expander);
var myH;
function expander(){
    window.alert("HELLO, WORLD " + myH);
}

function tellTime() {
    let now = new Date();
     myH = now.getHours().toString().padStart(2, 0);
    let myM = now.getMinutes().toString().padStart(2, 0);
 //   let myS = now.getSeconds().toString().padStart(2, 0);

    let myDay = now.getDay();
    let myDate = now.getDate().toString().padStart(2, 0);
    let myMonth = now.getMonth().toString().padStart(2, 0);
    //let myMonth = now.getMonth();
    // let myY = now.getFullYear().toString();

    const tage = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
   const monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "August", "September", "Oktober", "November", "Dezember"];

    let myTime = myH + ":" + myM; // ":" + myS;
    //var myDatum = myDate;
   // let myDatum = myDate + "." + myMonth +".";
    var myDatum = tage[myDay] + " " + myDate + "." + myMonth;


    
   // document.getElementById("tag").innerText = tage[myDay];
    document.getElementById("zeit").innerText = myTime;
    document.getElementById("datum").innerText = myDatum;
}

setInterval(tellTime, 1000);
