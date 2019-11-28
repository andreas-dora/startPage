var socket;


var test = document.addEventListener("DOMContentLoaded", testFun);
var testButton = document.getElementById("volumioT");
testButton.addEventListener("click", sendTo);

function testFun(){
    socket = io.connect('http://volumio.local/');
    socket.on('connect', function(data){
        console.log(data);
        
    });

    // window.alert("HEYHO");
}

function sendTo(){
  //  socket.emit('mute', '');
    socket.emit('getState', '');
//    socket.on('getState', incoming);
    alert("HEllo, I love you, want you tell me your name");

}

// function incoming(data){
//     console.log(data);
// }


function tellTime() {
    let now = new Date();
    let myH = now.getHours().toString().padStart(2, 0);
    let myM = now.getMinutes().toString().padStart(2, 0);
 //   let myS = now.getSeconds().toString().padStart(2, 0);

    let myDay = now.getDay();
    let myDate = now.getDate().toString().padStart(2, 0);
    // let myMonth = now.getMonth().toString().padStart(2, 0);
    let myMonth = now.getMonth();
    // let myY = now.getFullYear().toString();

    const tage = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    // const monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "August", "September", "Oktober", "November", "Dezember"];

    let myTime = myH + ":" + myM; // ":" + myS;
    let myDatum = myDate + "." + myMonth +".";
   //let myDatum = tage[myDay] + " " + myDate + ". " + monate[myMonth] + " " + myY;

    
    document.getElementById("tag").innerText = tage[myDay];
    document.getElementById("zeit").innerText = myTime;
    document.getElementById("datum").innerText = myDatum;
};

setInterval(tellTime, 1000);