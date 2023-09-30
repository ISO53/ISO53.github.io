// ******************** Declare Variables ********************

// ************************ JS Starts ************************
menuButtonListener();

// ******************** Declare Functions ********************
function menuButtonListener() {
	let button = document.getElementById("menu_button");
	let menuDiv = document.getElementById("menu_div");

	button.addEventListener("click", () => {
		if (window.getComputedStyle(menuDiv).getPropertyValue("display") === "flex") {
			setTimeout(() => (menuDiv.style.display = "none"), 500);
		} else {
			menuDiv.style.display = "flex";
		}

		setTimeout(() => {
			button.classList.toggle("active");
			menuDiv.classList.toggle("menu_div_active");
		}, 5);

		// Animate menü elements
		let menuList = document.getElementById("menu_items");
		let liElements = menuList.getElementsByTagName("a");

		for (let i = 0; i < liElements.length; i++) {
			setTimeout(() => {
				liElements[i].classList.toggle("hide_item");
			}, i * 50);
		}

		// Animate social elements
		let resources = document.getElementById("resources");
		let resElements = resources.getElementsByTagName("a");

		for (let i = 0; i < resElements.length; i++) {
			setTimeout(() => {
				resElements[i].classList.toggle("hide_resource");
			}, i * 50);
		}
	});
}

function removeClickListeners(event) {
	event.preventDefault();
	event.stopPropagation();
}
