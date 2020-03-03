let slideIndex = 1;
showSlideDivs(slideIndex);

function addSlideDivs(n) {
	showSlideDivs((slideIndex += n));
}

function showSlideDivs(n) {
	let i;
	let slides = document.getElementsByClassName("slide");
	if (n > slides.length){
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

const buttonLeft = document.querySelector(".left_button");
const buttonRight = document.querySelector(".right_button");

buttonLeft.addEventListener("click", () => {
	addSlideDivs(-1);
});

buttonRight.addEventListener("click", () => {
	addSlideDivs(1);
});
