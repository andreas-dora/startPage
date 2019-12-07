var socket = io.connect('http://volumio.local/');
var plus  = document.getElementById('plus');
var min  = document.getElementById('minus');
var unmu  = document.getElementById('unmute');
var mu  = document.getElementById('mute');
var aB1  = document.getElementById('aBtn1');
var aIn1  = document.getElementById('aIn1');
var off  = document.getElementById('off');

plus.addEventListener('click', function(){
  socket.emit('volume', '+');
  console.log(socket.emit);
});
min.addEventListener('click', function(){
  socket.emit('volume', '-');
  console.log(socket.emit);
});
unmu.addEventListener('click', function(){
  socket.emit('unmute', '');
  console.log(socket.emit);
});
mu.addEventListener('click', function(){
  socket.emit('mute', '');
  console.log(socket.emit);
});
off.addEventListener('click', function(){
  io.emit('playPlaylist', {"name":"sunrise"});

//window.alert("VEnga");
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