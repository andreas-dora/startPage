var t = new Date()
t.setMilliseconds(1596049949);
var h = t.getHours().toString().padStart(2, 0);
var m = t.getMinutes().toString().padStart(2, 0);

var mySunrise = h + ":" + m;

document.getElementById("time").innerText = mySunrise;