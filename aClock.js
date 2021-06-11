const canvas = document.querySelector('canvas');
canvas.width = 220;
canvas.height = 220;
// canvas.height = window.innerHeight;




const ctx = canvas.getContext('2d');
var clock_x = canvas.width / 2;
var clock_y = canvas.height / 2;
var clock_r = 90;

function draw(){

ctx.clearRect(0,0,canvas.width, canvas.height); 
var myTime = new Date(); 
var mySeconds = myTime.getSeconds();

var myMinutes = myTime.getMinutes()* 60 + mySeconds;
var myHours = myTime.getHours() % 12 * 3600 + myMinutes;
var sekundenWinkel = (Math.PI*2/60) * mySeconds;
var minutenWinkel = (Math.PI*2/3600) * myMinutes;
var stundenWinkel = (Math.PI*2/43200) * myHours;



var uhr = new Path2D();
uhr.arc(
  clock_x, clock_y,
  clock_r,
  0, Math.PI*2,
  false           // ---- CLOCKWISE
);

ctx.strokeStyle = '#444';
ctx.fillStyle = '#3e3d3d';
// ctx.fill(uhr);
// ctx.stroke(uhr);
ctx.restore();
ctx.save();

var deckel = new Path2D();
deckel.arc(
  clock_x, clock_y,
  6,
  0, Math.PI*2,
  false           // ---- CLOCKWISE
);

// for(let i = 0; i < 60; i++){
//   var zeichenWinkel = (Math.PI*2/60) * i;
//   ctx.translate(clock_x, clock_y);
// ctx.rotate(zeichenWinkel);
// ctx.beginPath();
// ctx.fillStyle = '#fff';
// ctx.fillRect(-1, - clock_r*0.96, 2,18);
// ctx.restore();
// ctx.save();
// }
for(let i = 0; i < 20; i++){
  var zeichenWinkel = (Math.PI*2/20) * i;
  ctx.translate(clock_x, clock_y);
ctx.rotate(zeichenWinkel);
ctx.beginPath();
ctx.fillStyle = '#fff';
ctx.fillRect(-1, - clock_r*0.96, 1,10);
ctx.restore();
ctx.save();
}



// STUNDE

ctx.translate(clock_x, clock_y);
ctx.rotate(stundenWinkel);
ctx.beginPath();
ctx.fillStyle = '#fff';
ctx.fillRect(-3, 10, 6,- clock_r*0.9);
ctx.restore();
ctx.save();

ctx.translate(clock_x, clock_y);
ctx.rotate(minutenWinkel);
ctx.beginPath();
ctx.fillStyle = '#fff';
ctx.fillRect(-2,0, 4,-clock_r*0.94);
ctx.restore();
ctx.save();


ctx.translate(clock_x, clock_y);
ctx.rotate(sekundenWinkel);
ctx.beginPath();
ctx.fillStyle = '#f9423a';
ctx.fillRect(-1,0, 2,-clock_r*0.96);
ctx.restore();
ctx.save();

ctx.fillStyle = '#f9423a';
ctx.fill(deckel);
ctx.restore();
ctx.save();

  requestAnimationFrame(draw)
}



document.addEventListener('DOMContentLoaded', draw);