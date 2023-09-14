// ******************** Declare Variables ********************
let PROJECTS;
let LANGUAGES = {};
let LIST_SIZE;

// ************************ JS Starts ************************
loadProjects();
firstLoadAnimations();
interactiveProjectsScrollBar();

// ******************** Declare Functions ********************
function firstLoadAnimations() {
	let header = document.getElementById("header");
	let secondaryHeader = document.getElementById("secondary_header");
	let paragraph = document.getElementById("main_paragraph");
	let buttons = document.getElementById("button_div");
	let projectsDiv = document.getElementById("list_wrapper");

	setTimeout(() => header.classList.remove("hide_only_opacity"), 250);
	setTimeout(() => secondaryHeader.classList.remove("hide"), 500);
	setTimeout(() => paragraph.classList.remove("hide"), 750);
	setTimeout(() => buttons.classList.remove("hide"), 1000);
	setTimeout(() => projectsDiv.classList.remove("hide"), 1000);
	setTimeout(() => projectsDiv.classList.add("perspective"), 1250);
}

function loadProjects() {
	const apiUrl = "https://iso53-github-io-serverless.vercel.app/api/repos";
	// https://iso53-github-io-serverless.vercel.app/api/repos 	[WITH AUTH]
	// https://api.github.com/users/iso53/repos 				[NO AUTH]

	fetch(apiUrl)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`GitHub API request failed with status: ${response.status}`);
			}
			return response.json();
		})
		.then((data) => (PROJECTS = data) && loadEachProject(data))
		.catch((error) => console.error("Error:", error));

	function loadEachProject(projects) {
		let projectsDiv = document.getElementById("list_div");
		LIST_SIZE = projects.length;

		projects.forEach((project) => {
			// Load language

			// https://iso53-github-io-serverless.vercel.app/api/languages?repo_name=project.name	[WITH AUTH]
			// project.languages_url																[NO AUTH]
			fetch(`https://iso53-github-io-serverless.vercel.app/api/languages?repo_name=${project.name}`)
				.then((response) => response.json())
				.then((data) => (LANGUAGES[project.id] = data))
				.catch((error) => console.error("Error:", error));

			// Main div for each project
			let projectDiv = document.createElement("div");
			projectDiv.className = "slider_box";
			projectsDiv.appendChild(projectDiv);

			// Top div for repo name and state
			let topDiv = document.createElement("div");
			topDiv.className = "project_top_div";
			projectDiv.appendChild(topDiv);

			// H2 element for repo name
			let repoName = document.createElement("h2");
			repoName.innerHTML = project.name.replace(/-/g, " ");
			repoName.className = "project_name";
			topDiv.appendChild(repoName);

			// Public / private tag
			let tag = document.createElement("span");
			tag.innerHTML = project.private === true ? "Private" : "Public";
			tag.className = "tag";
			topDiv.appendChild(tag);

			// Middle div for repo description
			let middleDiv = document.createElement("div");
			middleDiv.className = "project_middle_div";
			projectDiv.appendChild(middleDiv);

			// Readme
			let description = document.createElement("p");
			description.innerHTML = project.description;
			description.className = "project_desc";
			middleDiv.appendChild(description);

			// Bottom div for project details
			let bottomDiv = document.createElement("div");
			bottomDiv.className = "project_bottom_div";
			projectDiv.appendChild(bottomDiv);

			// Language
			let lang = document.createElement("h3");
			lang.className = "project_lang";
			lang.innerHTML = project.language;
			bottomDiv.appendChild(lang);

			// Stargazers image
			let stars = document.createElement("img");
			stars.className = "project_stars";
			stars.alt = "star logo";
			stars.src = "res/star.svg";
			bottomDiv.appendChild(stars);

			// Stargazers count
			let starsCount = document.createElement("h3");
			starsCount.className = "project_stars_count";
			starsCount.innerHTML = project.stargazers_count;
			bottomDiv.appendChild(starsCount);

			if (project.license !== null) {
				// License image
				let license = document.createElement("img");
				license.className = "project_license";
				license.alt = "license logo";
				license.src = "res/license.svg";
				bottomDiv.appendChild(license);

				// License name
				let licenseName = document.createElement("h3");
				licenseName.className = "project_license_name";
				licenseName.innerHTML = project.license.spdx_id;
				bottomDiv.appendChild(licenseName);
			}

			// Hover animation
			projectDiv.onmouseleave = (e) => {
				e.target.style.background = "black";
				e.target.style.borderImage = null;
			};

			projectDiv.addEventListener("mousemove", (e) => {
				const rect = projectDiv.getBoundingClientRect();
				const x = e.clientX - rect.left; //x position within the element.
				const y = e.clientY - rect.top; //y position within the element.
				projectDiv.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.2),rgba(255,255,255,0) )`;
				projectDiv.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
			});
		});
	}
}

function interactiveProjectsScrollBar() {
	let up = document.getElementById("up");
	let down = document.getElementById("down");
	let list = document.getElementById("list_div");
	let wrapper = document.getElementById("list_wrapper");

	const step = 150 + 25; // 150px height + 50px margin
	const startPos = wrapper.offsetHeight / 2 - step / 2 - 12.5;

	let current = startPos;
	let index = 0;

	list.style.transform = "translateY(" + current + "px)";
	setTimeout(() => adjustOtherDivs(), 1500);

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
			list.children[i].classList.remove("first_level_hide");
			list.children[i].classList.remove("second_level_hide");
			list.children[i].classList.remove("third_level_hide");
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

		if (index + 3 < LIST_SIZE) {
			list.children[index + 3].classList.add("third_level_hide");
		}

		if (index - 3 >= 0) {
			list.children[index - 3].classList.add("third_level_hide");
		}
	}

	function loadNewproject(direction) {
		let infoDiv = document.getElementById("information_div");
		let secondaryHeader = document.getElementById("secondary_header");
		let mainParagraph = document.getElementById("main_paragraph");
		let languagesDiv = document.getElementById("project_languages_div");
		let otherDetailsDiv = document.getElementById("project_other_details_div");
		let tagsDiv = document.getElementById("projects_tags_div");

		infoDiv.style.transform = "translateY(" + (direction === "up" ? "+" : "-") + "15%)";
		infoDiv.style.opacity = "0";

		setTimeout(() => {
			// Header
			secondaryHeader.innerHTML = PROJECTS[index].full_name.replace(/-/g, " ") + "<h4 id='arrow'>➚</h4>";
			secondaryHeader.setAttribute("href", PROJECTS[index].html_url);
			mainParagraph.innerHTML = PROJECTS[index].description;

			// Languages
			languagesDiv.innerHTML = "";
			let total = 0;
			Object.keys(LANGUAGES[PROJECTS[index].id]).forEach((key) => (total += LANGUAGES[PROJECTS[index].id][key]));

			Object.keys(LANGUAGES[PROJECTS[index].id]).forEach((key) => {
				let value = LANGUAGES[PROJECTS[index].id][key];

				let langDiv = document.createElement("div");
				langDiv.className = "lang_div";
				languagesDiv.appendChild(langDiv);

				let langInnerDiv = document.createElement("div");
				langInnerDiv.className = "lang_inner_div";
				langDiv.appendChild(langInnerDiv);

				let langLevel = document.createElement("div");
				langLevel.className = "lang_level";
				langLevel.style.width = (100 * value) / total + "px";
				langInnerDiv.appendChild(langLevel);

				let lang = document.createElement("h4");
				lang.className = "language";
				lang.innerHTML = key;
				langDiv.appendChild(lang);
			});

			// Other details
			otherDetailsDiv.innerHTML = "";

			// Last Updated
			let lastUpdatedDiv = document.createElement("div");
			lastUpdatedDiv.className = "detail_div";
			otherDetailsDiv.appendChild(lastUpdatedDiv);

			let lastUpdateLogo = document.createElement("img");
			lastUpdateLogo.src = "res/date.svg";
			lastUpdateLogo.className = "details_logo";
			lastUpdatedDiv.appendChild(lastUpdateLogo);

			let lastUpdateDate = document.createElement("h4");
			lastUpdateDate.className = "details_text";
			lastUpdateDate.innerHTML = formatDate(PROJECTS[index].updated_at);
			lastUpdatedDiv.appendChild(lastUpdateDate);

			// License
			let licenseDiv = document.createElement("div");
			licenseDiv.className = "detail_div";
			otherDetailsDiv.appendChild(licenseDiv);

			let licenseLogo = document.createElement("img");
			licenseLogo.src = "res/license.svg";
			licenseLogo.className = "details_logo";
			licenseDiv.appendChild(licenseLogo);

			let licenseName = document.createElement("h4");
			licenseName.className = "details_text";
			licenseName.innerHTML = PROJECTS[index].license === null ? "No License" : PROJECTS[index].license.name;
			licenseDiv.appendChild(licenseName);

			// Stars
			let starsDiv = document.createElement("div");
			starsDiv.className = "detail_div";
			otherDetailsDiv.appendChild(starsDiv);

			let starsLogo = document.createElement("img");
			starsLogo.src = "res/star.svg";
			starsLogo.className = "details_logo";
			starsDiv.appendChild(starsLogo);

			let starCount = document.createElement("h4");
			starCount.className = "details_text";
			starCount.innerHTML = PROJECTS[index].stargazers_count;
			starsDiv.appendChild(starCount);

			// Watchers
			let watchersDiv = document.createElement("div");
			watchersDiv.className = "detail_div";
			otherDetailsDiv.appendChild(watchersDiv);

			let watchersLogo = document.createElement("img");
			watchersLogo.src = "res/eye.svg";
			watchersLogo.className = "details_logo";
			watchersDiv.appendChild(watchersLogo);

			let watchersCount = document.createElement("h4");
			watchersCount.className = "details_text";
			watchersCount.innerHTML = PROJECTS[index].watchers_count;
			watchersDiv.appendChild(watchersCount);

			// Topics
			tagsDiv.innerHTML = "";
			PROJECTS[index].topics.forEach((topic) => {
				let tagDiv = document.createElement("div");
				tagDiv.className = "tiny_box";
				tagsDiv.appendChild(tagDiv);

				let tagName = document.createElement("h3");
				tagName.innerHTML = topic;
				tagName.className = "tiny_box_name";
				tagDiv.appendChild(tagName);
			});

			// ---
			infoDiv.style.transition = "none";
			infoDiv.style.transform = "translateY(" + (direction === "down" ? "+" : "-") + "15%)";

			infoDiv.style.transition = "transform 500ms ease, opacity 500ms ease";
			infoDiv.style.transform = "translateY(0%)";
			infoDiv.style.opacity = "1";
		}, 500);
	}
}

function formatDate(date) {
	const dateObj = new Date(date);

	// Extract day, month, and year components
	const day = dateObj.getDate();
	const month = dateObj.toLocaleString("default", { month: "long" });
	const year = dateObj.getFullYear();

	// Create the formatted string
	return `${day} ${month} ${year}`;
}
