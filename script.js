const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.getElementById("myForm");
const messageBox = document.getElementById("message");

// Toggle password visibility
document.getElementById("togglePwd").addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
});

document.getElementById("toggleConfirmPwd").addEventListener("click", () => {
  confirmPassword.type = confirmPassword.type === "password" ? "text" : "password";
});

// Validate on form submit
form.addEventListener("submit", function (e) {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    messageBox.style.display = "block";
    messageBox.textContent = "Passwords do not match!";
  } else {
    messageBox.style.display = "none";
  }
});
