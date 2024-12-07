// Simulated database
const users = [];

// Elements
const registrationForm = document.getElementById('registrationForm');
const loginForm = document.getElementById('loginForm');
const homePage = document.getElementById('homePage');
const registerError = document.getElementById('registerError');
const loginError = document.getElementById('loginError');
const userNameDisplay = document.getElementById('userName');

// Registration Logic
document.getElementById('register').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  if (users.some(user => user.email === email)) {
    registerError.textContent = "This email is already registered. Please use a different email.";
  } else {
    users.push({ email, password });
    registerError.textContent = "";
    alert("Registration successful! Redirecting to login.");
    registrationForm.classList.add('d-none');
    loginForm.classList.remove('d-none');
  }
});

// Login Logic
document.getElementById('login').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const user = users.find(user => user.email === email);

  if (!user) {
    loginError.textContent = "No user found with this email.";
  } else if (user.password !== password) {
    loginError.textContent = "Incorrect password.";
  } else {
    loginError.textContent = "";
    alert("Login successful! Redirecting to home.");
    loginForm.classList.add('d-none');
    homePage.classList.remove('d-none');
    userNameDisplay.textContent = email;
  }
});

// Logout Logic
document.getElementById('logout').addEventListener('click', () => {
  homePage.classList.add('d-none');
  loginForm.classList.remove('d-none');
  alert("You have logged out.");
});
