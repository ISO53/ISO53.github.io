// ******************** Declare Variables ********************
const isClicked = [false, false, false, false, false];
const password = [
	{ left: -2.1288989357046173, right: -1.9826545255277315 },
	{ left: -1.8736810986334378, right: -1.7786352717987606 },
	{ left: 1.7586943506602442, right: 1.9035356193754591 },
	{ left: -0.19739558080975805, right: -0.04392777443318325 },
	{ left: 2.9125982852021197, right: 3.12001315793075 },
];

// ************************ JS Starts ************************
firstLoadAnimations();
wheelListener();

// ******************** Declare Functions ********************
function wheelListener() {
	for (let i = 1; i <= 5; i++) {
		let wheel = document.getElementById("wheel_" + i);

		let wheelCenter = getCenter(wheel);
		window.addEventListener("resize", () => (wheelCenter = getCenter(wheel)));

		wheel.addEventListener("mousedown", () => (isClicked[i] = true));
		document.addEventListener("mousemove", (event) => {
			if (!isClicked[i]) {
				return;
			}

			const angle = Math.atan2(event.clientY - wheelCenter.y, event.clientX - wheelCenter.x);
			wheel.style.transform = `rotate(${angle}rad)`;
		});
	}

	document.addEventListener("mouseup", handleMouseUp);

	function handleMouseUp() {
		isClicked.fill(false);

		let counter = 0;
		for (let i = 0; i < password.length; i++) {
			const lt = password[i];
			const currElm = document.getElementById("wheel_" + (i + 1));
			const currRot = getRotation(currElm);

			if (currRot >= lt.left && currRot <= lt.right) {
				counter++;
			}
		}

		if (counter === 5) {
			console.log("password correct!");
			document.removeEventListener("mouseup", handleMouseUp);

			let menuButton = document.getElementById("menu_button");

			menuButton.classList.remove("hide_button");
			menuButton.click();
		}
	}

	function getCenter(element) {
		const { left, top, width, height } = element.getBoundingClientRect();
		return { x: left + width / 2, y: top + height / 2 };
	}

	function getRotation(element) {
		const computedStyle = window.getComputedStyle(element);
		const transformValue = computedStyle.getPropertyValue("transform");
		let rotateValueInRad;

		if (transformValue && transformValue !== "none") {
			// Extract the matrix values from the transform string using regex
			const match = transformValue.match(/^matrix\((.+)\)$/);
			if (match && match.length >= 2) {
				// Split the matrix values into an array
				const matrixValues = match[1].split(", ");

				// Calculate the rotation in radians using the matrix values
				const a = parseFloat(matrixValues[0]);
				const b = parseFloat(matrixValues[1]);
				rotateValueInRad = Math.atan2(b, a);
			}
		}

		return rotateValueInRad;
	}
}

function firstLoadAnimations() {
	setTimeout(() => document.getElementById("welcome").classList.remove("hide"), 500);
	setTimeout(() => document.getElementById("cipher").classList.remove("hide"), 1000);

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
