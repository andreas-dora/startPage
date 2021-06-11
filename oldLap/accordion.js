var socket = io.connect('http://volumio.local/');
// var v = 100;
var volu  = document.getElementById('volumio'); 
var outA = document.getElementById('artistOut');
var pegel = document.getElementById('pegel');
// pegel.style.width = v +"%" ;
var mu  = document.getElementById('mute');
var plus  = document.getElementById('plus');
var min  = document.getElementById('minus');
var prv = document.getElementById("prev");
var play = document.getElementById("play");
var nxt = document.getElementById("next");

var pau = document.getElementById("pause");
var off = document.getElementById("shutdown");



// volu.addEventListener('click', function(){
//   socket.emit('getState','');
  


// });
// socket.on('pushState', function(data){
//   outA.innerHTML = data.artist +  '<br>' + '<strong>' + data.title +'</strong>' + '<br>' + data.album + ' ' +  data.volume + "%";
//   pegel.style.width = data.volume +"%";
// });

mu.addEventListener('click', function(){
  socket.emit('volume', 10);
});
plus.addEventListener('click', function(){
  socket.emit('volume', '+');
});
min.addEventListener('click', function(){
  socket.emit('volume', '-');
});
prv.addEventListener('click', function(){
  socket.emit('prev', '');
});
nxt.addEventListener('click', function(){
  socket.emit('next', '');
});
play.addEventListener('click', function(){
  socket.emit('toggle', '');
});

pau.addEventListener('click', function(){
  socket.emit('pause', '');
});

off.addEventListener('click', function(){
  socket.emit('shutdown', '');
});


var accord = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    // panel.style.borderStyle = "none";
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}