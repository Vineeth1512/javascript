let bodyElement = document.querySelector("body");
console.log(bodyElement);
// ----------------------------------section first---------------------------------------------------
let wrapperElement = document.createElement("div");

let headElement = document.createElement("div");
headElement.className = "section";

let titleElement = document.createElement("h2");
titleElement.innerText = "Vineeth Kumar Mudham";

let mobileElement = document.createElement("p");
mobileElement.innerHTML =
  "<b>Number:</b> 9398695456 | <b>Mail:</b> vineethkumarmudham@gmail.com";

let linksElement = document.createElement("p");

linksElement.innerHTML =
  "<a href='https://www.linkedin.com/in/vineeth-kumar-mudham-9b4260196/'>LinkedIn</a> | <a href='https://github.com/Vineeth1512'>GitHub</a>";

headElement.append(titleElement, mobileElement, linksElement);
console.log(headElement);

//--------------------------------------------- Section Two ----------------------------------------

let profileElement = document.createElement("div");
profileElement.className = "section";
let profleTitle = document.createElement("h3");
profleTitle.innerText = "Profile Summary";

let ulElement = document.createElement("ul");
ulElement.innerHTML = `<li>Aspiring Java Developer with expertise in Core Java, Spring Boot, MySQL, and RESTful APIs.</li>
            `;

profileElement.append(profleTitle, ulElement);

// ---------------------- section 3 ----------------------------

let workElement = document.createElement("div");
workElement.className = "section";

let expTitle = document.createElement("h3");
expTitle.innerText = "Work Experience";

let roleElement = document.createElement("p");
roleElement.innerHTML = `<b>Full Stack Developer | SK Veda Info Pvt. Ltd. | 01/2022-10/2022</b>`;

let secUlElement = document.createElement("ul");

secUlElement.innerHTML = ` <li>Developed responsive web applications using HTML, CSS, JavaScript.</li>
                <li>Implemented RESTful APIs for seamless communication.</li>
                <li>Developed customer portals using Java Spring Boot & React.js.</li>`;

workElement.append(expTitle, roleElement, secUlElement);

//-----------------------------------------------------------------------

let educationElemenent = document.createElement("div");
educationElemenent.className = "section";

let edunameElement = document.createElement("h3");

edunameElement.innerText = "Education";
let eduParaElement = document.createElement("p");
eduParaElement.innerText =
  "TKR College of Engineering and Technology, Hyderabad | B.Tech (ECE) | 2017-2020 | CGPA: 6.26";
educationElemenent.append(edunameElement, eduParaElement);
//------------------------------------------------------

let technicalElement = document.createElement("div");
technicalElement.className = "section";

let techName = document.createElement("h3");

techName.innerText = "Technical Skills";

let techUlElement = document.createElement("ul");

techUlElement.innerHTML = `<li><b>Front-end:</b> HTML, CSS, JavaScript</li>
                <li><b>Back-end:</b> Java, Node.js + Express.js</li>
                <li><b>Database:</b> MySQL, PostgreSQL, MongoDB</li>
                <li><b>Frameworks:</b> React.js, Spring Boot</li>`;

technicalElement.append(techName, techUlElement);
//--------------------------------------------------------------------------------------------------

let softSkillsElement = document.createElement("div");
softSkillsElement.className = "section";

let headSoftElement = document.createElement("h3");
headSoftElement.innerText = "Soft Skills";

let ullElement = document.createElement("ul");
ullElement.innerHTML = `  <li>Communication, Problem-solving, Time management, Debugging</li>`;

softSkillsElement.append(headSoftElement, ullElement);

//-------------------------------------------------------------

let projectElemenent = document.createElement("div");
projectElemenent.className = "section";

let projectTitle = document.createElement("h3");
projectTitle.innerText = "Projects";

let projectParaELement = document.createElement("p");
projectParaELement.innerHTML = `<b>Portfolio Website</b> | <a href="https://vineeth-kumar-portfolio.netlify.app">Live Link</a>`;
let projectParasecond = document.createElement("p");
projectParasecond.innerHTML = `<b>Quiz Application</b> | <a href="https://first-quiz-hunt.vercel.app">Live Link</a>`;

projectElemenent.append(projectTitle, projectParaELement, projectParasecond);

//-----------------------------------------------

let achieventElement = document.createElement("div");
achieventElement.className = "section";

let achieveTitle = document.createElement("h3");
achieveTitle.innerText = "Achievements";

let achieveUlElement = document.createElement("ul");

achieveUlElement.innerHTML = `<li>Earned 4 badges on HackerRank for JS, SQL, and Java.</li>`;

achieventElement.append(achieveTitle, achieveUlElement);

bodyElement.append(
  headElement,
  profileElement,
  workElement,
  educationElemenent,
  technicalElement,
  softSkillsElement,
  projectElemenent,
  achieventElement
);
