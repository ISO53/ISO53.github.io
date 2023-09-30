// ******************** Declare Variables ********************

// ************************ JS Starts ************************
cursorAnimationCircle();
cursorAnimationDot();

// ******************** Declare Functions ********************
function cursorAnimationCircle() {
	let mousePosX = 0;
	let mousePosY = 0;
	let mouseCircle = document.getElementById("mouse_circle");
	let timeout;

	document.addEventListener("mousemove", (e) => {
		mousePosX = e.pageX;
		mousePosY = e.pageY;

		mouseCircle.style.opacity = "1";

		clearTimeout(timeout);
		timeout = setTimeout(() => (mouseCircle.style.opacity = "0"), 1000);
	});

	let delay = 4;
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
}

function cursorAnimationDot() {
	let mousePosX = 0;
	let mousePosY = 0;
	let mouseCircle = document.getElementById("mouse_dot");
	let timeout;

	document.addEventListener("mousemove", (e) => {
		mousePosX = e.pageX;
		mousePosY = e.pageY;

		mouseCircle.style.opacity = "1";

		clearTimeout(timeout);
		timeout = setTimeout(() => (mouseCircle.style.opacity = "0"), 1000);
	});

	let delay = 1;
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
}
