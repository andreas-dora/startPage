const toggleBtn = document.getElementsByClassName("navbar__toggle")[0];
const links = document.getElementsByClassName("navbar__links")[0];
toggleBtn.addEventListener('click', () =>{
  links.classList.toggle('active');
});

const input = document.getElementById("id_utc_in");

/* #############################*/
/* #############################*/
/* #############################*/
;
const timeBtn = document.getElementById('id_utcBtn');

timeBtn.addEventListener('click', () => {

  var coolTime = stampConverter(input.value);
  console.log(coolTime);
  document.getElementById("id_t_out").value =coolTime;

});


function stampConverter(utcStamp){
  var date = new Date(utcStamp * 1000);
  var h = date.getHours();
  var m = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var myTime = h + ':' + m.substr(-2) + ':' + seconds.substr(-2);
  
  return myTime;
};


// const stamp;
// timeBtn.addEventListener('click', () => {
// //  stamp = input.value;

// var stamp = input.value;

// var coolTime = stampConverter(stamp);

//  console.log(coolTime);
//  document.getElementById("id_utc_in").value =coolTime;
// });