// Get the body element
const body = document.body;

// ------- Footer --------

// Create a footer element
let footer = document.createElement("footer");
// Append the footer to the body
body.appendChild(footer);

// Create a new Date object
const today = new Date ();
// Get current year
const thisYear = today.getFullYear();
// Get the current footer element
footer = document.querySelector("footer"); 
// Create a new <p> element
const copyright = document.createElement("p");
// Set the inner HTML with copyright symbol, your name, and year
// <p> copyright Rebecca Kim 2025
copyright.innerHTML = `\u00A9 Rebecca Kim ${thisYear}`  
// Append <p> to the footer
footer.appendChild(copyright);
// Center the footer
footer.style.textAlign = "center";

// ------- Skills --------
// List your technical skills
const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub"];

// Select the Skills section by id
const skillsSection = document.getElementById("Skills");
// Select the empty <ul> inside the skills section
const skillsList = skillsSection.querySelector("ul");

// Loop through the skills array
for (let i = 0; i < skills.length; i++) {
  // Create a new <li> element
  const skill = document.createElement("li");
  // Set the text of each li to the current skill
  skill.innerText = skills[i];
  // Append the <li> to the skills list
  skillsList.appendChild(skill);
}

// skills.forEach(skill => {
//   // Create a new <li> element
//   const element = document.createElement("li");
//   // Set the text of each li to the current skill
//   element.innerText = skill;
//   // Append the <li> to the skills list
//   skillsList.appendChild(element);
// });

