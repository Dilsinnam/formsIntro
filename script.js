let name = "";
let email = "";
const nameField = document.querySelector("#nameField");
const emailField = document.querySelector("#emailField");
const sectionTag = document.querySelector("section");

document
  .querySelector("#registrationForm")
  .addEventListener("submit", function (event) {
    console.log("test");
    event.preventDefault();
    /* Using the below you can grab values */
    name = nameField.value;
    email = emailField.value;
    let template = `
        <h2>Thank you for registering. Your information is as follows:</h2>
        <h2>Name: ${name}</h2>
        <h2>Email: ${email}</h2>
    `;
    sectionTag.innerHTML = template;
  });

/**document.querySelector("#todoListForm").addEventListener("submit", function(event) {
    console.log("test")
    event.preventDefault();
    
}) **/
