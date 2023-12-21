// ******************** Declare Variables ********************
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const maxDist = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
const particles = [];
const numParticles = 100;

var mouse_x = 0;
var mouse_y = 0;
var timeoutId;

class Particle {
    // Particle class
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 2;
        this.color = "rgba(255, 0, 0, 0.8)";
        this.speed = Math.random() * 2 + 1;
        this.angle = Math.random() * 2 * Math.PI;
    }

    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // Bounce off the walls
        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
            this.angle = Math.PI - this.angle;
        }
        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
            this.angle = -this.angle;
        }

        let curDist = Math.sqrt(Math.pow(this.x - mouse_x, 2) + Math.pow(this.y - mouse_y, 2));
        this.color = `rgba(255, 0, 0, ${0.6 - curDist / 0.5 / maxDist})`;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    connect(particles) {
        particles.forEach((particle) => {
            const distance = Math.sqrt((this.x - particle.x) ** 2 + (this.y - particle.y) ** 2);

            if (distance < 120) {
                let curDist = Math.sqrt(Math.pow(this.x - mouse_x, 2) + Math.pow(this.y - mouse_y, 2));

                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(particle.x, particle.y);
                ctx.strokeStyle = `rgba(200, 0, 0, ${0.6 - curDist / 0.5 / maxDist})`;
                ctx.stroke();
            }
        });
    }
}

// ************************ JS Starts ************************
initParticles();
mouseListener();
animate();

// ******************** Declare Functions ********************
function initParticles() {
    for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
        particle.update();
        particle.draw();
        particle.connect(particles);
    });
}

function mouseListener() {
    document.addEventListener("mousemove", function (event) {
        mouse_x = event.clientX;
        mouse_y = event.clientY;
    });
}




