// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

let navbar = document.getElementById("navbar");
let navbar2 = document.getElementById("navbar2");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;
let sticky2 = navbar2.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}