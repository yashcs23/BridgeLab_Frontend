const bookingValidation = {
  name: /^[a-zA-Z\s]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  seats: /^([1-9]|10)$/
};

function validateBooking(name, email, seats) {
  const errors = {};

  if (!bookingValidation.name.test(name)) {
    errors.name = "Name must contain only alphabets";
  }
  if (!bookingValidation.email.test(email)) {
    errors.email = "Email must be in valid format";
  }
  if (!bookingValidation.seats.test(seats)) {
    errors.seats = "Seats must be between 1 and 10";
  }

  return { isValid: Object.keys(errors).length === 0, errors };
}

function handleBooking(event) {
  event.preventDefault();

  const name = document.getElementById("bookingName").value;
  const email = document.getElementById("bookingEmail").value;
  const seats = document.getElementById("bookingSeats").value;

  const validation = validateBooking(name, email, seats);

  if (validation.isValid) {
    const booking = { name, email, seats: parseInt(seats) };
    displayTicket(booking);
    clearErrors();
  } else {
    displayErrors(validation.errors);
  }
}

function displayTicket(booking) {
  const ticketDiv = document.getElementById("ticketDetails");
  ticketDiv.innerHTML = `
    <div style="border: 2px solid green; padding: 20px; margin-top: 20px; border-radius: 8px; background-color: #f0f8f0;">
      <h3 style="color: green;">✓ Booking Confirmed</h3>
      <p><strong>Name:</strong> ${booking.name}</p>
      <p><strong>Email:</strong> ${booking.email}</p>
      <p><strong>Seats:</strong> ${booking.seats}</p>
      <p style="color: green;"><strong>Status:</strong> Confirmed</p>
    </div>
  `;
}

function displayErrors(errors) {
  Object.keys(errors).forEach(field => {
    const errorSpan = document.getElementById(`${field}Error`);
    if (errorSpan) {
      errorSpan.textContent = errors[field];
      errorSpan.style.color = "red";
    }
  });
}

function clearErrors() {
  document.querySelectorAll("[id$='Error']").forEach(el => el.textContent = "");
}

// HTML to add:
/*
<form id="bookingForm" onsubmit="handleBooking(event)">
  <div>
    <input type="text" id="bookingName" placeholder="Full Name" />
    <span id="nameError" style="color: red;"></span>
  </div>
  <div>
    <input type="email" id="bookingEmail" placeholder="Email" />
    <span id="emailError" style="color: red;"></span>
  </div>
  <div>
    <input type="number" id="bookingSeats" placeholder="Seats (1-10)" />
    <span id="seatsError" style="color: red;"></span>
  </div>
  <button type="submit">Book Ticket</button>
</form>
<div id="ticketDetails"></div>
<script src="q5_movie_booking.js"></script>
*/
