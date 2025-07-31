document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
});

function validateContactForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields before submitting.");
    return false;
  }
  alert("Message sent successfully. Thank you!");
  return true;
}
