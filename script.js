document.getElementById('togglePwd').addEventListener('click', () => {
  const pwd = document.getElementById('password');
  pwd.type = pwd.type === 'password' ? 'text' : 'password';
});

document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value.trim();
  const messageBox = document.getElementById('message');

  messageBox.style.display = 'block';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

  if (!email || !emailRegex.test(email)) {
    return showMessage('Please enter a valid email.', 'error');
  }

  if (!phoneRegex.test(phone)) {
    return showMessage('Phone number must be 10 digits.', 'error');
  }

  if (!passwordRegex.test(password)) {
    return showMessage('Password must contain uppercase, lowercase, number, and be 6+ chars.', 'error');
  }

  showMessage('Form submitted successfully!', 'success');
});

function showMessage(msg, type) {
  const box = document.getElementById('message');
  box.textContent = msg;
  box.className = `message-box ${type}`;
}