// ******************** Declare Variables ********************

// ************************ JS Starts ************************
cursorAnimation();

// ******************** Declare Functions ********************
function cursorAnimation() {
	document.addEventListener("DOMContentLoaded", () => {
		let mousePosX = 0;
		let mousePosY = 0;
		let mouseCircle = document.getElementById("mouse_circle");
		let timeout;

		document.onmousemove = (e) => {
			mousePosX = e.pageX;
			mousePosY = e.pageY;

			mouseCircle.style.opacity = "1";

			clearTimeout(timeout);
			timeout = setTimeout(() => (mouseCircle.style.opacity = "0"), 1000);
		};

		let delay = 6;
		let revisedMousePosX = 0;
		let revisedMousePosY = 0;

		function delayMouseFollow() {
			requestAnimationFrame(delayMouseFollow);

			revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
			revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

			mouseCircle.style.top = revisedMousePosY + "px";
			mouseCircle.style.left = revisedMousePosX + "px";
		}

		delayMouseFollow();
	});
}
