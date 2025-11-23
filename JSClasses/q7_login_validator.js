const loginValidation = {
  username: /^[a-zA-Z0-9_]{5,}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/
};

const loginErrors = {
  username: "Username must be at least 5 characters (alphanumeric and underscore only)",
  password: "Password must be at least 8 characters with uppercase, lowercase, number, and special character"
};

function validateLogin(username, password) {
  const errors = {};

  if (!loginValidation.username.test(username)) {
    errors.username = loginErrors.username;
  }
  if (!loginValidation.password.test(password)) {
    errors.password = loginErrors.password;
  }

  return { isValid: Object.keys(errors).length === 0, errors };
}

function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const validation = validateLogin(username, password);
  const messageDiv = document.getElementById("loginMessage");

  if (validation.isValid) {
    messageDiv.innerHTML = '<p style="color: green; font-weight: bold;">✓ Login Successful!</p>';
    messageDiv.style.display = "block";
    document.getElementById("loginForm").reset();
  } else {
    let errorHTML = '<p style="color: red; font-weight: bold;">✗ Validation Failed:</p><ul>';
    Object.values(validation.errors).forEach(error => {
      errorHTML += `<li>${error}</li>`;
    });
    errorHTML += '</ul>';
    messageDiv.innerHTML = errorHTML;
    messageDiv.style.display = "block";
  }
}

// HTML to add:
/*
<form id="loginForm" onsubmit="handleLogin(event)">
  <div>
    <label>Username:</label>
    <input type="text" id="loginUsername" placeholder="At least 5 characters" />
  </div>
  <div>
    <label>Password:</label>
    <input type="password" id="loginPassword" placeholder="At least 8 characters" />
  </div>
  <button type="submit">Login</button>
</form>
<div id="loginMessage"></div>
<script src="q7_login_validator.js"></script>
*/
