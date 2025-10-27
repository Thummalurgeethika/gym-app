document.getElementById("joinForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from reloading page

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email) {
    alert(`💪 Welcome to Geethu Fitness Club, ${name}! We'll contact you at ${email}.`);
    this.reset(); // clear form after submit
  } else {
    alert("⚠️ Please fill in all details!");
  }
});
