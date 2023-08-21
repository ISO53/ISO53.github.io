// ******************** Declare Variables ********************

// ************************ JS Starts ************************
firstLoadAnimations();
sphereAnimation();

// ******************** Declare Functions ********************

function firstLoadAnimations() {
	let header = document.getElementById("about_me_header");
	let secondaryHeader = document.getElementById("secondary_header");
	let paragraph = document.getElementById("about_me_paragraph");
	let sphere = document.getElementById("sphere");

	setTimeout(() => (header.classList.remove("hide_about_me_header")), 250);
	setTimeout(() => (secondaryHeader.classList.remove("hide_secondary_header")), 500);
	setTimeout(() => (paragraph.classList.remove("hide_about_me_paragraph")), 750);
	setTimeout(() => (sphere.classList.remove("hide_sphere")), 250);

}

function sphereAnimation() {
	var canvas,
		ctx,
		sphere = new Sphere3D(40),
		distance = 450,
		mouse = {
			down: false,
			button: 1,
			x: 0,
			y: 0,
			px: 0,
			py: 0,
		},
		modify = 1;

	window.requestAnimFrame =
		window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) {
			window.setTimeout(callback, 10);
		};

	Number.prototype.clamp = function (min, max) {
		return Math.min(Math.max(this, min), max);
	};

	function Point3D() {
		this.x = 0;
		this.y = 0;
		this.z = 0;
	}

	function Sphere3D(radius) {
		this.point = new Array();
		this.color = "rgb(100,255,0)";
		this.radius = typeof radius == "undefined" ? 30.0 : radius;
		this.radius = typeof radius != "number" ? 30.0 : radius;

		this.numberOfVertexes = 0;

		for (alpha = 0; alpha <= 6.28; alpha += 0.17) {
			p = this.point[this.numberOfVertexes] = new Point3D();

			p.x = Math.cos(alpha) * this.radius;
			p.y = 0;
			p.z = Math.sin(alpha) * this.radius;
			this.numberOfVertexes++;
		}

		for (var direction = 1; direction >= -1; direction -= 2) {
			for (var beta = 0.19; beta < 1.445; beta += 0.17) {
				var radius = Math.cos(beta) * this.radius;
				var fixedY = Math.sin(beta) * this.radius * direction;

				for (var alpha = 0; alpha < 6.28; alpha += 0.17) {
					p = this.point[this.numberOfVertexes] = new Point3D();

					p.x = Math.cos(alpha) * radius;
					p.y = fixedY;
					p.z = Math.sin(alpha) * radius;

					this.numberOfVertexes++;
				}
			}
		}
	}

	function rotateX(point, radians) {
		var y = point.y;
		point.y = y * Math.cos(radians) + point.z * Math.sin(radians) * -1.0;
		point.z = y * Math.sin(radians) + point.z * Math.cos(radians);
	}

	function rotateY(point, radians) {
		var x = point.x;
		point.x = x * Math.cos(radians) + point.z * Math.sin(radians) * -1.0;
		point.z = x * Math.sin(radians) + point.z * Math.cos(radians);
	}

	function drawPoint(ctx, x, y, size, color) {
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.arc(x, y, size, 0, 2 * Math.PI, true);
		ctx.fill();
		ctx.restore();
	}

	function drawPointWithGradient(ctx, x, y, size, gradient) {
		var reflection;

		reflection = size / 4; // 0 - 5

		ctx.save();
		ctx.translate(x, y);
		var radgrad = ctx.createRadialGradient(-reflection, -reflection, reflection, 0, 0, size);

		var r = 200,
			g = 200,
			b = 200;

		var color = "rgb(" + r + "," + g + "," + b + ")";
		radgrad.addColorStop(0, "#FFFFFF");
		radgrad.addColorStop(gradient, color);
		radgrad.addColorStop(1, "rgba(1,159,98,0)");

		ctx.fillStyle = radgrad;
		ctx.fillRect(-size, -size, size * 2, size * 2);
		ctx.restore();
	}

	function projection(xy, z, xyOffset, zOffset, distance) {
		return (distance * xy) / (z - zOffset) + xyOffset;
	}

	function update() {
		ctx.save();
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (i = 0; i < sphere.numberOfVertexes; i++) {
			p.x = sphere.point[i].x;
			p.y = sphere.point[i].y;
			p.z = sphere.point[i].z;

			rotateX(p, Math.sin(+new Date() / 3600));
			rotateY(p, Math.cos(+new Date() / 3600));

			modify = Math.min((Math.abs(mouse.px - canvas.width / 2) / (canvas.width / 2)) * 1.25, 1.25);

			x = projection(p.x, p.z * modify, canvas.width / 2.0, 100.0, distance);
			y = projection(p.y, p.z * modify, canvas.height / 2.0, 100.0, distance);

			if (x >= 0 && x < canvas.width) {
				if (y >= 0 && y < canvas.height) {
					if (p.z < 0) {
						drawPoint(ctx, x, y, 1, "rgba(200,200,200,0.6)");
					} else {
						drawPointWithGradient(ctx, x, y, 2, 0.3);
					}
				}
			}
		}
		ctx.restore();

		requestAnimFrame(update);
	}

	function start() {
		document.getElementById("about_me_div").onmousemove = function (e) {
			mouse.px = mouse.x;
			mouse.py = mouse.y;
			var rect = canvas.getBoundingClientRect();
			(mouse.x = e.clientX - rect.left), (mouse.y = e.clientY - rect.top);
		};

		update();
	}

	window.onload = function () {
		canvas = document.getElementById("c");
		ctx = canvas.getContext("2d");
		canvas.width = 500;
		canvas.height = 500;

		start();
	};
}
