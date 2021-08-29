/*This is to add a 5 star rating in the home page*/
const starWrapper = document.querySelectorAll(".stars a");
const stars = document.querySelectorAll(".stars a");

stars.forEach((star, clickedIdx) => {
	star.addEventListener("click" , () => {
		starWrapper.classList.add('disabled');
		stars.forEach((otherStar, otherIdx) => {
			if(otherIdx <= clickedIdx){
				otherStar.classList.add("active");
			}
		});
		console.log('star of index ${idx + 1} was clicked');
		//Post to Backend your star ranking
	});
});

/*This is for the Testimonials.*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

