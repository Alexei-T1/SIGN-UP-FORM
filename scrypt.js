const passConInput = document.getElementById('confirm-password');
const passInput = document.getElementById('password');

passConInput.addEventListener('input', checkSame);

function checkSame(e) {
  e.preventDefault();

  if (passConInput.value !== passInput.value && passConInput.value) {
    passConInput.classList.add('Error-pass');
    passInput.classList.add('Error-pass');
    passConInput.setCustomValidity('Passwords do not match')

  } else {
    passConInput.classList.remove('Error-pass');
    passInput.classList.remove('Error-pass');
    passConInput.setCustomValidity('')
  }

}