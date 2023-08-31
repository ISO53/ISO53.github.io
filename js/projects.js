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

const exampleProject = {
	id: 652569528,
	node_id: "R_kgDOJuVruA",
	name: "Backgammon-Game-Server-and-Client",
	full_name: "ISO53/Backgammon-Game-Server-and-Client",
	private: false,
	owner: {
		login: "ISO53",
		id: 102249575,
		node_id: "U_kgDOBhg0Zw",
		avatar_url: "https://avatars.githubusercontent.com/u/102249575?v=4",
		gravatar_id: "",
		url: "https://api.github.com/users/ISO53",
		html_url: "https://github.com/ISO53",
		followers_url: "https://api.github.com/users/ISO53/followers",
		following_url: "https://api.github.com/users/ISO53/following{/other_user}",
		gists_url: "https://api.github.com/users/ISO53/gists{/gist_id}",
		starred_url: "https://api.github.com/users/ISO53/starred{/owner}{/repo}",
		subscriptions_url: "https://api.github.com/users/ISO53/subscriptions",
		organizations_url: "https://api.github.com/users/ISO53/orgs",
		repos_url: "https://api.github.com/users/ISO53/repos",
		events_url: "https://api.github.com/users/ISO53/events{/privacy}",
		received_events_url: "https://api.github.com/users/ISO53/received_events",
		type: "User",
		site_admin: false,
	},
	html_url: "https://github.com/ISO53/Backgammon-Game-Server-and-Client",
	description:
		"This project consists of a Java server that provides a multiplayer Backgammon game functionality, allowing clients to connect to a room and engage in interactive gameplay, with the client-side implemented using Electron.js.",
	fork: false,
	url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client",
	forks_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/forks",
	keys_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/keys{/key_id}",
	collaborators_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/collaborators{/collaborator}",
	teams_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/teams",
	hooks_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/hooks",
	issue_events_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/issues/events{/number}",
	events_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/events",
	assignees_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/assignees{/user}",
	branches_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/branches{/branch}",
	tags_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/tags",
	blobs_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/git/blobs{/sha}",
	git_tags_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/git/tags{/sha}",
	git_refs_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/git/refs{/sha}",
	trees_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/git/trees{/sha}",
	statuses_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/statuses/{sha}",
	languages_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/languages",
	stargazers_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/stargazers",
	contributors_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/contributors",
	subscribers_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/subscribers",
	subscription_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/subscription",
	commits_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/commits{/sha}",
	git_commits_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/git/commits{/sha}",
	comments_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/comments{/number}",
	issue_comment_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/issues/comments{/number}",
	contents_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/contents/{+path}",
	compare_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/compare/{base}...{head}",
	merges_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/merges",
	archive_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/{archive_format}{/ref}",
	downloads_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/downloads",
	issues_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/issues{/number}",
	pulls_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/pulls{/number}",
	milestones_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/milestones{/number}",
	notifications_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/notifications{?since,all,participating}",
	labels_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/labels{/name}",
	releases_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/releases{/id}",
	deployments_url: "https://api.github.com/repos/ISO53/Backgammon-Game-Server-and-Client/deployments",
	created_at: "2023-06-12T10:42:59Z",
	updated_at: "2023-08-31T13:03:27Z",
	pushed_at: "2023-06-12T11:22:39Z",
	git_url: "git://github.com/ISO53/Backgammon-Game-Server-and-Client.git",
	ssh_url: "git@github.com:ISO53/Backgammon-Game-Server-and-Client.git",
	clone_url: "https://github.com/ISO53/Backgammon-Game-Server-and-Client.git",
	svn_url: "https://github.com/ISO53/Backgammon-Game-Server-and-Client",
	homepage: null,
	size: 7994,
	stargazers_count: 1,
	watchers_count: 1,
	language: "Java",
	has_issues: true,
	has_projects: true,
	has_downloads: true,
	has_wiki: true,
	has_pages: false,
	has_discussions: false,
	forks_count: 0,
	mirror_url: null,
	archived: false,
	disabled: false,
	open_issues_count: 0,
	license: {
		key: "gpl-3.0",
		name: "GNU General Public License v3.0",
		spdx_id: "GPL-3.0",
		url: "https://api.github.com/licenses/gpl-3.0",
		node_id: "MDc6TGljZW5zZTk=",
	},
	allow_forking: true,
	is_template: false,
	web_commit_signoff_required: false,
	topics: [],
	visibility: "public",
	forks: 0,
	open_issues: 0,
	watchers: 1,
	default_branch: "master",
};

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
	setTimeout(() => (projectsDiv.style.transform = "perspective(300px) rotateY(-10deg)"), 1250);
}

function loadProjects() {
	let projectsDiv = document.getElementById("list_div");

	projects.forEach((project) => {
		// Main div for each project
		let projectDiv = document.createElement("div");
		projectDiv.className = "slider_box";
		projectsDiv.appendChild(projectDiv);

		
	});
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
			document.getElementById("main_paragraph").innerHTML = projects[index].long_desc;

			infoDiv.style.transition = "none";
			infoDiv.style.transform = "translateY(" + (direction === "down" ? "+" : "-") + "15%)";

			infoDiv.style.transition = "transform 500ms ease, opacity 500ms ease";
			infoDiv.style.transform = "translateY(0%)";
			infoDiv.style.opacity = "1";
		}, 500);
	}
}
