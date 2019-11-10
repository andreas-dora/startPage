
function tellTime() {
    let now = new Date();
    let myH = now.getHours().toString().padStart(2, 0);
    let myM = now.getMinutes().toString().padStart(2, 0);
 //   let myS = now.getSeconds().toString().padStart(2, 0);

    let myDay = now.getDay();
    let myDate = now.getDate().toString().padStart(2, 0);
    // let myMonth = now.getMonth().toString().padStart(2, 0);
    let myMonth = now.getMonth();
    let myY = now.getFullYear().toString();

    const tage = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    const monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "August", "September", "Oktober", "November", "Dezember"];

    let myTime = myH + ":" + myM; // ":" + myS;
    let myDatum = tage[myDay] + " " + myDate + ". " + monate[myMonth] + " " + myY;

    document.getElementById("zeit").innerText = myTime;
    document.getElementById("datum").innerText = myDatum;
};

setInterval(tellTime, 1000);