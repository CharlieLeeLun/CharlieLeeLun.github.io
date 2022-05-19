//-----------------------------------------
// Slideshow.js
// Originally from Dr. So, Henry.
// Modified by Charlie
//-----------------------------------------

var interval = 4000;
var direction = "dec"		// inc
var slideIndex = 0;
showSlides();
function showSlides() {
 var i;
 var slides = document.getElementsByClassName("mySlides");
 for (i = 0; i < slides.length; i++) {
 slides[i].style.display = "none";
 }
 slideIndex++;
 if (slideIndex> slides.length) {slideIndex = 1}
 slides[slideIndex-1].style.display = "block";
 setTimeout(showSlides, interval); // Change image every <4 seconds
 if ( direction == "dec" ){
	interval -= 100;
	if ( interval == 0){
		direction = "inc";
	}
 } else {
	interval += 100;
	if ( interval == 1000){
		direction = "dec";
	}
 }
}