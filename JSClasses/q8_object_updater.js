let user = { name: "John", email: "john@mail.com", age: 21 };

function initializeUpdater() {
  populateForm();
  document.getElementById("updateForm").addEventListener("submit", handleUpdate);
  displayUserDetails();
}

function populateForm() {
  document.getElementById("updateName").value = user.name;
  document.getElementById("updateEmail").value = user.email;
  document.getElementById("updateAge").value = user.age;
}

function handleUpdate(event) {
  event.preventDefault();

  user.name = document.getElementById("updateName").value;
  user.email = document.getElementById("updateEmail").value;
  user.age = parseInt(document.getElementById("updateAge").value);

  displayUserDetails();
  document.getElementById("updateMessage").textContent = "✓ User details updated!";
  document.getElementById("updateMessage").style.color = "green";
  
  setTimeout(() => {
    document.getElementById("updateMessage").textContent = "";
  }, 2000);
}

function displayUserDetails() {
  const detailsDiv = document.getElementById("userDetails");
  detailsDiv.innerHTML = `
    <div style="border: 2px solid #007bff; padding: 15px; border-radius: 8px; background-color: #f0f7ff;">
      <h3>Current User Details:</h3>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Age:</strong> ${user.age}</p>
    </div>
  `;
}

// HTML to add:
/*
<form id="updateForm">
  <div>
    <label>Name:</label>
    <input type="text" id="updateName" />
  </div>
  <div>
    <label>Email:</label>
    <input type="email" id="updateEmail" />
  </div>
  <div>
    <label>Age:</label>
    <input type="number" id="updateAge" />
  </div>
  <button type="submit">Update</button>
</form>
<p id="updateMessage"></p>
<div id="userDetails"></div>
<script src="q8_object_updater.js"></script>
<script>
  window.addEventListener("DOMContentLoaded", initializeUpdater);
</script>
*/
