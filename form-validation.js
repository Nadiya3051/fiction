function validateForm(event) {
  event.preventDefault();
  const name = document.forms["contactForm"]["name"].value;
  const email = document.forms["contactForm"]["email"].value;
  const subject = document.forms["contactForm"]["subject"].value;
  const message = document.forms["contactForm"]["message"].value;
  if (name == "" || email == "" || message == "") {
    alert("All fields are required");
    return false;
  }
  if (!email.includes("@")) {
    alert("Invalid email address");
    return false;
  }
  if (!name || !email || !subject || !message) {
    alert("All fields are required. Please fill out the form completely.");
    return;
  }
  alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
  document.getElementById("formMessage").innerHTML = "Message successfully submitted!"
  return true;
}

/*const form = document.getElementById("contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !subject || !message) {
    alert("All fields are required. Please fill out the form completely.");
    return;
  }
  alert("Form submitted successfully.");
  alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
});*/
