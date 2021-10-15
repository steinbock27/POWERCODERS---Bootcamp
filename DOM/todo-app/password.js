const password = prompt('Please enter your password');

if (password !== 'secure') {
  window.location.href = 'redirect.html';
}
