// ******************** Declare Variables ********************
const experiences = [
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
			"As a freelance web developer, I created a dynamic and responsive website for a curtain sales company using JavaScript, CSS, and HTML. The website included various interactive features to enhance user experience. I also optimized the website for search engines using SEO techniques to increase online visibility and attract more potential customers. Hosting the website on reliable and fast servers ensured maximum uptime and fast loading speeds.",
		start_date: "March 2023",
		end_date: "April 2023",
	},
	{
		company: "PIA (People in Action)",
		position: "Backend Developer",
		img: "res/pia_logo.webp",
		short_desc: "This internship enhanced my technical skills, especially in areas like backend and web development and database management, which will be valuable in my future work.",
		long_desc:
			"Throughout the duration of my internship, I had the opportunity to immerse myself in a diverse array of technologies, ranging from Microservices, Java SpringBoot, Hibernate, and various databases such as PostgreSQL and MongoDB, to integrating with external APIs like the OpenWeatherMap API. Additionally, I honed my web development skills, delving into HTML, CSS, and JavaScript. This invaluable experience has firmly established a robust foundation in these technologies, igniting my enthusiasm to further explore and leverage them in my forthcoming professional undertakings.",
		start_date: "June 2022",
		end_date: "July 2022",
	},
	{
		company: "Tasarımla - tasarımla.com",
		position: "Freelance Web Developer",
		img: "res/tasarimla_logo.png",
		short_desc: "I created a product catalog website using HTML, CSS, and JS, hosted it on Natro's reliable platform, and gained Linux-based cPanel expertise.",
		long_desc:
			"As part of my journey in web development, I took on the task of creating a dynamic product catalog website. Using a blend of HTML, CSS, and JavaScript, I designed and developed this platform to showcase a range of promotional products. For hosting, I selected dependable and efficient service provider that ensured the website's reliable accessibility. Additionally, I explored Linux-based cPanel administration during this project, which enhanced my skill set. This experience has strengthened my web development skills and expanded my understanding of web hosting, preparing me for future projects in this field.",
		start_date: "March 2022",
		end_date: "April 2022",
	},
];
const LIST_SIZE = experiences.length;

// ************************ JS Starts ************************
loadExperiences();
firstLoadAnimations();
interactiveExperiencesScrollBar();

// ******************** Declare Functions ********************
function firstLoadAnimations() {
	let header = document.getElementById("experience_header");
	let secondaryHeader = document.getElementById("secondary_header");
	let paragraph = document.getElementById("experience_paragraph");
	let buttons = document.getElementById("button_div");
	let experiencesDiv = document.getElementById("list_wrapper");

	setTimeout(() => header.classList.remove("hide_only_opacity"), 250);
	setTimeout(() => secondaryHeader.classList.remove("hide"), 500);
	setTimeout(() => paragraph.classList.remove("hide"), 750);
	setTimeout(() => buttons.classList.remove("hide"), 1000);
	setTimeout(() => experiencesDiv.classList.remove("hide"), 1000);
	setTimeout(() => experiencesDiv.classList.add("perspective"), 1250);
}

function loadExperiences() {
	let experiencesDiv = document.getElementById("list_div");

	experiences.forEach((experience) => {
		// Main div for each experience
		let expDiv = document.createElement("div");
		expDiv.className = "slider_box";
		experiencesDiv.appendChild(expDiv);

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
		image.src = experience.img;
		image.className = "company_logo";
		topLeftDiv.appendChild(image);

		// Top right div for company name and position
		let topRightDiv = document.createElement("div");
		topRightDiv.className = "top_right_exp_div";
		topDiv.appendChild(topRightDiv);

		// Company name
		let compName = document.createElement("h2");
		compName.className = "comp_name_exp";
		compName.innerHTML = experience.company;
		topRightDiv.appendChild(compName);

		// Position
		let positionName = document.createElement("h2");
		positionName.className = "position_exp";
		positionName.innerHTML = experience.position;
		topRightDiv.appendChild(positionName);

		// Div for date range
		let dateDiv = document.createElement("div");
		dateDiv.className = "date_exp_div";
		expDiv.appendChild(dateDiv);

		// Date range
		let date = document.createElement("h3");
		date.className = "date_exp";
		date.innerHTML = experience.start_date + " - " + experience.end_date;
		dateDiv.appendChild(date);

		// Bottom div for short description paragraph
		let bottomDiv = document.createElement("div");
		bottomDiv.className = "bottom_exp_div";
		expDiv.appendChild(bottomDiv);

		// Short description paragraph
		let shortParagraph = document.createElement("p");
		shortParagraph.className = "short_exp_paragraph";
		shortParagraph.innerHTML = experience.short_desc;
		bottomDiv.appendChild(shortParagraph);
	});
}

function interactiveExperiencesScrollBar() {
	let up = document.getElementById("up");
	let down = document.getElementById("down");
	let list = document.getElementById("list_div");
	let wrapper = document.getElementById("list_wrapper");

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
			loadNewExperience("up");
		}
	});

	down.addEventListener("click", () => {
		if (index + 1 < LIST_SIZE) {
			current -= step;
			list.style.transform = "translateY(" + current + "px)";
			index++;

			adjustOtherDivs();
			loadNewExperience("down");
		}
	});

	function adjustOtherDivs() {
		for (let i = 0; i < list.children.length; i++) {
			list.children[i].classList.remove("second_level_hide");
			list.children[i].classList.remove("first_level_hide");
		}

		if (index + 1 < LIST_SIZE) {
			list.children[index + 1].classList.add("first_level_hide");
		}

		if (index - 1 >= 0) {
			list.children[index - 1].classList.add("first_level_hide");
		}

		if (index + 2 < LIST_SIZE) {
			list.children[index + 2].classList.add("second_level_hide");
		}

		if (index - 2 >= 0) {
			list.children[index - 2].classList.add("second_level_hide");
		}
	}

	function loadNewExperience(direction) {
		let infoDiv = document.getElementById("information_div");

		infoDiv.style.transform = "translateY(" + (direction === "up" ? "+" : "-") + "15%)";
		infoDiv.style.opacity = "0";

		setTimeout(() => {
			document.getElementById("secondary_header").innerHTML = experiences[index].company.split(" ")[0] + " • " + experiences[index].position;
			document.getElementById("experience_paragraph").innerHTML = experiences[index].long_desc;

			infoDiv.style.transition = "none";
			infoDiv.style.transform = "translateY(" + (direction === "down" ? "+" : "-") + "15%)";

			infoDiv.style.transition = "transform 500ms ease, opacity 500ms ease";
			infoDiv.style.transform = "translateY(0%)";
			infoDiv.style.opacity = "1";
		}, 500);
	}
}
