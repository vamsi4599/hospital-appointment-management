const appointmentForm =
    document.getElementById("appointmentForm");

const statusMessage =
    document.getElementById("statusMessage");

appointmentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    statusMessage.textContent =
        "Appointment submitted successfully!";

    appointmentForm.reset();
});
