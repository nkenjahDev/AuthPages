// Password toggle
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePassword');
const togglePasswordIcon = document.getElementById('togglePasswordIcon');

if (togglePasswordBtn) {
  togglePasswordBtn.addEventListener('click', function () {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    togglePasswordIcon.className = type === 'password' ? 'bi bi-eye' : 'bi bi-eye-slash';
  });
}

// Google login (placeholder)
document.getElementById('google-login').addEventListener('click', function () {
  alert('Google login integration goes here.');
  // Here you would integrate Google OAuth using their JS SDK or redirect to your backend
});