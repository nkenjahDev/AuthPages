// Password toggles
function setupPasswordToggle(inputId, btnId, iconId) {
  const input = document.getElementById(inputId);
  const btn = document.getElementById(btnId);
  const icon = document.getElementById(iconId);
  if (btn && input && icon) {
    btn.addEventListener('click', function () {
      const type = input.type === 'password' ? 'text' : 'password';
      input.type = type;
      icon.className = type === 'password' ? 'bi bi-eye' : 'bi bi-eye-slash';
    });
  }
}
setupPasswordToggle('register-password', 'toggleRegisterPassword', 'toggleRegisterPasswordIcon');
setupPasswordToggle('register-confirm-password', 'toggleRegisterConfirmPassword', 'toggleRegisterConfirmPasswordIcon');

// Form validation
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', function (e) {
  let valid = true;
  const email = document.getElementById('register-email');
  const username = document.getElementById('register-username');
  const password = document.getElementById('register-password');
  const confirmPassword = document.getElementById('register-confirm-password');

  // Email validation
  if (!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) {
    email.classList.add('is-invalid');
    valid = false;
  } else {
    email.classList.remove('is-invalid');
  }

  // Username validation
  if (!username.value) {
    username.classList.add('is-invalid');
    valid = false;
  } else {
    username.classList.remove('is-invalid');
  }

  // Password validation
  if (!password.value || password.value.length < 6) {
    password.classList.add('is-invalid');
    valid = false;
  } else {
    password.classList.remove('is-invalid');
  }

  // Confirm password validation
  if (confirmPassword.value !== password.value || !confirmPassword.value) {
    confirmPassword.classList.add('is-invalid');
    valid = false;
  } else {
    confirmPassword.classList.remove('is-invalid');
  }

  if (!valid) {
    e.preventDefault();
    e.stopPropagation();
  }
});