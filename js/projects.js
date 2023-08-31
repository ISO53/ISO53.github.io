// ******************** Declare Variables ********************
const projects = [
	{
		company: "Deka Technology",
		position: "Backend Developer",
		img: "res/deka_technology_logo.png",
		short_desc: "Still working as a backend developer intern.",
		long_desc: "Still working as a backend developer intern.",
		start_date: "August 2023",
		end_date: "September 2023",
	},
	{
		company: "Perdestanbul - perdestanbul.com",
		position: "Fullstack Developer",
		img: "res/perdestanbul_logo.png",
		short_desc: "I led the development for a curtain-selling website using WooCommerce. My focus on secure payment integration, SEO, and cache management enhanced performance and growth.",
		long_desc:
			"As a backend-focused Full Stack Developer, I utilized WooCommerce to lead the development of a dynamic curtain selling website. My expertise in secure payment integration, SEO optimization, and efficient cache management played a crucial role in enhancing the website's performance. By seamlessly integrating secure payment gateways using WooCommerce, implementing strategic SEO practices, and optimizing cache management, I achieved improved visibility, organic search traffic, and exceptional website speed. Additionally, my backend responsibilities included efficient inventory management and database optimization, ensuring a streamlined product catalog. Leveraging the power of WooCommerce, my full stack development expertise has resulted in positive customer feedback and substantial business growth.\n\n Finally, I decided to move away from web development because it was a mess. I noticed numerous websites and plugins that were either painfully slow, riddled with bugs, or sometimes both. Till now, money was a motivator, but I knew it was time for a shift. So, I decided to put all my focus on backend development.",
		start_date: "May 2023",
		end_date: "July 2023",
	},
	{
		company: "İncePerde - inceperde.com.tr",
		position: "Freelance Web Developer",
		img: "res/inceperde_logo.webp",
		short_desc: "I designed a dynamic curtain sales website using JavaScript, CSS, and HTML. It featured interactivity, SEO optimization, and reliable hosting.",
		long_desc:
			"As a freelance web developer, I created a dynamic and responsive website for a curtain sales company using JavaScript, CSS, and HTML. The website included various interactive features to enhance user project. I also optimized the website for search engines using SEO techniques to increase online visibility and attract more potential customers. Hosting the website on reliable and fast servers ensured maximum uptime and fast loading speeds.",
		start_date: "March 2023",
		end_date: "April 2023",
	},
	{
		company: "PIA (People in Action)",
		position: "Backend Developer",
		img: "res/pia_logo.webp",
		short_desc: "This internship enhanced my technical skills, especially in areas like backend and web development and database management, which will be valuable in my future work.",
		long_desc:
			"Throughout the duration of my internship, I had the opportunity to immerse myself in a diverse array of technologies, ranging from Microservices, Java SpringBoot, Hibernate, and various databases such as PostgreSQL and MongoDB, to integrating with external APIs like the OpenWeatherMap API. Additionally, I honed my web development skills, delving into HTML, CSS, and JavaScript. This invaluable project has firmly established a robust foundation in these technologies, igniting my enthusiasm to further explore and leverage them in my forthcoming professional undertakings.",
		start_date: "June 2022",
		end_date: "July 2022",
	},
	{
		company: "Tasarımla - tasarımla.com",
		position: "Freelance Web Developer",
		img: "res/tasarimla_logo.png",
		short_desc: "I created a product catalog website using HTML, CSS, and JS, hosted it on Natro's reliable platform, and gained Linux-based cPanel expertise.",
		long_desc:
			"As part of my journey in web development, I took on the task of creating a dynamic product catalog website. Using a blend of HTML, CSS, and JavaScript, I designed and developed this platform to showcase a range of promotional products. For hosting, I selected dependable and efficient service provider that ensured the website's reliable accessibility. Additionally, I explored Linux-based cPanel administration during this project, which enhanced my skill set. This project has strengthened my web development skills and expanded my understanding of web hosting, preparing me for future projects in this field.",
		start_date: "March 2022",
		end_date: "April 2022",
	},
];
const LIST_SIZE = projects.length;

// ************************ JS Starts ************************
loadprojects();
firstLoadAnimations();
interactiveprojectsScrollBar();
hoverAnimationOnprojects();

// ******************** Declare Functions ********************
function firstLoadAnimations() {
	let header = document.getElementById("project_header");
	let secondaryHeader = document.getElementById("secondary_header");
	let paragraph = document.getElementById("project_paragraph");
	let buttons = document.getElementById("project_button_div");
	let projectsDiv = document.getElementById("projects_list_wrapper");

	setTimeout(() => header.classList.remove("hide_project_header"), 250);
	setTimeout(() => secondaryHeader.classList.remove("hide_secondary_header"), 500);
	setTimeout(() => paragraph.classList.remove("hide_project_paragraph"), 750);
	setTimeout(() => buttons.classList.remove("hide_project_button_div"), 1000);
	setTimeout(() => projectsDiv.classList.remove("hide_projects_list_wrapper"), 1000);
	setTimeout(() => projectsDiv.style.transform = "perspective(300px) rotateY(-10deg)", 1250);
}

