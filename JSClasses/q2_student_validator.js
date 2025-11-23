const validationRules = {
  name: /^[a-zA-Z\s]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\d{10}$/,
  password: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/
};

const errorMessages = {
  name: "Name must contain only alphabets",
  email: "Email must be in format: example@domain.com",
  phone: "Phone must be exactly 10 digits",
  password: "Password must contain 1 uppercase, 1 number, and 1 special character"
};

function validateField(fieldName, value) {
  return validationRules[fieldName].test(value);
}

function handleValidation(event) {
  const field = event.target;
  const isValid = validateField(field.name, field.value);
  
  if (isValid) {
    field.style.borderColor = "green";
    field.style.borderWidth = "2px";
    document.getElementById(`${field.name}Error`).textContent = "";
  } else {
    field.style.borderColor = "red";
    field.style.borderWidth = "2px";
    document.getElementById(`${field.name}Error`).textContent = errorMessages[field.name];
    document.getElementById(`${field.name}Error`).style.color = "red";
  }
}

function initializeForm() {
  document.querySelectorAll(".validation-form input").forEach(input => {
    input.addEventListener("blur", handleValidation);
  });
}

// HTML to add in your page:
/*
<form class="validation-form">
  <div>
    <input type="text" name="name" placeholder="Full Name" />
    <span id="nameError"></span>
  </div>
  <div>
    <input type="email" name="email" placeholder="Email" />
    <span id="emailError"></span>
  </div>
  <div>
    <input type="text" name="phone" placeholder="Phone (10 digits)" />
    <span id="phoneError"></span>
  </div>
  <div>
    <input type="password" name="password" placeholder="Password" />
    <span id="passwordError"></span>
  </div>
  <button type="submit">Register</button>
</form>
<script src="q2_student_validator.js"></script>
*/

window.addEventListener("DOMContentLoaded", initializeForm);
