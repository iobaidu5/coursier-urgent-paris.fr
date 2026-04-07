$(document).ready(function () {
  $("li.active").removeClass("active");
  $('a[href="' + location.pathname + '"]')
    .closest("li")
    .addClass("active");
});

window.onscroll = function() {myFunction()};

var header = document.getElementById("menu");
var sticky = header.offsetTop;
var placeholderHeight = document.getElementById("menu").clientHeight;
var placeholder = document.getElementById("placeHolder");

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixmenu");
    placeholder.style.height = placeholderHeight + 'px';

  } else {
    header.classList.remove("fixmenu");
    placeholder.style.height = 'auto';
  }
}



const nav = document.querySelector(".fixedNav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav?.offsetHeight + 150) {
    nav.classList.add("navbar-active");
   nav.removeAttribute('clip-path');
  } else {
    nav.classList.remove("navbar-active");
  }
}
	