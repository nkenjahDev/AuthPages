const forgotForm = document.getElementById('forgot-form');
forgotForm.addEventListener('submit', function (e) {
  const email = document.getElementById('forgot-email');
  let valid = true;
  if (!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) {
    email.classList.add('is-invalid');
    valid = false;
  } else {
    email.classList.remove('is-invalid');
  }
  if (!valid) {
    e.preventDefault();
    e.stopPropagation();
  }
});