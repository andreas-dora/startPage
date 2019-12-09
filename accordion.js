var socket = io.connect('http://volumio.local/');

var volu  = document.getElementById('volumio');
var plus  = document.getElementById('plus');
var min  = document.getElementById('minus');
var prv = document.getElementById("prev");
var nxt = document.getElementById("next");
// var unmu  = document.getElementById('unmute');
var mu  = document.getElementById('mute');
var aB1  = document.getElementById('aBtn1');
var aIn1  = document.getElementById('aIn1');
// var gState  = document.getElementById('getState');
var off = document.getElementById("off");

var alSt = document.getElementById('alarmState');

var outA = document.getElementById('artist');
// var outT = document.getElementById('titel');



plus.addEventListener('click', function(){
  socket.emit('volume', '+');
  console.log(socket.emit);
});
min.addEventListener('click', function(){
  socket.emit('volume', '-');
  console.log(socket.emit);
});
prv.addEventListener('click', function(){
  socket.emit('prev', '');
  console.log(socket.emit);
});
nxt.addEventListener('click', function(){
  socket.emit('next', '');
  console.log(socket.emit);
});

// unmu.addEventListener('click', function(){
//   socket.emit('unmute', '');
//   console.log(socket.emit);
// });
mu.addEventListener('click', function(){
  socket.emit('volume', 10);
  console.log(socket.emit);
});
volu.addEventListener('click', function(){
  socket.emit('getState', '');
});
aBtn1.addEventListener('click', function(){
  let data = {
    id:"1",
    enabled:"true",
    time:"12:04",
    playlist:"sunrise"
    };
  socket.emit('setAlarm', data);
  // socket.emit('mute', '');
  // console.log(socket.emit);
  console.log(aIn1);
  console.log(aIn1.value);
  // if(aIn1.value = null){
  //   window.alert("Kacke");
  // } else {
  //   window.alert(aIn1.value);
  // }

});

socket.on('pushState', function(data){
  let myL = data.volume %10;
  outA.innerHTML = '<strong>' + data.title +'</strong>' + '<br>'  + data.artist +  '<br>' +  data.album   + data.volume +"%" + myL;
  // outT.innerHTML = ":" + data.title;
});


alSt.addEventListener('click', function(){

  socket.emit('getAlarms', '');
  window.alert("WANN MANN?");
});
socket.on('pushAlarm', function(data){
  console.log(data);
  output.innerHTML += 'pushAlarm' + " " + data.length; 
  for(let i= 0; i< data.length; i++){
    output.innerHTML += "ALARM " + i + " " +  data[i].time;
  }
});

off.addEventListener('click', function(){
  socket.emit('shutdown', '');
});

var accord = document.getElementsByClassName("accordion");
var i;
// for(let i = 0; i < accord.length; i++){
//   accord[i].addEventListener("click", function(){
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if(panel.style.display === "block"){
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

for (i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    // panel.style.borderStyle = "none";
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      // panel.style.borderStyle = "hidden";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      // panel.style.borderStyle = "solid";
    }
  });
}