function tellTime() {
    let now = new Date();
     myH = now.getHours().toString().padStart(2, 0);
    let myM = now.getMinutes().toString().padStart(2, 0);

    let myDay = now.getDay();
    let myDate = now.getDate().toString().padStart(2, 0);
    let myM_ = now.getMonth()+1; 
    let myMonth = myM_.toString().padStart(2, 0);

    const tage = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    let myTime = myH + ":" + myM; 
    var myDatum = tage[myDay] + " " + myDate + "." + myMonth;
  
    document.getElementById("zeit").innerText = myTime;
    document.getElementById("datum").innerText = myDatum;
}

setInterval(tellTime, 1000);
