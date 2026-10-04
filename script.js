const WHATSAPP_NUMBER = "919966130722";

function sendWhatsApp(destination) {
  const name = document.getElementById("name")?.value.trim() || "";
  const phone = document.getElementById("phone")?.value.trim() || "";
  const message = document.getElementById("message")?.value.trim() || "";

  const text =
`Hello Vishwa Vikshanam Tours,
I am interested in ${destination}.
Name: ${name}
Phone / WhatsApp: ${phone}
Requirements: ${message}`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
}

document.querySelectorAll(".enquire-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const destination = button.dataset.destination || "";
    const select = document.getElementById("destination");
    if (select) select.value = destination;
    document.getElementById("enquiry")?.scrollIntoView({behavior:"smooth"});
  });
});

document.getElementById("enquiryForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const destination = document.getElementById("destination").value;
  sendWhatsApp(destination);
});

const search = document.getElementById("tourSearch");
const grid = document.getElementById("tourGrid");
const count = document.getElementById("tourCount");

search?.addEventListener("input", () => {
  const q = search.value.trim().toLowerCase();
  const cards = [...grid.querySelectorAll(".card")];
  let visible = 0;
  cards.forEach(card => {
    const show = card.innerText.toLowerCase().includes(q);
    card.hidden = !show;
    if (show) visible++;
  });
  count.textContent = `${visible} tour${visible === 1 ? "" : "s"}`;
});
