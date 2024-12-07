const storedUsers = JSON.parse(localStorage.getItem('users')) || [];


document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const user = storedUsers.find(user => user.email === email);

  if (!user) {
    Swal.fire({
      icon: 'error',
      title: 'User Not Found',
      text: 'No user found with this email!',
      confirmButtonColor: '#6a0dad',
    });
  } else if (user.password !== password) {
    Swal.fire({
      icon: 'error',
      title: 'Incorrect Password',
      text: 'Please check your password and try again.',
      confirmButtonColor: '#6a0dad',
    });
  } else {
    sessionStorage.setItem('currentUser', email);
    Swal.fire({
      icon: 'success',
      title: 'Login Successful!',
      text: 'Redirecting to home page...',
      confirmButtonColor: '#6a0dad',
    }).then(() => {
      window.location.href = "homepage.html";
    });
  }
});


// document.getElementById('loginForm').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = document.getElementById('loginEmail').value;
//   const password = document.getElementById('loginPassword').value;

//   const user = storedUsers.find(user => user.email === email);

//   if (!user) {
//     document.getElementById('loginError').textContent = "No user found with this email.";
//   } else if (user.password !== password) {
//     document.getElementById('loginError').textContent = "Incorrect password.";
//   } else {
//     sessionStorage.setItem('currentUser', email);
//     alert("Login successful! Redirecting to home.");
//     window.location.href = "homepage.html";
//   }
// });
