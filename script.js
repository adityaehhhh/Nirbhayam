document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const loginPage = document.getElementById("loginPage");
  const mainContent = document.getElementById("mainContent");
  let emergencyContacts = [];

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emergencyInput = document.getElementById("emergencyContact").value;
    emergencyContacts = emergencyInput.split(",").map((contact) => contact.trim());
    alert("Login successful! Welcome to Nirbhayam.");
    loginPage.style.display = "none";
    mainContent.style.display = "block";
  });

  const sosButton = document.getElementById("sosButton");
  sosButton.addEventListener("click", function () {
    if (emergencyContacts.length > 0) {

      emergencyContacts.forEach((contact) => {
        const smsLink = `sms:${contact}?body=HELP%20!!`;
        window.location.href = smsLink;
      });

     setTimeout(() => {
        window.location.href = "tel:112";
      }, 500);
    } else {
      alert("No emergency contacts provided!");
    }
  });
});

