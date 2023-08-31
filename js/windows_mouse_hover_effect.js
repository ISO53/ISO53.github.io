// ******************** Declare Variables ********************

// ************************ JS Starts ************************
hoverAnimation();

// ******************** Declare Functions ********************
function hoverAnimation() {
	document.querySelectorAll(".slider_box").forEach((b) => {
		b.onmouseleave = (e) => {
			e.target.style.background = "black";
			e.target.style.borderImage = null;
		};

		b.addEventListener("mousemove", (e) => {
			const rect = b.getBoundingClientRect();
			const x = e.clientX - rect.left; //x position within the element.
			const y = e.clientY - rect.top; //y position within the element.
			b.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.2),rgba(255,255,255,0) )`;
			b.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
		});
	});
}
