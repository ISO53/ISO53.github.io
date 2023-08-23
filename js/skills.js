// ******************** Declare Variables ********************
const skills = [
	"Core Java",
	"Enterprise Java",
	"Object-Oriented Programming (OOP)",
	"Design Patterns",
	"Backend Development",
	"SpringBoot",
	"REST APIs",
	"Server Management",
	"Microservices",
	"Socket Programming",
	"C",
	"Git & Github",
	"Multithread Development",
	"Performance Optimization Techniques",
	"Efficient Algorithm Implementation",
	"Frontend Development",
	"HTML",
	"CSS",
	"JavaScript",
	"User Interface (UI)",
	"Data Structures",
	"Database Management",
	"MongoDB",
	"PostgreSQL",
	"OracleSQL",
	"Containerization",
	"Docker",
	"Linux Programming",
	"Windows Programming",
	"Kali Linux",
	"Setoolkit",
	"Shell Management",
	"UI/UX Design Principles",
	"Hosting",
	"Cloud Services",
	"AWS (Amazon Web Services)",
	"Google Firebase",
	"Android App Development",
	"Vue.js",
	"Python Programming",
	"WordPress Development",
	"WordPress Plugins",
	"PL/SQL for Oracle",
	"SEO Techniques",
];

// ************************ JS Starts ************************
loadSkills();
firstLoadAnimations();

// ******************** Declare Functions ********************
function firstLoadAnimations() {
	let header = document.getElementById("skills_header");
	let secondaryHeader = document.getElementById("secondary_header");
	let paragraph = document.getElementById("skills_paragraph");
	let skillsDiv = document.getElementById("skills_list_div");

	setTimeout(() => header.classList.remove("hide_skills_header"), 250);
	setTimeout(() => secondaryHeader.classList.remove("hide_secondary_header"), 500);
	setTimeout(() => paragraph.classList.remove("hide_skills_paragraph"), 750);
	setTimeout(() => skillsDiv.classList.remove("hide_skills_list_div"), 1000);

}

function loadSkills() {
	let skillsDiv = document.getElementById("skills_list_div");

	for (let i = 0; i < skills.length; i++) {
		let div = document.createElement("div");
		div.className = "skill_div";
		skillsDiv.appendChild(div);

		let skillName = document.createElement("h3");
		skillName.className = "skill_name";
		skillName.innerHTML = skills[i];
		div.appendChild(skillName);
	}

	for (let i = 0; i < skills.length; i++) {
		let div = document.createElement("div");
		div.className = "skill_div";
		skillsDiv.appendChild(div);

		let skillName = document.createElement("h3");
		skillName.className = "skill_name";
		skillName.innerHTML = skills[i];
		div.appendChild(skillName);
	}
}
