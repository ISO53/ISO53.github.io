// ******************** Declare Variables ********************

// ************************ JS Starts ************************
menuButtonListener();

// ******************** Declare Functions ********************
function menuButtonListener() {
	let button = document.getElementById("menu_button");
	let menuDiv = document.getElementById("menu_div");

	button.addEventListener("click", () => {
		button.classList.toggle("active");
		menuDiv.classList.toggle("menu_div_active");

		let menuList = document.getElementById("menu_items");
		let liElements = menuList.getElementsByTagName("a");

		for (let i = 0; i < liElements.length; i++) {
			setTimeout(() => {
				liElements[i].classList.toggle("hide_item");
			}, i * 50);
		}
	});
}
