// ******************** Declare Variables ********************

// ************************ JS Starts ************************
firstLoadAnimations();

// ******************** Declare Functions ********************

function firstLoadAnimations() {
	let header = document.getElementById("skills_header");

	setTimeout(() => (header.classList.remove("hide_skills_header")), 250);

}
