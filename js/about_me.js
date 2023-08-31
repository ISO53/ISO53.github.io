// ******************** Declare Variables ********************

// ************************ JS Starts ************************
firstLoadAnimations();

// ******************** Declare Functions ********************
function firstLoadAnimations() {
	let header = document.getElementById("about_me_header");
	let secondaryHeader = document.getElementById("secondary_header");
	let paragraph = document.getElementById("about_me_paragraph");
	let sphere = document.getElementById("sphere");

	setTimeout(() => (header.classList.remove("hide_only_opacity")), 250);
	setTimeout(() => (secondaryHeader.classList.remove("hide")), 500);
	setTimeout(() => (paragraph.classList.remove("hide")), 750);
	setTimeout(() => (sphere.classList.remove("hide")), 250);
}