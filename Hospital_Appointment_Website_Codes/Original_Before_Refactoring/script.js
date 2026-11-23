document.getElementById("appointmentForm")
.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Appointment booked successfully!");
    this.reset();
});
