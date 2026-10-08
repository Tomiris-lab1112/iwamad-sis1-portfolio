// ---------- Theme toggle ----------
const html = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const toggleLabel = document.getElementById('theme-label');

function applyTheme(theme) {
  html.dataset.theme = theme;
  const isDark = theme === 'dark';
  toggle.setAttribute('aria-pressed', String(isDark));
  toggleLabel.textContent = isDark ? 'Light mode' : 'Dark mode';
}

let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) { /* storage unavailable */ }
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(saved || (prefersDark ? 'dark' : 'light'));

toggle.addEventListener('click', () => {
  const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
});

// ---------- Contact form validation ----------
const form = document.getElementById('contact-form');
const success = document.getElementById('form-success');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function setError(input, message) {
  const box = document.getElementById(input.id + '-error');
  box.textContent = message;
  input.setAttribute('aria-invalid', message ? 'true' : 'false');
}

function validate() {
  const name = form.elements.name;
  const email = form.elements.email;
  const message = form.elements.message;
  const errors = [];

  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  setError(name, !nameValue ? 'Please enter your name.' : '');
  if (!nameValue) errors.push(name);

  if (!emailValue) {
    setError(email, 'Please enter your email address.');
    errors.push(email);
  } else if (!emailPattern.test(emailValue)) {
    setError(email, 'This email looks wrong. Use the format name@example.com.');
    errors.push(email);
  } else {
    setError(email, '');
  }

  setError(message, !messageValue ? 'Please write a message.' : '');
  if (!messageValue) errors.push(message);

  return errors;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  success.textContent = '';
  const errors = validate();
  if (errors.length) {
    errors[0].focus();
    return;
  }
  success.textContent = 'Thank you! Your message is ready — nothing was actually sent.';
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
