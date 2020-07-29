const toggleBtn = document.getElementsByClassName("navbar__toggle")[0];
const links = document.getElementsByClassName("navbar__links")[0];
toggleBtn.addEventListener('click', () =>{
  links.classList.toggle('active');
});


