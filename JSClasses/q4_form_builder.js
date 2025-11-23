class FormBuilder {
  constructor(fields, containerId) {
    this.fields = fields;
    this.containerId = containerId;
    this.formData = {};
  }

  render() {
    const container = document.getElementById(this.containerId);
    let formHTML = '<form id="dynamicForm">';

    this.fields.forEach((field, index) => {
      formHTML += `
        <div style="margin-bottom: 15px;">
          <label for="field${index}" style="display: block; margin-bottom: 5px; font-weight: bold;">
            ${field.label}
          </label>
          <input 
            type="${field.type}" 
            id="field${index}" 
            name="${field.name}" 
            placeholder="${field.placeholder || ''}"
            style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"
            required
          />
        </div>
      `;
    });

    formHTML += '<button type="submit" style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Submit</button>';
    formHTML += '</form>';

    container.innerHTML = formHTML;
    document.getElementById("dynamicForm").addEventListener("submit", (e) => this.handleSubmit(e));
  }

  getFormData() {
    const form = document.getElementById("dynamicForm");
    const formDataObj = new FormData(form);
    this.formData = Object.fromEntries(formDataObj);
    return this.formData;
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = this.getFormData();
    console.log("Form Data:", data);
    alert("Form submitted! Check console for data.");
  }
}

// Example usage
const fields = [
  { type: "text", name: "username", label: "Username", placeholder: "Enter username" },
  { type: "email", name: "email", label: "Email", placeholder: "Enter email" },
  { type: "text", name: "address", label: "Address", placeholder: "Enter address" },
  { type: "number", name: "age", label: "Age", placeholder: "Enter age" },
];

// HTML to add:
/*
<div id="formContainer"></div>
<script src="q4_form_builder.js"></script>
<script>
  const builder = new FormBuilder(fields, "formContainer");
  builder.render();
</script>
*/