function loadprojects() {
	let projectsDiv = document.getElementById("projects_list_div");

	projects.forEach((project) => {
		// Main div for each project
		let expDiv = document.createElement("div");
		expDiv.className = "exp_div";
		projectsDiv.appendChild(expDiv);

		// Top div for image, company name and position
		let topDiv = document.createElement("div");
		topDiv.className = "top_exp_div";
		expDiv.appendChild(topDiv);

		// Top left div for image
		let topLeftDiv = document.createElement("div");
		topLeftDiv.className = "top_left_exp_div";
		topDiv.appendChild(topLeftDiv);

		// Company logo image
		let image = document.createElement("img");
		image.src = project.img;
		image.className = "company_logo";
		topLeftDiv.appendChild(image);

		// Top right div for company name and position
		let topRightDiv = document.createElement("div");
		topRightDiv.className = "top_right_exp_div";
		topDiv.appendChild(topRightDiv);

		// Company name
		let compName = document.createElement("h2");
		compName.className = "comp_name_exp";
		compName.innerHTML = project.company;
		topRightDiv.appendChild(compName);

		// Position
		let positionName = document.createElement("h2");
		positionName.className = "position_exp";
		positionName.innerHTML = project.position;
		topRightDiv.appendChild(positionName);

		// Div for date range
		let dateDiv = document.createElement("div");
		dateDiv.className = "date_exp_div";
		expDiv.appendChild(dateDiv);

		// Date range
		let date = document.createElement("h3");
		date.className = "date_exp";
		date.innerHTML = project.start_date + " - " + project.end_date;
		dateDiv.appendChild(date);

		// Bottom div for short description paragraph
		let bottomDiv = document.createElement("div");
		bottomDiv.className = "bottom_exp_div";
		expDiv.appendChild(bottomDiv);

		// Short description paragraph
		let shortParagraph = document.createElement("p");
		shortParagraph.className = "short_exp_paragraph";
		shortParagraph.innerHTML = project.short_desc;
		bottomDiv.appendChild(shortParagraph);
	});
}

function interactiveprojectsScrollBar() {
	let up = document.getElementById("project_up");
	let down = document.getElementById("project_down");
	let list = document.getElementById("projects_list_div");
	let wrapper = document.getElementById("projects_list_wrapper");

	const step = 150 + 25; // 150px height + 50px margin
	const startPos = wrapper.offsetHeight / 2 - step / 2 - 12.5;

	let current = startPos;
	let index = 0;

	list.style.transform = "translateY(" + current + "px)";
	adjustOtherDivs();

	up.addEventListener("click", () => {
		if (index - 1 >= 0) {
			current += step;
			list.style.transform = "translateY(" + current + "px)";
			index--;

			adjustOtherDivs();
			loadNewproject("up");
		}
	});

	down.addEventListener("click", () => {
		if (index + 1 < LIST_SIZE) {
			current -= step;
			list.style.transform = "translateY(" + current + "px)";
			index++;

			adjustOtherDivs();
			loadNewproject("down");
		}
	});

	function adjustOtherDivs() {
		for (let i = 0; i < list.children.length; i++) {
			list.children[i].style.transform = "none";
			list.children[i].style.opacity = "1";
		}

		if (index + 1 < LIST_SIZE) {
			list.children[index + 1].style.transform = "scale(" + 90 + "%)";
			list.children[index + 1].style.opacity = "60%";
		}

		if (index - 1 >= 0) {
			list.children[index - 1].style.transform = "scale(" + 90 + "%)";
			list.children[index - 1].style.opacity = "60%";
		}

		if (index + 2 < LIST_SIZE) {
			list.children[index + 2].style.transform = "scale(" + 80 + "%)";
			list.children[index + 2].style.opacity = "20%";
		}

		if (index - 2 >= 0) {
			list.children[index - 2].style.transform = "scale(" + 80 + "%)";
			list.children[index - 2].style.opacity = "20%";
		}
	}

	function loadNewproject(direction) {
		let infoDiv = document.getElementById("information_div");

		infoDiv.style.transform = "translateY(" + (direction === "up" ? "+" : "-") + "15%)";
		infoDiv.style.opacity = "0";

		setTimeout(() => {
			document.getElementById("secondary_header").innerHTML = projects[index].company.split(" ")[0] + " • " + projects[index].position;
			document.getElementById("project_paragraph").innerHTML = projects[index].long_desc;

			infoDiv.style.transition = "none";
			infoDiv.style.transform = "translateY(" + (direction === "down" ? "+" : "-") + "15%)";

			infoDiv.style.transition = "transform 500ms ease, opacity 500ms ease";
			infoDiv.style.transform = "translateY(0%)";
			infoDiv.style.opacity = "1";
		}, 500);
	}
}

function hoverAnimationOnprojects() {
	document.querySelectorAll(".exp_div").forEach((b) => {
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
