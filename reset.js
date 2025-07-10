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
setupPasswordToggle('reset-password', 'toggleResetPassword', 'toggleResetPasswordIcon');
setupPasswordToggle('reset-confirm-password', 'toggleResetConfirmPassword', 'toggleResetConfirmPasswordIcon');

const resetForm = document.getElementById('reset-form');
resetForm.addEventListener('submit', function (e) {
  let valid = true;
  const password = document.getElementById('reset-password');
  const confirmPassword = document.getElementById('reset-confirm-password');

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