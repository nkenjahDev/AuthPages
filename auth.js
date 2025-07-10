// Helper to show/hide forms
function showForm(formId) {
  const forms = document.querySelectorAll('.auth-form');
  forms.forEach(f => f.classList.add('d-none'));
  document.getElementById(formId).classList.remove('d-none');

  // Update title and subtitle
  const title = document.getElementById('auth-title');
  const subtitle = document.getElementById('auth-subtitle');
  switch (formId) {
    case 'login-form':
      title.textContent = 'Sign In';
      subtitle.textContent = 'Welcome back! Please login to your account.';
      break;
    case 'register-form':
      title.textContent = 'Register';
      subtitle.textContent = 'Create your account. It’s free and only takes a minute!';
      break;
    case 'forgot-form':
      title.textContent = 'Forgot Password';
      subtitle.textContent = 'Enter your email to receive a password reset link.';
      break;
    case 'reset-form':
      title.textContent = 'Reset Password';
      subtitle.textContent = 'Set a new password for your account.';
      break;
  }
}

// Navigation event listeners
if (document.getElementById('show-register')) {
  document.getElementById('show-register').onclick = e => { e.preventDefault(); showForm('register-form'); };
}
if (document.getElementById('show-login')) {
  document.getElementById('show-login').onclick = e => { e.preventDefault(); showForm('login-form'); };
}
if (document.getElementById('show-login-2')) {
  document.getElementById('show-login-2').onclick = e => { e.preventDefault(); showForm('login-form'); };
}
if (document.getElementById('show-login-3')) {
  document.getElementById('show-login-3').onclick = e => { e.preventDefault(); showForm('login-form'); };
}
if (document.getElementById('show-forgot')) {
  document.getElementById('show-forgot').onclick = e => { e.preventDefault(); showForm('forgot-form'); };
}

// Password toggle logic for all password fields
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
setupPasswordToggle('login-password', 'toggleLoginPassword', 'toggleLoginPasswordIcon');
setupPasswordToggle('register-password', 'toggleRegisterPassword', 'toggleRegisterPasswordIcon');
setupPasswordToggle('register-confirm-password', 'toggleRegisterConfirmPassword', 'toggleRegisterConfirmPasswordIcon');
setupPasswordToggle('reset-password', 'toggleResetPassword', 'toggleResetPasswordIcon');
setupPasswordToggle('reset-confirm-password', 'toggleResetConfirmPassword', 'toggleResetConfirmPasswordIcon');

// Google login (placeholder)
if (document.getElementById('google-login')) {
  document.getElementById('google-login').addEventListener('click', function () {
    alert('Google login integration goes here.');
    // Integrate Google OAuth here
  });
}