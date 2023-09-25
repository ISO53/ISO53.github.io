// ******************** Declare Variables ********************

// ************************ JS Starts ************************
firstLoadAnimations();
skipButtonListener();

// ******************** Declare Functions ********************
function firstLoadAnimations() {
	setTimeout(() => document.getElementById("welcome").classList.remove("hide"), 500);
	setTimeout(() => document.getElementById("cipher").classList.remove("hide"), 1000);
	setTimeout(() => document.getElementById("red_button").classList.remove("hide"), 1500);

	setTimeout(() => (document.getElementById("wheel_1").style.transform = "rotate(30deg)"), 1000);
	setTimeout(() => (document.getElementById("wheel_2").style.transform = "rotate(-60deg)"), 1000);
	setTimeout(() => (document.getElementById("wheel_3").style.transform = "rotate(90deg)"), 1000);
	setTimeout(() => (document.getElementById("wheel_4").style.transform = "rotate(-120deg)"), 1000);
	setTimeout(() => (document.getElementById("wheel_5").style.transform = "rotate(150deg)"), 1000);

	setTimeout(() => document.getElementById("wheel_1").classList.remove("wheel_transition"), 4000);
	setTimeout(() => document.getElementById("wheel_2").classList.remove("wheel_transition"), 4000);
	setTimeout(() => document.getElementById("wheel_3").classList.remove("wheel_transition"), 4000);
	setTimeout(() => document.getElementById("wheel_4").classList.remove("wheel_transition"), 4000);
	setTimeout(() => document.getElementById("wheel_5").classList.remove("wheel_transition"), 4000);
}

function skipButtonListener() {
	let skipButton = document.getElementById("red_button");

	skipButton.onclick = () => {
		let menuButton = document.getElementById("menu_button");

		menuButton.classList.remove("hide_button");
		menuButton.click();
	};
}