// Password toggle
const loginPasswordInput = document.getElementById('login-password');
const toggleLoginPasswordBtn = document.getElementById('toggleLoginPassword');
const toggleLoginPasswordIcon = document.getElementById('toggleLoginPasswordIcon');
if (toggleLoginPasswordBtn) {
  toggleLoginPasswordBtn.addEventListener('click', function () {
    const type = loginPasswordInput.type === 'password' ? 'text' : 'password';
    loginPasswordInput.type = type;
    toggleLoginPasswordIcon.className = type === 'password' ? 'bi bi-eye' : 'bi bi-eye-slash';
  });
}

// Form validation
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function (e) {
  let valid = true;
  const email = document.getElementById('login-email');
  const password = document.getElementById('login-password');

  // Email validation
  if (!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) {
    email.classList.add('is-invalid');
    valid = false;
  } else {
    email.classList.remove('is-invalid');
  }

  // Password validation
  if (!password.value) {
    password.classList.add('is-invalid');
    valid = false;
  } else {
    password.classList.remove('is-invalid');
  }

  if (!valid) {
    e.preventDefault();
    e.stopPropagation();
  }
});

// Google login (placeholder)
const googleLoginBtn = document.getElementById('google-login');
if (googleLoginBtn) {
  googleLoginBtn.addEventListener('click', function () {
    alert('Google login integration goes here.');
  });
}