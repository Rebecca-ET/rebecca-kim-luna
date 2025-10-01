// Get the body element
const body = document.body;

// ------- Footer --------

// Create a footer element
let footer = document.createElement("footer");
// Append the footer to the body
body.appendChild(footer);

// Create a new Date object
const today = new Date();
// Get current year
const thisYear = today.getFullYear();
// Get the current footer element
footer = document.querySelector("footer");
// Create a new <p> element
const copyright = document.createElement("p");
// Set the inner HTML with copyright symbol, your name, and year
// <p> copyright Rebecca Kim 2025
copyright.innerHTML = `\u00A9 Rebecca Kim ${thisYear}`;
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

// ------------- MESSAGE FORM --------------

// Helper function to toggle messages section visibility
function toggleMessagesSection() {
  const messageSection = document.getElementById("Messages");
  const messageList = messageSection.querySelector("ul");
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  } else {
    messageSection.style.display = "block";
  }
}

//Initially hide the messages section (we start out with 0 messages)
toggleMessagesSection();

// Select the leave_message form by name
const messageForm = document.querySelector("form[name=leave_messages]");

// Add an event listener to handle "submit"
messageForm.addEventListener("submit", function (event) {
  //Prevent the page refresh
  event.preventDefault();

  // Retrieve form field values
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  // Log values to log
  console.log("Name:", userName);
  console.log("Email:", userEmail);
  console.log("Message:", userMessage);

  // Select the #Messages section
  const messageSection = document.getElementById("Messages");

  // Select the <ul> inside the #Messages section
  const messageList = messageSection.querySelector("ul");

  // Create a new list item
  const newMessage = document.createElement("li");

  // Set the inner HTML
  newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}"</a>: <span>${userMessage}</span>`;

  //Create an edit button
  const editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.className = "edit-btn";
  editButton.type = "button";

  // Add click event listener to edit the message
  editButton.addEventListener("click", function () {
    //Find the message portion
    const messageSpan = newMessage.querySelector("span");
    // Prompt the user for a new message
    const newText = prompt("Edit your message: ", messageSpan.innerText);
    //Update the message
    if (newText !== null) {
      messageSpan.innerText = newText;
    }
  });

  // Append the edit button to new message
  newMessage.appendChild(editButton);

  // Create a remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.className = "remove-btn";
  removeButton.type = "button";

  // Add click event listener to remove the message
  removeButton.addEventListener("click", function () {
    // Find the <li>
    const entry = removeButton.parentNode;
    // Remove it
    entry.remove();
    // Toggle if there are no more messages
    toggleMessagesSection();
  });

  // Append the remove button to the new message
  newMessage.appendChild(removeButton);

  // Append the new message to the message list
  messageList.appendChild(newMessage);

  //Toggle if a new message exists
  toggleMessagesSection();

  // Clear form after submission
  messageForm.reset();
});
