// Replace this with your Vishwa Vikshnam Tours WhatsApp number.
// Use country code without + or spaces, e.g. 919876543210
const WHATSAPP_NUMBER = "919999999999";

document.getElementById("enquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const destination = document.getElementById("destination").value;
  const message = document.getElementById("message").value.trim();

  const text =
    `Namaste Vishwa Vikshnam Tours,%0A%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Phone: ${encodeURIComponent(phone)}%0A` +
    `Destination: ${encodeURIComponent(destination)}%0A` +
    `Requirements: ${encodeURIComponent(message || "Not specified")}`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
});
